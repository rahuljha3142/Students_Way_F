import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import "../Styles/AdminRegister.css";
import { Navbar } from './Navbar';

const URL = "http://localhost:5000/api/auth/register";

export default function AdminRegister() {

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: ""
    });

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
        console.log("registration form", response);
  
        if(response.ok) {
            setFormData({ fullName: "", username: "", email: "", password: "" });
            navigate("/admin-signIn")
        }
      } catch (error) {
        console.error("Error", error);
      }

        
        // setFormData({
        //     fullName: "",
        //     username: "",
        //     email: "",
        //     password: "",
        // });
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
                {/* <br /><br /> */}
                {/* <label htmlFor="username">Username</label> */}
                <input 
                    className="InputField"
                    placeholder="Create Your Username" 
                    type="text" 
                    value={formData.username} 
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />
                {/* <br /><br /> */}
                {/* <label htmlFor="email">Email</label> */}
                <input 
                    className="InputField"
                    placeholder="Enter Your Email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange}
                    id="email"
                    name="email"
                />
                {/* <br /><br /> */}
                {/* <label htmlFor="password">Password</label> */}
                <input 
                    className="InputField"
                    placeholder="Enter Password" 
                    type="password" 
                    value={formData.password} 
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                />
                {/* <br /> */} 

                {/* <div className="CheckboxGroup">
                    <div className="Checkbox">
                        <input type="checkbox" name="rememberMe" id="rememberMe" />
                    </div>
                    <div className="CheckBoxLabel">
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                </div> */}
                
                {/* <br /><br /> */}
                <button>REGISTER</button>
                <br />

                <span>Already have an account?</span>
                {/* <button onClick={handleClick}>Sign in</button> */}
                <NavLink to="/admin-signIn">Sign in</NavLink>
            </form>
        </div>
        </>
    );
}