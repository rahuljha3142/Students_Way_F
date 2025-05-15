import { NavLink } from 'react-router-dom';
import {
  BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsBoxArrowLeft,
  BsCalendar, BsGear, BsChatDots, BsCalendarEvent
} from 'react-icons/bs';
import "../../Styles/Sidebar.css";
import bg1 from "../../assets/teacher.png";
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="SidebarContainer" style={{ width: isOpen ? '250px' : '46px' }}>
      <div className="SidebarHeader">
        <img className="Logo" src={bg1} alt="logo" />
      </div>
      <ul className="SidebarNav">
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/dashboard">
            <div className="SidebarIcon"><BsGraphUp /></div>
            <span className="SidebarLabel">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/classes">
            <div className="SidebarIcon"><BsPeople /></div>
            <span className="SidebarLabel">Classes</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/students">
            <div className="SidebarIcon"><BsPeople /></div>
            <span className="SidebarLabel">Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/teachers">
            <div className="SidebarIcon"><BsPerson /></div>
            <span className="SidebarLabel">Teachers</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/assignments">
            <div className="SidebarIcon"><BsFileText /></div>
            <span className="SidebarLabel">Assignments</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/exams">
            <div className="SidebarIcon"><BsBook /></div>
            <span className="SidebarLabel">Exams</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/performance">
            <div className="SidebarIcon"><BsGraphDown /></div>
            <span className="SidebarLabel">Performance</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/attendance">
            <div className="SidebarIcon"><BsCalendar /></div>
            <span className="SidebarLabel">Attendance</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/communication">
            <div className="SidebarIcon"><BsChatDots /></div>
            <span className="SidebarLabel">Announcement</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/events">
            <div className="SidebarIcon"><BsCalendarEvent /></div>
            <span className="SidebarLabel">Events & Calendar</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/teacher/settings">
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
