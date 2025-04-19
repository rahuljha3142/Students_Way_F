import { useState } from "react";
import "../Styles/ParentSignin.css";
import { Navbar } from './Navbar';

export default function ParentSignin() {

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    })

    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    };

    let handleSubmit =(event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return (
        <div className="ParentSignInContainer">
    <Navbar />
            <h1>Parent Login</h1>
            <form className="FormContainer" onSubmit={handleSubmit}>
                {/* <label htmlFor="fullName">Enter your Name</label> */}
                <input 
                    className="InputField"
                    placeholder="enter full name" 
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
                <button>submit</button>
            </form>
        </div>
    );
}