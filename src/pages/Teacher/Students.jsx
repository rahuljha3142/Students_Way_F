import { useState } from 'react';
import Sidebar from './Sidebar';
import '../../Styles/Students.css'; // Import the CSS file for styling

const StudentSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  // Sample student data
  const students = [
    { id: 1, name: 'John Doe', registrationNumber: '12345', grade: '10th' },
    { id: 2, name: 'Jane Smith', registrationNumber: '67890', grade: '11th' },
    { id: 3, name: 'Michael Johnson', registrationNumber: '54321', grade: '12th' }
  ];

  return (
    <div className="StudentsContainer">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '260px' : '80px', transition: 'all ease 0.8s' }}>
        <div className="StudentsContent">
          <h2 className="StudentsHeader">Students</h2>
          <div className="StudentList">
            {students.map((student) => (
              <div key={student.id} className="StudentItem">
                {student.name} - {student.registrationNumber} - {student.grade}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSection;

