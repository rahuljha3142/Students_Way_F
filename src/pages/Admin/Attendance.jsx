import { useState } from 'react';
import Sidebar from './Sidebar';
import '../../Styles/Attendance.css';

const Attendance = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [students] = useState([
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    { id: 3, name: 'Student 3' },
    // Add more students as needed
  ]);

  const [attendanceData, setAttendanceData] = useState([]);

  const initializeAttendanceData = () => {
    const initialAttendanceData = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: 'Present', // Default to 'Present'
    }));
    setAttendanceData(initialAttendanceData);
  };

  const handleStatusChange = (id, status) => {
    const updatedData = attendanceData.map((student) => {
      if (student.id === id) {
        return { ...student, status };
      }
      return student;
    });
    setAttendanceData(updatedData);
  };

  // Initialize attendance data on component mount
  useState(() => {
    initializeAttendanceData();
  }, []);

  return (
    <div>
      <div className="AttendanceContainer">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="Content" style={{ marginLeft: isOpen ? '220px' : '60px' }}>
          <div className="AttendanceContent">
            <h2 className="AttendanceHeader">Attendance</h2>
            <ul className="AttendanceList">
              {attendanceData.map((student) => (
                <li className='AttendanceItem' key={student.id}>
                  <span className='StudentName'>{student.name}</span>
                  <select value={student.status} onChange={(e) => handleStatusChange(student.id, e.target.value)}>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                </li>
              ))}
            </ul>
            <button onClick={() => console.log(attendanceData)}>Submit Attendance</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
