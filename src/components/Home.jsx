
import { NavLink } from 'react-router-dom'; 
import "../Styles/Home.css"
import bg from "../assets/bg.png";
import { Navbar } from './Navbar';

const Home = () => {

    

  return (
    <>
        <Navbar />

        <div className="HomeContainer">
            <div className="SchoolInfo">
                <h1>School Management System</h1>
                <p className="TextContainer">
                  Discover your ideal career path with our smart recommendation platform. This system analyzes your academic performance, interests, and skills to suggest the most suitable career options. Whether you're uncertain about the future or exploring new possibilities, our tool provides personalized guidance to help you make informed decisions for a successful career.
                </p>
                    {/* <NavLink className="HomeLink" to="/admin-register">Admin Register</NavLink> */}
            </div>
            <img className='SchoolImage' src={bg} alt="pupil" />
        </div>
    </>
  )
}

export default Home
