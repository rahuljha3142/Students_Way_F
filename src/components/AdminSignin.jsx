import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'; 
import "../Styles/AdminSignin.css";
import { Navbar } from './Navbar';

const URL = "http://localhost:5000/api/auth/login";

export default function AdminSignin() {

    let [formData, setFormData] = useState({
        // fullName: "",
        username: "",
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
            console.log("login form", response);
      
            if(response.ok) {
              alert("login successfull")
              setFormData({ username: "", password: "" });
              navigate("/admin/dashboard");
            } else {
              alert("invalid credentials")
              console.log("invalid credentials")
            }
          } catch (error) {
            console.log(error);
          }

        // setFormData({
        //     // fullName: "",
        //     username: "",
        //     password: "",
        // });
    };

    return (
        <div className="AdminSignInContainer">
    <Navbar />
            <h1>Admin Login</h1>
            <form className="FormContainer" onSubmit={handleSubmit}>
                {/* <label htmlFor="fullName">Enter your Name</label> */}
                {/* <input 
                    className="InputField"
                    placeholder="enter full name" 
                    type="text" 
                    value={formData.fullName} 
                    onChange={handleInputChange}
                    id="fullName"
                    name="fullName"
                /> */}
                {/* <br /><br /> */}
                {/* <label htmlFor="username">Username</label> */}
                <input  
                    className="InputField"
                    placeholder="enter username" 
                    type="text" 
                    value={formData.username} 
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />
                {/* <br /><br /> */}
                {/* <label htmlFor="password">Password</label> */}
                <input  
                    className="InputField"
                    placeholder="enter password" 
                    type="password" 
                    value={formData.password} 
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                />
                {/* <br /><br /><br /> */}
                <NavLink className="button" to="/admin/dashboard">Submit</NavLink>
            </form>
        </div>
    );
}