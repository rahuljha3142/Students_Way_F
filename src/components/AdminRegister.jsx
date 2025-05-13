import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import "../Styles/AdminRegister.css";
import { Navbar } from './Navbar';
import { useAuth } from "../store/Auth";

const URL = "https://students-way-b.onrender.com/api/auth/register";

export default function AdminRegister() {

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        role: "none", 
    });

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const {storeTokenInLS} = useAuth();

    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

         if (formData.role === "none") {
            alert("Please select a valid role before proceeding.");
            return;
        }
        
    try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        //   credentials: "include",
          body: JSON.stringify(formData),
        });
        console.log("registration form", response);
  
        if(response.ok) {
            const res_data = await response.json();
            storeTokenInLS(res_data.token);
            
            alert("Registration successful!");
            setFormData({ fullName: "", username: "", email: "", password: "", role: "none", });
            navigate("/admin-signIn")
        }
      } catch (error) {
        console.error("Error", error);
        alert("Registration failed. Please try again.");
      }

    };

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

   

    return (
        <>
        <Navbar />
        <div className="AdminRegisterContainer">
        <h1>Admin Register</h1>
            <form className="FormContainer" onSubmit={handleSubmit}>
                {/* <label htmlFor="fullName">Name</label> */}
                <input 
                    className="InputField"
                    placeholder="Enter Full Name" 
                    type="text" 
                    value={formData.fullName} 
                    onChange={handleInputChange}
                    id="fullName"
                    name="fullName"
                />
                <input 
                    className="InputField"
                    placeholder="Create Your Username" 
                    type="text" 
                    value={formData.username} 
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />
                <input 
                    className="InputField"
                    placeholder="Enter Your Email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange}
                    id="email"
                    name="email"
                />
                <div className="PasswordFieldWrapper">
                <input 
                    className="InputField passwordInput"
                    placeholder="Enter Password" 
                    type={showPassword ? "text" : "password"}
                    value={formData.password} 
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                />
                <span className="TogglePassword" onClick={togglePasswordVisibility}>
                  {showPassword ? "🙈" : "👁️"}
                </span>
                </div>
                <select
                    className="InputField"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                >
                    <option value="none" disabled>Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="parent">Parent</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
                <button>REGISTER</button>
                <br />

                <span>Already have an account?</span>
                <NavLink to="/admin-signIn">Login</NavLink>
            </form>
        </div>
        </>
    );
}