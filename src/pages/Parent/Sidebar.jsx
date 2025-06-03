import { NavLink } from 'react-router-dom';
import { BsGraphUp, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsBoxArrowLeft } from 'react-icons/bs';
import "../../Styles/Sidebar.css";
import bg1 from "../../assets/parent.png";
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="SidebarContainer" style={{ width: isOpen ? '270px' : '70px' }}>
      <div className="SidebarHeader">
        <img className="Logo" src={bg1} alt="logo" />
      </div>
      <ul className="SidebarNav">
        <li>
          <NavLink className="SidebarNavItem" to="/parent/dashboard">
            <div className="SidebarIcon"><BsGraphUp /></div>
            <span className="SidebarLabel">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/parent/assignments">
            <div className="SidebarIcon"><BsFileText /></div>
            <span className="SidebarLabel">Assignments</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/parent/exams">
            <div className="SidebarIcon"><BsBook /></div>
            <span className="SidebarLabel">Exams</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/parent/performance">
            <div className="SidebarIcon"><BsGraphDown /></div>
            <span className="SidebarLabel">Performance</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/parent/attendance">
            <div className="SidebarIcon"><BsCalendar /></div>
            <span className="SidebarLabel">Attendance</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/parent/communication">
            <div className="SidebarIcon"><BsChatDots /></div>
            <span className="SidebarLabel">Announcement</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/parent/settings">
            <div className="SidebarIcon"><BsGear /></div>
            <span className="SidebarLabel">Settings & Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/logout">
            <div className="SidebarIcon"><BsBoxArrowLeft /></div>
            <span className="SidebarLabel">Logout</span>
          </NavLink>
        </li>
      </ul>
      <div className="ToggleButton" onClick={toggleSidebar}>
        <span
          className="ToggleIcon"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ▲
        </span>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
