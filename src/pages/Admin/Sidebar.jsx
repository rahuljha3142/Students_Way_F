// import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent } from 'react-icons/bs';
import "../../Styles/Sidebar.css";
import bg1 from "../../assets/admin.png"

import PropTypes from 'prop-types'





const Sidebar = ({ isOpen, toggleSidebar }) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    
      <div className="SidebarContainer" style={{ width: isOpen ? '250px' : '75px' }}>
        <div className="SidebarHeader">
          <img className='Logo' src={bg1} alt="logo" />
        </div>
        <ul className="SidebarNav">
          <NavLink className="SidebarNavItem" to="/admin/dashboard">
            <NavLink className="SidebarIcon" to="/admin/dashboard"><BsGraphUp /></NavLink>
            <NavLink className="StyledLink" to="/admin/dashboard">Dashboard</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/classes">
            <div className="SidebarIcon"><BsPeople /></div>
            <NavLink className="StyledLink" to="/admin/classes">Classes</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/students">
            <div className="SidebarIcon"><BsPeople /></div>
            <NavLink className="StyledLink" to="/admin/students">Students</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/teachers">
            <div className="SidebarIcon"><BsPerson /></div>
            <NavLink className="StyledLink" to="/admin/teachers">Teachers</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/assignments">
            <div className="SidebarIcon"><BsFileText /></div>
            <NavLink className="StyledLink" to="/admin/assignments">Assignments</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/exams">
            <div className="SidebarIcon"><BsBook /></div>
            <NavLink className="StyledLink" to="/admin/exams">Exams</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/performance">
            <div className="SidebarIcon"><BsGraphDown /></div>
            <NavLink className="StyledLink" to="/admin/performance">Performance</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/attendance">
            <div className="SidebarIcon"><BsCalendar /></div>
            <NavLink className="StyledLink" to="/admin/attendance">Attendance</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/library">
            <div className="SidebarIcon"><BsBook /></div>
            <NavLink className="StyledLink" to="/admin/library">Library</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/communication">
            <div className="SidebarIcon"><BsChatDots /></div>
            <NavLink className="StyledLink" to="/admin/communication">Announcement</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/events">
            <div className="SidebarIcon"><BsCalendarEvent /></div>
            <NavLink className="StyledLink" to="/admin/events">Events & Calendar</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/admin/settings">
            <div className="SidebarIcon"><BsGear /></div>
            <NavLink className="StyledLink" to="/admin/settings">Settings & Profile</NavLink>
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
