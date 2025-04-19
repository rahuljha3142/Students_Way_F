import { useState } from 'react';
import '../../Styles/ParentDashboard.css';
import img from "../../assets/student.png";
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-container">
      
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="dashboard-container" style={{ marginLeft: isOpen ? '260px' : '80px' }}>
        

        <div className="dashboard-content">
          <div className="left-column">
            <div className="child-card">
              <h2 style={{textAlign: 'left'}}>My Children_01</h2>
              <div className="child-info">
                <img src={img} alt="Child" />
                <div className="child-details">
                  <table>
                    <tr>
                      <td>Name :</td>
                      <td>Richi Hassan</td>
                    </tr>
                    <tr>
                      <td>Gender :</td>
                      <td>Female</td>
                    </tr>
                    <tr>
                      <td>Roll :</td>
                      <td>#2901</td>
                    </tr>
                    <tr>
                      <td>Admission ID :</td>
                      <td>#2901</td>
                    </tr>
                    <tr>
                      <td>Admission Date :</td>
                      <td>05/04/2016</td>
                    </tr>
                    <tr>
                      <td>Class :</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Section :</td>
                      <td>A</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="child-card">
              <h2 style={{textAlign: 'left'}}>My Children_02</h2>
              <div className="child-info">
                <img src={img} alt="Child" />
                <div className="child-details">
                <table>
                    <tr>
                      <td>Name :</td>
                      <td>Richi Hassan</td>
                    </tr>
                    <tr>
                      <td>Gender :</td>
                      <td>Female</td>
                    </tr>
                    <tr>
                      <td>Roll :</td>
                      <td>#2901</td>
                    </tr>
                    <tr>
                      <td>Admission ID :</td>
                      <td>#2901</td>
                    </tr>
                    <tr>
                      <td>Admission Date :</td>
                      <td>05/04/2016</td>
                    </tr>
                    <tr>
                      <td>Class :</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Section :</td>
                      <td>A</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div className="social-stats">
              <div className="social-card facebook">
                <p>Follower on Facebook</p>
                <h2>1,000</h2>
              </div>
              <div className="social-card twitter">
                <p>Follower on Twitter</p>
                <h2>1,000</h2>
              </div>
              <div className="social-card google-plus">
                <p>Circle on Google+</p>
                <h2>800</h2>
              </div>
              <div className="social-card linkedin">
                <p>Follower on LinkedIn</p>
                <h2>9,000</h2>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="stats-cards">
              <div className="stats-card">
                <p>Due Fees</p>
                <h2>1,500</h2>
              </div>
              <div className="stats-card">
                <p>Upcoming Exams</p>
                <h2>15</h2>
              </div>
              <div className="stats-card">
                <p>Result Published</p>
                <h2>08</h2>
              </div>
              <div className="stats-card">
                <p>Total Expenses</p>
                <h2>10,000</h2>
              </div>
            </div>

            <div className="notice-board">
              <h2>Notice Board</h2>
              <div className="notice">
                <h5>16 May, 2017</h5>
                <h3>Jennyfar Lopez</h3>
                <p>Great School management system.</p>
              </div>
              <div className="notice">
                <h5>16 May, 2017</h5>
                <h3>Jennyfar Lopez</h3>
                <p>Great School management system.</p>
              </div>
              <div className="notice">
                <h5>16 May, 2017</h5>
                <h3>Jennyfar Lopez</h3>
                <p>Great School management system.</p>
              </div>
            </div>

            <div className="expenses">
              <h2>All Expenses</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID No</th>
                    <th>Expense Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>E-mail</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#3055</td>
                    <td>Salary</td>
                    <td>$300.00</td>
                    <td>Due</td>
                    <td>kazifahim93@gmail.com</td>
                    <td>20/06/2017</td>
                  </tr>
                  <tr>
                    <td>#3056</td>
                    <td>Exam Fee</td>
                    <td>$500.00</td>
                    <td>Paid</td>
                    <td>kazifahim93@gmail.com</td>
                    <td>20/06/2017</td>
                  </tr>
                  <tr>
                    <td>#3057</td>
                    <td>Library Fee</td>
                    <td>$900.00</td>
                    <td>Paid</td>
                    <td>kazifahim93@gmail.com</td>
                    <td>20/06/2017</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
