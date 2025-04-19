// import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent } from 'react-icons/bs';
import "../../Styles/Sidebar.css";
import bg1 from "../../assets/teacher.png"

import PropTypes from 'prop-types'





const Sidebar = ({ isOpen, toggleSidebar }) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    
      <div className="SidebarContainer" style={{ width: isOpen ? '250px' : '55px' }}>
        <div className="SidebarHeader">
          <img className='Logo' src={bg1} alt="logo" />
        </div>
        <ul className="SidebarNav">
          <NavLink className="SidebarNavItem" to="/teacher/dashboard">
            <NavLink className="SidebarIcon" to="/teacher/dashboard"><BsGraphUp /></NavLink>
            <NavLink className="StyledLink" to="/teacher/dashboard">Dashboard</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/classes">
            <div className="SidebarIcon"><BsPeople /></div>
            <NavLink className="StyledLink" to="/teacher/classes">Classes</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/students">
            <div className="SidebarIcon"><BsPeople /></div>
            <NavLink className="StyledLink" to="/teacher/students">Students</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/teachers">
            <div className="SidebarIcon"><BsPerson /></div>
            <NavLink className="StyledLink" to="/teacher/teachers">Teachers</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/assignments">
            <div className="SidebarIcon"><BsFileText /></div>
            <NavLink className="StyledLink" to="/teacher/assignments">Assignments</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/exams">
            <div className="SidebarIcon"><BsBook /></div>
            <NavLink className="StyledLink" to="/teacher/exams">Exams</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/performance">
            <div className="SidebarIcon"><BsGraphDown /></div>
            <NavLink className="StyledLink" to="/teacher/performance">Performance</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/attendance">
            <div className="SidebarIcon"><BsCalendar /></div>
            <NavLink className="StyledLink" to="/teacher/attendance">Attendance</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/communication">
            <div className="SidebarIcon"><BsChatDots /></div>
            <NavLink className="StyledLink" to="/teacher/communication">Announcement</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/events">
            <div className="SidebarIcon"><BsCalendarEvent /></div>
            <NavLink className="StyledLink" to="/teacher/events">Events & Calendar</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/teacher/settings">
            <div className="SidebarIcon"><BsGear /></div>
            <NavLink className="StyledLink" to="/teacher/settings">Settings & Profile</NavLink>
          </NavLink>
        </ul>
        <div className="ToggleButton" onClick={toggleSidebar}>
          <span 
            className="ToggleIcon" 
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▲ 
          </span>
        </div>
      </div>
    
  )
}


Sidebar.propTypes = {
  isOpen : PropTypes.bool.isRequired,
  toggleSidebar : PropTypes.func.isRequired,
}

export default Sidebar
