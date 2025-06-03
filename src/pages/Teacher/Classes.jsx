import { useState } from 'react';
import Sidebar from './Sidebar';
import '../../Styles/Classes.css'; // Import the CSS file for styling

const ClassSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sample classes data
  const classes = [
    { grade: '1st Grade' },
    { grade: '2nd Grade' },
    { grade: '3rd Grade' },
    { grade: '4th Grade' },
    { grade: '5th Grade' }
  ];

  return (
    <div className="ClassContainer">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px', transition: 'all ease 0.8s' }}>
        <h2 className="ClassHeader">Classes</h2>
        <div className="ClassList">
          {classes.map((classItem, index) => (
            <div key={index} className="ClassItem">
              <h3>{classItem.grade}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassSection;
