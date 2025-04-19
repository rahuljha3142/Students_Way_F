// import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BsGraphUp, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots } from 'react-icons/bs';
import "../../Styles/Sidebar.css";
import bg1 from "../../assets/parent.png"

import PropTypes from 'prop-types'





const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
    
      <div className="SidebarContainer" style={{ width: isOpen ? '250px' : '55px' }}>
        <div className="SidebarHeader">
          <img className='Logo' src={bg1} alt="logo" />
        </div>
        <ul className="SidebarNav">
          <NavLink className="SidebarNavItem" to="/parent/dashboard">
            <NavLink className="SidebarIcon" to="/parent/dashboard"><BsGraphUp /></NavLink>
            <NavLink className="StyledLink" to="/parent/dashboard">Dashboard</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/parent/assignments">
            <div className="SidebarIcon"><BsFileText /></div>
            <NavLink className="StyledLink" to="/parent/assignments">Assignments</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/parent/exams">
            <div className="SidebarIcon"><BsBook /></div>
            <NavLink className="StyledLink" to="/parent/exams">Exams</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/parent/performance">
            <div className="SidebarIcon"><BsGraphDown /></div>
            <NavLink className="StyledLink" to="/parent/performance">Performance</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/parent/attendance">
            <div className="SidebarIcon"><BsCalendar /></div>
            <NavLink className="StyledLink" to="/parent/attendance">Attendance</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/parent/communication">
            <div className="SidebarIcon"><BsChatDots /></div>
            <NavLink className="StyledLink" to="/parent/communication">Announcement</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/parent/settings">
            <div className="SidebarIcon"><BsGear /></div>
            <NavLink className="StyledLink" to="/parent/settings">Settings & Profile</NavLink>
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
