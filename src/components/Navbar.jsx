import { NavLink, useNavigate} from "react-router-dom";
import "../Styles/Navbar.css";
// import logo from "../assets/bg4.webp";

export const Navbar = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
      navigate('/choose-user');
    };

  return (
    <>
      <nav className='Navbar'>
            {/* <img className='Logo' src={logo} alt="Logo" /> */}
            <h1 className="Logo">Students_Way</h1>
            <div className="NavigationLinks">
                <ul>
                    <li>
                        <NavLink className="HomeLink" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="HomeLink" to="#">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink className="HomeLink" to="/contact">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className="ButtonsContainer">
                <button className='LoginButton' onClick={handleLoginClick}>Sign In</button>
                <button className='GuestButton' onClick={handleLoginClick}>Guest Mode</button>
            </div>
        </nav>
    </>
  );
};