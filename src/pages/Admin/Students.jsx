import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../Styles/Students.css"
import Sidebar from './Sidebar';

const Students = () => {

  let [students, setStudents] = useState([]);
    let [newName, setNewName] = useState("");
    let [newRegistrationNumber, setNewRegistrationNumber] = useState("");
    let [newGrade, setNewGrade] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    let addNewStudent = (event) => {
        event.preventDefault();
        setStudents((prevStudents) => {
            return [...prevStudents, { name: newName, registrationNumber: newRegistrationNumber, grade: newGrade, id: uuidv4() }];
        });
        setNewName("");
        setNewRegistrationNumber("");
        setNewGrade("");
    };

    let updateNameValue = (event) => {
        setNewName(event.target.value);
    };

    let updateRegistrationNumberValue = (event) => {
        setNewRegistrationNumber(event.target.value);
    };

    let updateGradeValue = (event) => {
        setNewGrade(event.target.value);
    };

    let deleteStudent = (id) => {
        setStudents((prevStudents) => prevStudents.filter((prevStudent) => prevStudent.id !== id));
    };


  return (
    <div>
      <div className="StudentsContainer">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
          <div className="StudentsContent">
            <h2 className="StudentsHeader">Students </h2>
            <form action="" onSubmit={addNewStudent}>
              <input 
                type="text" 
                className="AddStudentInput" 
                placeholder="Enter student name"
                value={newName} 
                onChange={updateNameValue}
                id="name"
                name="name"
              />
              <input 
                type="text" 
                className="AddStudentInput" 
                placeholder="Enter registration number"
                value={newRegistrationNumber} 
                onChange={updateRegistrationNumberValue}
                id="registrationNumber"
                name="registrationNumber"
              />
              <input 
                type="text" 
                className="AddStudentInput" 
                placeholder="Enter grade"
                value={newGrade} 
                onChange={updateGradeValue}
                id="grade"
                name="grade"
              />
              <button type="submit" className="AddStudentButton">Add Student</button>
            </form>
                {students.length > 0 ? (
                  <ul className="StudentList">
                  
                      {students.map((student) => (
                          <li className='StudentItem' key={student.id}>
                              <span>{student.name} - {student.registrationNumber} - {student.grade}</span>
                              &nbsp;&nbsp;
                              <button className="AddStudentButton" onClick={() => deleteStudent(student.id)}>Delete</button>
                          </li>
                      ))}
                  </ul>    
              ) : (
                <p>No students to display</p>
              )}  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Students
