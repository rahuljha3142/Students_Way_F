import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'; 
import "../Styles/AdminSignin.css";
import { Navbar } from './Navbar';

const URL = "https://students-way-b.onrender.com/api/auth/login";
// const URL = import.meta.env.VITE_LOGIN_API;


export default function AdminSignin() {

    let [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false); // 👁️ toggle

    const navigate = useNavigate();

    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await fetch(URL, {
            method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            console.log("login form", response);
      
            if(response.ok) {
              alert("login successfull")
              setFormData({ email: "", password: "" });
              navigate("/admin/dashboard");
            } else {
              alert("invalid credentials")
              console.log("invalid credentials")
            }
          } catch (error) {
            console.log(error);
          }
    };

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
        <div className="AdminSignInContainer">
    <Navbar />
            <h1>Admin Login</h1>
            <form className="FormContainer" onSubmit={handleSubmit}>
                <input  
                    className="InputField"
                    placeholder="enter email" 
                    type="text" 
                    value={formData.email} 
                    onChange={handleInputChange}
                    id="email"
                    name="email"
                />

                <div className="PasswordFieldWrapper">
                <input  
                    className="InputField passwordInput"
                    placeholder="enter password" 
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
                <button className="SubmitButton">Submit</button>
            </form>
        </div>
    );
}