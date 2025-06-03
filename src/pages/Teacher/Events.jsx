import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../Styles/EventCalendar.css';
import Sidebar from './Sidebar';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const addNewEvent = (event) => {
    event.preventDefault();
    if (newTitle && newDate && newTime && newDescription) {
      setEvents((prevEvents) => [
        ...prevEvents,
        { title: newTitle, date: newDate, time: newTime, description: newDescription, id: uuidv4() }
      ]);
      setNewTitle("");
      setNewDate("");
      setNewTime("");
      setNewDescription("");
    } else {
      alert("Please fill in all fields");
    }
  };

  const updateTitleValue = (event) => {
    setNewTitle(event.target.value);
  };

  const updateDateValue = (event) => {
    setNewDate(event.target.value);
  };

  const updateTimeValue = (event) => {
    setNewTime(event.target.value);
  };

  const updateDescriptionValue = (event) => {
    setNewDescription(event.target.value);
  };

  const deleteEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <div className="EventCalendarContainer">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px', transition: 'all ease 0.8s' }}>
        <h2 className="EventCalendarHeader">Event Calendar</h2>
        <div>Current Time: {currentTime}</div>
        <form onSubmit={addNewEvent} className="EventForm">
          <input 
            type="text" 
            className="AddEventInput" 
            placeholder="Enter event title"
            value={newTitle} 
            onChange={updateTitleValue}
            id="title"
            name="title"
          />
          <input 
            type="date" 
            className="AddEventInput" 
            value={newDate} 
            onChange={updateDateValue}
            id="date"
            name="date"
          />
          <input 
            type="time" 
            className="AddEventInput" 
            value={newTime} 
            onChange={updateTimeValue}
            id="time"
            name="time"
          />
          <textarea 
            className="AddEventTextarea" 
            placeholder="Enter event description"
            value={newDescription} 
            onChange={updateDescriptionValue}
            id="description"
            name="description"
          />
          <button type="submit" className="AddEventButton">Add Event</button>
        </form>
        {events.length > 0 ? (
          <ul className="EventList">
            {events.map((event) => (
              <li className="EventItem" key={event.id}>
                <span>
                  <strong>{event.title}</strong> <br />
                  {event.date} at {event.time} <br />
                  {event.description}
                </span>
                &nbsp;&nbsp;
                <button className="DeleteEventButton" onClick={() => deleteEvent(event.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events to display</p>
        )}
      </div>
    </div>
  );
};

export default Events;
