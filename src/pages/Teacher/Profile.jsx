import { useState } from "react";
import Sidebar from './Sidebar';
// import '../../styles/SettingsProfile.css'; // Import the CSS file
import '../../Styles/SettingsProfile.css'

const SettingsProfile = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const teacherInfo = {
    name: 'Gaurav Raj',
    email: 'gauravraj@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    qualification: 'Master of Education',
  };

  return (
    <div className="ProfileContainer">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px', transition: 'all ease 0.8s' }}>
        <h1 className="ProfileHeader">Profile Details</h1>
        <div className="ProfileDetails">
          <div className="ProfileDetail">
            <span className="Label">Name:</span>
            <span className="Value">{teacherInfo.name}</span>
          </div>
          <div className="ProfileDetail">
            <span className="Label">Email:</span>
            <span className="Value">{teacherInfo.email}</span>
          </div>
          <div className="ProfileDetail">
            <span className="Label">Phone:</span>
            <span className="Value">{teacherInfo.phone}</span>
          </div>
          <div className="ProfileDetail">
            <span className="Label">Address:</span>
            <span className="Value">{teacherInfo.address}</span>
          </div>
          <div className="ProfileDetail">
            <span className="Label">Qualification:</span>
            <span className="Value">{teacherInfo.qualification}</span>
          </div>
        </div>
        <button className="EditButton">Edit Profile</button>
      </div>
    </div>
  );
};

export default SettingsProfile;

