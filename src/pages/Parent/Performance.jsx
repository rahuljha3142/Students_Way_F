import{ useRef, useState } from 'react';
import Sidebar from './Sidebar';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import '../../Styles/Performance.css'; // Import the CSS file for styling

// Register Chart.js components
Chart.register(...registerables);

const PerformanceSection = () => {
  const chartRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  // Sample performance data
  const performanceData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    marks: [80, 85, 90, 88, 92, 85], // Sample marks for each month
    totalMarks: 520, // Sample total marks for the year
  };

  // Line chart data
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: 'Performance Trends',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: performanceData.marks,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='PerformanceContainer'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
        <div className="PerformanceContent">
          <h2 className="PerformanceHeader">Performance</h2>
          <div className="PerformanceInfo">
            <div className="PerformanceGraphContainer">
              <Line ref={chartRef} data={lineChartData} options={chartOptions} />
            </div>
            <p className="TotalMarks">Total Marks: {performanceData.totalMarks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
