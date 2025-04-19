import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Contact.css"
import { Navbar } from './Navbar';
import support from "../assets/support.png"

const URL = "https://students-way-b.onrender.com/api/form/contact";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });

    // setContact((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
                                      
  };

  // handle form getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(contact);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log("contact form", response);

      if(response.ok) {
        setContact({ username: "", email: "", message: "" });
          navigate("/contact");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  
  return (
    <>
      <Navbar />

      <section className="section-contact">
        <div className="contact-content">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src={support}  alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="80"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        
      </section>
    </>
  );
};