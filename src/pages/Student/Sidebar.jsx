import { NavLink } from 'react-router-dom';
import {
  BsGraphUp, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear,
  BsChatDots, BsListTask, BsFillQuestionOctagonFill
} from 'react-icons/bs';
import { CgNotes } from "react-icons/cg";
import "../../Styles/Sidebar.css";
import bg1 from "../../assets/student.png";
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="SidebarContainer" style={{ width: isOpen ? '250px' : '46px' }}>
      <div className="SidebarHeader">
        <img className="Logo" src={bg1} alt="logo" />
      </div>
      <ul className="SidebarNav">
        <li>
          <NavLink className="SidebarNavItem" to="/student/dashboard">
            <div className="SidebarIcon"><BsGraphUp /></div>
            <span className="SidebarLabel">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/assignments">
            <div className="SidebarIcon"><BsFileText /></div>
            <span className="SidebarLabel">Assignments</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/tasks">
            <div className="SidebarIcon"><BsListTask /></div>
            <span className="SidebarLabel">Task Scheduler</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/notes">
            <div className="SidebarIcon"><CgNotes /></div>
            <span className="SidebarLabel">Notes</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/mcq">
            <div className="SidebarIcon"><BsFillQuestionOctagonFill /></div>
            <span className="SidebarLabel">MCQ Generator</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/exams">
            <div className="SidebarIcon"><BsBook /></div>
            <span className="SidebarLabel">Exams</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/performance">
            <div className="SidebarIcon"><BsGraphDown /></div>
            <span className="SidebarLabel">Performance</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/attendance">
            <div className="SidebarIcon"><BsCalendar /></div>
            <span className="SidebarLabel">Attendance</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/library">
            <div className="SidebarIcon"><BsBook /></div>
            <span className="SidebarLabel">Library</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/communication">
            <div className="SidebarIcon"><BsChatDots /></div>
            <span className="SidebarLabel">Announcement</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="SidebarNavItem" to="/student/settings">
            <div className="SidebarIcon"><BsGear /></div>
            <span className="SidebarLabel">Profile</span>
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
