
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas molestias libero ipsum sit consequuntur illo ut praesentium officiis amet delectus commodi quos dolore sapiente fugit quaerat hic architecto, ab natus porro. Temporibus, nam distinctio.
                </p>
                    {/* <NavLink className="HomeLink" to="/admin-register">Admin Register</NavLink> */}
            </div>
            <img className='SchoolImage' src={bg} alt="pupil" />
        </div>
    </>
  )
}

export default Home
