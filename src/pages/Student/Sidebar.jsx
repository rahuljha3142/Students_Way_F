// import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BsGraphUp, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots,BsListTask, BsFillQuestionOctagonFill } from 'react-icons/bs';
import { CgNotes } from "react-icons/cg";
import "../../Styles/Sidebar.css";
import bg1 from "../../assets/student.png"

import PropTypes from 'prop-types'





const Sidebar = ({ isOpen, toggleSidebar }) => {
  
  return (
    
      <div className="SidebarContainer" style={{ width: isOpen ? '250px' : '55px' }}>
        <div className="SidebarHeader">
          <img className='Logo' src={bg1} alt="logo" />
        </div>
        <ul className="SidebarNav" >
          <NavLink className="SidebarNavItem" to="/student/dashboard">
            <NavLink className="SidebarIcon" to="/student/dashboard"><BsGraphUp /></NavLink>
            <NavLink className="StyledLink" to="/student/dashboard">Dashboard</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/assignments">
            <div className="SidebarIcon"><BsFileText /></div>
            <NavLink className="StyledLink" to="/student/assignments">Assignments</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/tasks">
            <div className="SidebarIcon"><BsListTask /></div>
            <NavLink className="StyledLink" to="/student/tasks">Task Scheduler</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/notes">
            <div className="SidebarIcon"><CgNotes /></div>
            <NavLink className="StyledLink" to="/student/notes">Notes</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/mcq">
            <div className="SidebarIcon"><BsFillQuestionOctagonFill /></div>
            <NavLink className="StyledLink" to="/student/mcq">MCQ Generator</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/exams">
            <div className="SidebarIcon"><BsBook /></div>
            <NavLink className="StyledLink" to="/student/exams">Exams</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/performance">
            <div className="SidebarIcon"><BsGraphDown /></div>
            <NavLink className="StyledLink" to="/student/performance">Performance</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/attendance">
            <div className="SidebarIcon"><BsCalendar /></div>
            <NavLink className="StyledLink" to="/student/attendance">Attendance</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/library">
            <div className="SidebarIcon"><BsBook /></div>
            <NavLink className="StyledLink" to="/student/library">Library</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/communication">
            <div className="SidebarIcon"><BsChatDots /></div>
            <NavLink className="StyledLink" to="/student/communication">Announcement</NavLink>
          </NavLink>
          <NavLink className="SidebarNavItem" to="/student/settings">
            <div className="SidebarIcon"><BsGear /></div>
            <NavLink className="StyledLink" to="/student/settings">Profile</NavLink>
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

