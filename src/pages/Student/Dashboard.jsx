import { useState } from "react";
import Sidebar from './Sidebar';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import '../../Styles/StudentDashboard.css';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
      {/* <div className="content"> */}
        <div className="header">
          <Typography variant="h5">WELCOME BACK! GAURAV</Typography>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="project-card">
          <Typography variant="h6">Project Statistic</Typography>
          <div className="project-card-content">
            <div>
              <Typography variant="body1">School Management System</Typography>
              <Typography variant="body2">Web Development</Typography>
              <Typography variant="body2">Deadline 16 August 2024</Typography>
            </div>
            <div>
              <Typography variant="h4">85</Typography>
            </div>
          </div>
        </div>
        <div className="project-card">
          <Typography variant="h6">Inbox</Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Michael Wong" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Michael Wong" secondary="Don't forget to work on assignment page 36 in Exam-Science.xls" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Cindy Chen" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Cindy Chen" secondary="Have you made history assignments?" />
            </ListItem>
          </List>
        </div>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Exam Schedule</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Physics</td>
              <td>Class 3</td>
              <td>Tuesday</td>
              <td>3 Dec 2020</td>
              <td>08:30 AM</td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>Lab 1</td>
              <td>Monday</td>
              <td>4 Dec 2020</td>
              <td>08:30 AM</td>
            </tr>
            <tr>
              <td>Math</td>
              <td>Practice 3</td>
              <td>Thursday</td>
              <td>5 Dec 2020</td>
              <td>08:30 AM</td>
            </tr>
          </tbody>
        </table>
        <div className="task-list">
          <Typography variant="h6">Upcoming Task</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Discussion Algorithm" secondary="08:00 AM - 12:00 PM" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fundamental Math" secondary="12:00 PM - 03:00 PM" />
            </ListItem>
            <ListItem>
              <ListItemText primary="DNA Modifications in Humans" secondary="Ongoing" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
