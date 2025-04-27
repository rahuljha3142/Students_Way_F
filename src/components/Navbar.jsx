import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="Navbar">
        <h1 className="Logo">Students_Way</h1>

        {/* Hamburger icon */}
        <div className="Hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>

        {/* Navigation links */}
        <div className={`NavigationLinks ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink className="HomeLink" to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink className="HomeLink" to="#" onClick={() => setMenuOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink className="HomeLink" to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </li>
            <li className="nav-item dropdown">
              <button className="dropdown-toggle">Login</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Admin</a></li>
                <li><a className="dropdown-item" href="#">Teacher</a></li>
                <li><div className="dropdown-divider"></div></li>
                <li><a className="dropdown-item" href="#">Parent</a></li>
                <li><a className="dropdown-item" href="#">Student</a></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="ButtonsContainer">
          <button className='LoginButton' onClick={handleLoginClick}>Sign In</button>
          <button className='GuestButton' onClick={handleLoginClick}>Guest Mode</button>
        </div>
      </nav>
    </>
  );
};
