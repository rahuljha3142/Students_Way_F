import { useState } from 'react';
import '../../Styles/AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faChalkboardTeacher, faUsers, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Sidebar from './Sidebar';
import { useAuth } from '../../store/Auth';

const Dashboard = () => {
  // Data for Fees Collection & Expenses
  const feesData = {
    labels: ['Collections', 'Fees', 'Expenses'],
    datasets: [
      {
        label: 'Amount',
        data: [10000, 8000, 5000],
        backgroundColor: ['#4e73df', '#e74a3b', '#f6c23e'],
      },
    ],
  };

  // Options for Fees Collection & Expenses chart
  const feesOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };



  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { user } = useAuth();
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 17) {
    greeting = "Good Afternoon";
  } else if (currentHour < 20) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <div className="dashboard">
      
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      
      <main className="main-content" style={{ marginLeft: isOpen ? '220px' : '60px' }}>

        <div className="hello">
          {greeting}, {user?.fullName || "User"}
        </div>

        <div className="stats-section">
          <div className="stat-box">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <h3>Students</h3>
            <p>50,000</p>
          </div>
          <div className="stat-box">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
            <h3>Teachers</h3>
            <p>10,000</p>
          </div>
          <div className="stat-box">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <h3>Parents</h3>
            <p>15,000</p>
          </div>
          <div className="stat-box">
            <FontAwesomeIcon icon={faDollarSign} className="icon" />
            <h3>Total Earnings</h3>
            <p>$30,000</p>
          </div>
        </div>

        <div className="main-section">
          <div className="fees-collection">
            <h3>Fees Collection & Expenses</h3>
            <div className="chart">
              <Bar data={feesData} options={feesOptions} />
            </div>
          </div>
          <div className="social-media">
            <div className="social-box facebook">
              <FontAwesomeIcon icon={faFacebookF} className="icon" />
              <h3>30,000</h3>
              <p>Like us on Facebook</p>
            </div>
            <div className="social-box twitter">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
              <h3>13,000</h3>
              <p>Follow us on Twitter</p>
            </div>
            <div className="social-box google-plus">
              <FontAwesomeIcon icon={faGooglePlusG} className="icon" />
              <h3>9,000</h3>
              <p>Follow us on Google Plus</p>
            </div>
            <div className="social-box linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              <h3>18,000</h3>
              <p>Follow us on LinkedIn</p>
            </div>
          </div>
        </div>

        <div className="calendar-notice-section">
          <div className="calendar">
            <h3>Event Calendar</h3>
            <table className="calendar-table">
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tus</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="inactive">26</td>
                  <td className="inactive">27</td>
                  <td className="inactive">28</td>
                  <td className="inactive">29</td>
                  <td className="inactive">30</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td><span className="event" style={{ backgroundColor: 'blue' }}>14</span></td>
                  <td>15</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td><span className="event" style={{ backgroundColor: 'green' }}>17</span></td>
                  <td><span className="event" style={{ backgroundColor: 'green' }}>18</span></td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>25</td>
                  <td><span className="event" style={{ backgroundColor: 'red' }}>26</span></td>
                  <td><span className="event" style={{ backgroundColor: 'red' }}>27</span></td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="notice-board">
            <h3>Notice Board</h3>
            <ul>
              <li><strong>16 May, 2017</strong> Jennyfar Lopez - Great School management system simply dummy text.</li>
              <li><strong>16 May, 2017</strong> Killar Miller - Great School management system simply dummy text.</li>
              <li><strong>16 May, 2017</strong> Mike Hussy - Great School management system simply dummy text.</li>
            </ul>
          </div>
          <div className="recent-activities">
            <h3>Recent Activities</h3>
            <ul>
              <li><span>9 minutes ago</span> You followed Olivia Williamson</li>
              <li><span>20 minutes ago</span> You subscribed to Harold Fuller</li>
              <li><span>30 minutes ago</span> You updated your profile picture</li>
              <li><span>35 minutes ago</span> You deleted homepage.psd</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
