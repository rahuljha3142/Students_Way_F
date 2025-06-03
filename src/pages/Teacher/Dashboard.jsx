import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "../../Styles/TeacherDashboard.css";
import Sidebar from './Sidebar';

const studentData = [
  { name: "Male Students", value: 24500 },
  { name: "Female Students", value: 10500 },
];

const COLORS = ["#FFBB28", "#FF8042"];

const studentsList = [
  { roll: "#0021", name: "Mark Willy", gender: "Male", class: 2, section: "A", parents: "Jack Sparrow", address: "TA-107 Newyork", dob: "02/05/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student1.jpg" },
  { roll: "#0022", name: "Jessia Rose", gender: "Female", class: 1, section: "A", parents: "Maria Jamans", address: "59 Australia, Sydney", dob: "03/06/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student2.jpg" },
  { roll: "#0023", name: "Mark Willy", gender: "Male", class: 2, section: "A", parents: "Jack Sparrow", address: "TA-107 Newyork", dob: "02/05/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student1.jpg" },
  { roll: "#0024", name: "Jessia Rose", gender: "Female", class: 1, section: "A", parents: "Maria Jamans", address: "59 Australia, Sydney", dob: "03/06/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student2.jpg" },
  { roll: "#0025", name: "Mark Willy", gender: "Male", class: 2, section: "A", parents: "Jack Sparrow", address: "TA-107 Newyork", dob: "02/05/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student1.jpg" },
  { roll: "#0026", name: "Jessia Rose", gender: "Female", class: 1, section: "A", parents: "Maria Jamans", address: "59 Australia, Sydney", dob: "03/06/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student2.jpg" },
  { roll: "#0027", name: "Mark Willy", gender: "Male", class: 2, section: "A", parents: "Jack Sparrow", address: "TA-107 Newyork", dob: "02/05/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student1.jpg" },
  { roll: "#0028", name: "Jessia Rose", gender: "Female", class: 1, section: "A", parents: "Maria Jamans", address: "59 Australia, Sydney", dob: "03/06/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student2.jpg" },
  { roll: "#0029", name: "Mark Willy", gender: "Male", class: 2, section: "A", parents: "Jack Sparrow", address: "TA-107 Newyork", dob: "02/05/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student1.jpg" },
  { roll: "#0030", name: "Jessia Rose", gender: "Female", class: 1, section: "A", parents: "Maria Jamans", address: "59 Australia, Sydney", dob: "03/06/2001", phone: "+123 998556", email: "kazafahri39@gmail.com", photo: "student2.jpg" },
];

function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px', transition: 'all ease 0.8s' }}>
        <div className="dashboard-cards">
          <div className="card">
            <div className="card-icon"><i className="fa fa-user"></i></div>
            <div className="card-info">
              <p>35000</p>
              <span>Total Students</span>
            </div>
          </div>
          <div className="card">
            <div className="card-icon"><i className="fa fa-file"></i></div>
            <div className="card-info">
              <p>19050</p>
              <span>Total Exams</span>
            </div>
          </div>
          <div className="card">
            <div className="card-icon"><i className="fa fa-graduation-cap"></i></div>
            <div className="card-info">
              <p>23890</p>
              <span>Graduate Studies</span>
            </div>
          </div>
          <div className="card">
            <div className="card-icon"><i className="fa fa-money-bill"></i></div>
            <div className="card-info">
              <p>$2102050</p>
              <span>Total Income</span>
            </div>
          </div>
        </div>

        <div className="dashboard-charts">
          <div className="chart">
            <h3>Students</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={studentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {studentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-legend">
              <div><span style={{ backgroundColor: COLORS[0] }}></span>Female Students: 10,500</div>
              <div><span style={{ backgroundColor: COLORS[1] }}></span>Male Students: 24,500</div>
            </div>
          </div>
          <div className="notifications">
            <h3>Notifications</h3>
            <ul>
              <li>Great School management</li>
              <li>Great School management printing</li>
              <li>Great School management Nulla rhoncus</li>
            </ul>
          </div>
        </div>

        <div className="student-table">
          <h3>My Students</h3>
          <div className="table-filters">
            <input type="text" placeholder="Search by Roll..." />
            <input type="text" placeholder="Search by Name..." />
            <input type="text" placeholder="Search by Class..." />
            <button>Search</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Roll</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Section</th>
                <th>Parents</th>
                <th>Address</th>
                <th>Date Of Birth</th>
                <th>Phone</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {studentsList.map(student => (
                <tr key={student.roll}>
                  <td>{student.roll}</td>
                  <td><img src={student.photo} alt={student.name} className="student-photo" /></td>
                  <td>{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.class}</td>
                  <td>{student.section}</td>
                  <td>{student.parents}</td>
                  <td>{student.address}</td>
                  <td>{student.dob}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button>Previous</button>
            <span>1</span>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
