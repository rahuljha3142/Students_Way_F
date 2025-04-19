import { useRef, useState } from 'react';
import Sidebar from './Sidebar';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import '../../Styles/Exam.css'; // Import the CSS file for styling

// Register Chart.js components
Chart.register(...registerables);

const ExamSection = () => {
  const chartRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  // Sample exam results data
  const examResultsData = {
    subjects: ['Math', 'Science', 'English', 'History'],
    results: [80, 75, 90, 85] // Sample results out of 100
  };

  // Bar chart data
  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: 'Exam Results',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1,
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#0056b3',
        data: examResultsData.results
      }
    ]
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        max: 100
      }
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='ExamContainer'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '260px' : '80px' }}>
        <div className="ExamContent">
          <h2 className="ExamHeader">Exam Results</h2>
          <div className="ExamResultsContainer">
            {examResultsData.subjects.map((subject, index) => (
              <div className="ExamResultItem" key={index}>
                <p className="ExamSubject">{subject}</p>
                <p className="ExamResult">Score: {examResultsData.results[index]}%</p>
              </div>
            ))}
            <div className="ExamChartContainer">
              <Bar ref={chartRef} data={barChartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSection;
