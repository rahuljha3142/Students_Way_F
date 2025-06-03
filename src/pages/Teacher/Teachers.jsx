import { useState } from 'react';
import Sidebar from './Sidebar';
import '../../Styles/Teachers.css'; // Import the CSS file for styling

const TeacherSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sample teacher data
  const teachers = [
    { id: 1, name: 'Mr. John Doe', email: 'john.doe@example.com', subject: 'Mathematics' },
    { id: 2, name: 'Ms. Jane Smith', email: 'jane.smith@example.com', subject: 'English' },
    { id: 3, name: 'Dr. Michael Johnson', email: 'michael.johnson@example.com', subject: 'Science' }
  ];

  return (
    <div className="TeachersContainer">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px', transition: 'all ease 0.8s' }}>
        <div className="TeachersContent">
          <h2 className="TeachersHeader">Teachers</h2>
          <div className="TeacherList">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="TeacherItem">
                {teacher.name} - {teacher.email} - {teacher.subject}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;

