import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'; 
import "../Styles/AdminSignin.css";
import { Navbar } from './Navbar';

const URL = "https://students-way-b.onrender.com/api/auth/login";
// const URL = import.meta.env.VITE_LOGIN_API;


export default function AdminSignin() {

    let [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false); // 👁️ toggle

    const navigate = useNavigate();

    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful!");

                // redirect based on role
                if (data.token) {
                    const tokenPayload = parseJwt(data.token);
                    const role = tokenPayload?.role || "student";

                    switch(role) {
                        case "admin":
                            navigate("/admin/dashboard");
                            break;
                        case "teacher":
                            navigate("/teacher/dashboard");
                            break;
                        case "parent":
                            navigate("/parent/dashboard");
                            break;
                        case "student":
                            navigate("/student/dashboard");
                            break;
                        default:
                            navigate("/");
                    }
                }
            } else {
                alert(data.message || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

     const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    return (
        <div className="AdminSignInContainer">
    <Navbar />
            <h1>Admin Login</h1>
            <form className="FormContainer" onSubmit={handleSubmit}>
                <input  
                    className="InputField"
                    placeholder="enter username" 
                    type="text" 
                    value={formData.username} 
                    onChange={handleInputChange}
                    id="username"
                    name="username"
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
                <button className="SubmitButton">LOGIN</button>
                <br />
                
                <span>Don&apos;t have an account?</span>
                <NavLink to="/admin-register">Register</NavLink>
            </form>
        </div>
    );
}