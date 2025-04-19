import { useState } from "react";
import Sidebar from './Sidebar';
import "../../Styles/Performance.css"

const Performance = () => {

  const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    // Sample data for school performance
    const schoolPerformanceData = {
      averageScore: 85,
      totalStudents: 100, 
    };
  
    // Sample data for individual student performance
    const individualPerformanceData = [
      { id: 1, name: 'Gaurav Raj', score: 90 },
      { id: 2, name: 'Rahul Raj', score: 85 },
      { id: 3, name: 'Shruti Sharma', score: 92 },
    ];

  return (
    <div className='PerformanceContainer'>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="Content" style={{ marginLeft: isOpen ? '260px' : '80px' }}>
            <div className="PerformanceContent">
              <h2 className="PerformanceHeader">School Performance</h2>
              <div className="SchoolPerformance">
                <p>Average Score: {schoolPerformanceData.averageScore}</p>
                <p>Total Students: {schoolPerformanceData.totalStudents}</p>
              </div>
              <h2 className="PerformanceHeader">Individual Performance</h2>
              <div className="IndividualPerformance">
                {individualPerformanceData.map((student) => (
                  <p key={student.id}>
                    {student.name}: {student.score}
                  </p>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Performance
