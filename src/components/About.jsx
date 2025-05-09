// import { NavLink } from "react-router-dom";
import { Navbar } from './Navbar';
import "../Styles/About.css"
import schoolImg from '../assets/school.png';

export const About = () => {
    return (
        <>
        <Navbar />
      <div className="AboutContainer">
        <div className="AboutInfo">
          <h1>About Our School</h1>
          <p className="AboutText">
            Welcome to our School Management System. We aim to provide a comprehensive platform that helps administrators, teachers, students, and parents connect and collaborate seamlessly. With modern tools and a user-friendly interface, our system ensures efficient management of academic and administrative tasks.
          </p>
          <p className="AboutText">
            Our mission is to empower schools with technology, streamline daily operations, enhance communication, and create a more effective learning environment.
          </p>
        </div>
        <img src={schoolImg} alt="School" className="AboutImage" />
      </div>
      </>
    );
  };