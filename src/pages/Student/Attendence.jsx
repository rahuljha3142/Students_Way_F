import { useState } from 'react';
import Sidebar from './Sidebar';
import '../../Styles/Attendance.css'; // Import the CSS file for styling

const AttendanceSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Sample attendance data
  const attendance = [
    { id: 1, date: '2024-05-01', present: true },
    { id: 2, date: '2024-05-02', present: false },
    { id: 3, date: '2024-05-03', present: true },
    { id: 4, date: '2024-05-04', present: true },
    { id: 5, date: '2024-05-05', present: true }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='AttendanceContainer'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
        <div className="AttendanceContent">
          <h2 className="AttendanceHeader">Attendance</h2>
          <ul className="AttendanceList">
            {attendance.map(({ id, date, present }) => (
              <li className="AttendanceItem" key={id}>
                <span className="AttendanceDate">{date}</span>
                <span className={`AttendanceStatus ${present ? 'Present' : 'Absent'}`}>
                  {present ? 'Present' : 'Absent'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
