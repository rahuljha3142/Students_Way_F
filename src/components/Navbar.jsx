import { NavLink, /*useNavigate*/ } from "react-router-dom";
import { useState } from "react";
import "../Styles/Navbar.css";

export const Navbar = () => {
  // const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // const handleLoginClick = () => {
  //   navigate('/choose-user');
  // };

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
              <NavLink className="HomeLink" to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink className="HomeLink" to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </li>
            <li>
              <NavLink className="HomeLink" to="/admin-signIn" onClick={() => setMenuOpen(false)}>Login</NavLink>
            </li>
            <li>
              <NavLink className="HomeLink" to="/admin-register" onClick={() => setMenuOpen(false)}>Register</NavLink>
            </li>
            {/* <li className="nav-item ">
              <button className="HomeLink">Login</button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/admin-signIn" onClick={() => setMenuOpen(false)}>Admin</NavLink></li>
                <li><NavLink className="dropdown-item" to="/teacher-signIn" onClick={() => setMenuOpen(false)}>Teacher</NavLink></li>
                <li><div className="dropdown-divider"></div></li>
                <li><NavLink className="dropdown-item" to="/parent-signIn" onClick={() => setMenuOpen(false)}>Parent</NavLink></li>
                <li><NavLink className="dropdown-item" to="/student-signIn" onClick={() => setMenuOpen(false)}>Student</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <button className=" HomeLink">Register</button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/admin-register" onClick={() => setMenuOpen(false)}>Admin</NavLink></li>
                <li><NavLink className="dropdown-item" to="/teacher-signIn" onClick={() => setMenuOpen(false)}>Teacher</NavLink></li>
                <li><div className="dropdown-divider"></div></li>
                <li><NavLink className="dropdown-item" to="/parent-signIn" onClick={() => setMenuOpen(false)}>Parent</NavLink></li>
                <li><NavLink className="dropdown-item" to="/student-signIn" onClick={() => setMenuOpen(false)}>Student</NavLink></li>
              </ul>
            </li> */}
          </ul>
        </div>

        {/* Buttons */}
        {/* <div className="ButtonsContainer">
          <button className='LoginButton' onClick={handleLoginClick}>Sign In</button>
          <button className='GuestButton' onClick={handleLoginClick}>Guest Mode</button>
        </div> */}
      </nav>
    </>
  );
};
