import { useState } from 'react';
import Sidebar from './Sidebar';
import '../../Styles/Exam.css'; // Import the CSS file for styling


const ExamSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='ExamContainer'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
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
      </div>
    </div>
  );
};

export default ExamSection;
