import { useState } from 'react';
import Sidebar from './Sidebar';
import '../../Styles/SettingsProfile.css'; // Import the CSS file for styling

const Profile = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [studentProfile, setStudentProfile] = useState({
    name: 'Gaurav Raj',
    age: 18,
    grade: '12th',
    school: 'New Era High School',
    email: 'gaurav.raj@example.com'
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="ProfileContainer">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '260px' : '80px' }}>
        <h2 className="ProfileHeader">Profile</h2>
        <div className="ProfileInfo">
          {isEditing ? (
            <div className="ProfileEditForm">
              <div className="ProfileDetail">
                <label className="Label">Name:</label>
                <input
                  className="Value"
                  type="text"
                  name="name"
                  value={studentProfile.name}
                  onChange={handleChange}
                />
              </div>
              <div className="ProfileDetail">
                <label className="Label">Age:</label>
                <input
                  className="Value"
                  type="number"
                  name="age"
                  value={studentProfile.age}
                  onChange={handleChange}
                />
              </div>
              <div className="ProfileDetail">
                <label className="Label">Grade:</label>
                <input
                  className="Value"
                  type="text"
                  name="grade"
                  value={studentProfile.grade}
                  onChange={handleChange}
                />
              </div>
              <div className="ProfileDetail">
                <label className="Label">School:</label>
                <input
                  className="Value"
                  type="text"
                  name="school"
                  value={studentProfile.school}
                  onChange={handleChange}
                />
              </div>
              <div className="ProfileDetail">
                <label className="Label">Email:</label>
                <input
                  className="Value"
                  type="email"
                  name="email"
                  value={studentProfile.email}
                  onChange={handleChange}
                />
              </div>
              <button className="primaryBtn" onClick={handleSave}>Save</button>
            </div>
          ) : (
            <>
              <div className="ProfileDetail">
                <span className="Label">Name:</span>
                <span className="Value">{studentProfile.name}</span>
              </div>
              <div className="ProfileDetail">
                <span className="Label">Age:</span>
                <span className="Value">{studentProfile.age}</span>
              </div>
              <div className="ProfileDetail">
                <span className="Label">Grade:</span>
                <span className="Value">{studentProfile.grade}</span>
              </div>
              <div className="ProfileDetail">
                <span className="Label">School:</span>
                <span className="Value">{studentProfile.school}</span>
              </div>
              <div className="ProfileDetail">
                <span className="Label">Email:</span>
                <span className="Value">{studentProfile.email}</span>
              </div>
              <button className="primaryBtn" onClick={handleEditToggle}>Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
