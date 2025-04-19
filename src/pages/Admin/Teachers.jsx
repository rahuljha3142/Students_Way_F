import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../Styles/Teachers.css";
import Sidebar from './Sidebar';

const Teachers = () => {

  let [teachers, setTeachers] = useState([]);
  let [newName, setNewName] = useState("");
  let [newEmail, setNewEmail] = useState("");
  let [newSubject, setNewSubject] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let addNewTeacher = (event) => {
    event.preventDefault();
    setTeachers((prevTeachers) => {
      return [...prevTeachers, { name: newName, email: newEmail, subject: newSubject, id: uuidv4() }];
    });
    setNewName("");
    setNewEmail("");
    setNewSubject("");
  };

  let updateNameValue = (event) => {
    setNewName(event.target.value);
  };

  let updateEmailValue = (event) => {
    setNewEmail(event.target.value);
  };

  let updateSubjectValue = (event) => {
    setNewSubject(event.target.value);
  };

  let deleteTeacher = (id) => {
    setTeachers((prevTeachers) => prevTeachers.filter((prevTeacher) => prevTeacher.id !== id));
  };

  return (
    <div>
      <div className="TeachersContainer">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="Content" style={{ marginLeft: isOpen ? '260px' : '80px' }}>
          <div className="TeachersContent">
            <h2 className="TeachersHeader">Teachers</h2>
            <form onSubmit={addNewTeacher}>
              <input 
                type="text" 
                className="AddTeacherInput" 
                placeholder="Enter teacher name"
                value={newName} 
                onChange={updateNameValue}
                id="name"
                name="name"
              />
              <input 
                type="email" 
                className="AddTeacherInput" 
                placeholder="Enter email"
                value={newEmail} 
                onChange={updateEmailValue}
                id="email"
                name="email"
              />
              <input 
                type="text" 
                className="AddTeacherInput" 
                placeholder="Enter subject"
                value={newSubject} 
                onChange={updateSubjectValue}
                id="subject"
                name="subject"
              />
              <button type="submit" className="AddTeacherButton">Add Teacher</button>
            </form>
            {teachers.length > 0 ? (
              <ul className="TeacherList">
                {teachers.map((teacher) => (
                  <li className='TeacherItem' key={teacher.id}>
                    <span>{teacher.name} - {teacher.email} - {teacher.subject}</span>
                    &nbsp;&nbsp;
                    <button className="AddTeacherButton" onClick={() => deleteTeacher(teacher.id)}>Delete</button>
                  </li>
                ))}
              </ul>    
            ) : (
              <p>No teachers to display</p>
            )}  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
