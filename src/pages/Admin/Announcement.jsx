import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Sidebar from './Sidebar';
import "../../Styles/Announcement.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const addNewAnnouncement = (event) => {
    event.preventDefault();
    const newEntry = { announcement: newAnnouncement, id: uuidv4() };
    setAnnouncements((prevAnnouncements) => [...prevAnnouncements, newEntry]);
    toast.success('Announcement added successfully');
    setNewAnnouncement("");
  };

  const updateAnnouncementValue = (event) => {
    setNewAnnouncement(event.target.value);
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements((prevAnnouncements) => prevAnnouncements.filter((announcement) => announcement.id !== id));
    toast.success('Announcement deleted successfully');
  };

  return (
    <div className="AnnouncementContainer">
      <ToastContainer />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
        {/* <div className="AnnouncementContent"> */}
          <h1 className="Title">Announcements</h1>
          <form className="AnnouncementForm" onSubmit={addNewAnnouncement}>
            <div className="FormGroup">
            <label className="Label" htmlFor="announcement">Announcement:</label>
                <textarea 
                className="TextArea" 
                value={newAnnouncement} 
                onChange={updateAnnouncementValue}
                id="announcement"
                name="announcement"
                rows={4}
                cols={50}
            />
            </div>
            <button type="submit" className="Button">Add Announcement</button>
          </form>
          {announcements.length > 0 ? (
            <ul className="AnnouncementList">
              {announcements.map((announcement) => (
                <li className="AnnouncementItem" key={announcement.id}>
                  <p className="AnnouncementContent">{announcement.announcement}</p>
                  &nbsp;&nbsp;
                  <button className="Button" onClick={() => deleteAnnouncement(announcement.id)}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No announcements to display</p>
          )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Announcement;
