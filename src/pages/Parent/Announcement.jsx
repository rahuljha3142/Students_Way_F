import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import '../../Styles/Announcement.css'; // Import the CSS file for styling

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [announcements, setAnnouncements] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = () => {
    // Sample announcements data
    const sampleAnnouncements = [
      { _id: 1, announcement: 'School will be closed on Friday due to maintenance.' },
      { _id: 2, announcement: 'Parent-teacher meetings are scheduled for next week.' },
      { _id: 3, announcement: 'New library books have arrived.' },
    ];
    setAnnouncements(sampleAnnouncements);
  };

  return (
    <div className="AnnouncementContainer">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '260px' : '80px' }}>
        <h2 className="AnnouncementHeader">Announcements</h2>
        <ul className="AnnouncementList">
          {announcements.map((announcement) => (
            <li key={announcement._id} className="AnnouncementItem">
              <h3 className="AnnouncementTitle">{announcement.announcement}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
