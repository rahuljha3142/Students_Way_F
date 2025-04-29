import { NavLink } from 'react-router-dom';
import {
  BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook,
  BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent
} from 'react-icons/bs';

import "../../Styles/Sidebar.css";
import bg1 from "../../assets/admin.png";
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="SidebarContainer" style={{ width: isOpen ? '220px' : '60px' }}>
      <div className="SidebarHeader">
        <img className='Logo' src={bg1} alt="logo" />
      </div>
      <ul className="SidebarNav">
        <li>
          <NavLink className="SidebarNavItem" to="/admin/dashboard">
            <div className="SidebarIcon"><BsGraphUp /></div>
            <span className="SidebarLabel">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/classes">
            <div className="SidebarIcon"><BsPeople /></div>
            <span className="SidebarLabel">Classes</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/students">
            <div className="SidebarIcon"><BsPeople /></div>
            <span className="SidebarLabel">Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/teachers">
            <div className="SidebarIcon"><BsPerson /></div>
            <span className="SidebarLabel">Teachers</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/assignments">
            <div className="SidebarIcon"><BsFileText /></div>
            <span className="SidebarLabel">Assignments</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/exams">
            <div className="SidebarIcon"><BsBook /></div>
            <span className="SidebarLabel">Exams</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/performance">
            <div className="SidebarIcon"><BsGraphDown /></div>
            <span className="SidebarLabel">Performance</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/attendance">
            <div className="SidebarIcon"><BsCalendar /></div>
            <span className="SidebarLabel">Attendance</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/library">
            <div className="SidebarIcon"><BsBook /></div>
            <span className="SidebarLabel">Library</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/communication">
            <div className="SidebarIcon"><BsChatDots /></div>
            <span className="SidebarLabel">Announcement</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/events">
            <div className="SidebarIcon"><BsCalendarEvent /></div>
            <span className="SidebarLabel">Events & Calendar</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/admin/settings">
            <div className="SidebarIcon"><BsGear /></div>
            <span className="SidebarLabel">Settings & Profile</span>
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
