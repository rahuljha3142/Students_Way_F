import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../Styles/Exam.css";
import Sidebar from './Sidebar';

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [newName, setNewName] = useState("");
  const [newRegistrationNumber, setNewRegistrationNumber] = useState("");
  const [newClassName, setNewClassName] = useState("");
  const [newMarks, setNewMarks] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const addNewExam = (event) => {
    event.preventDefault();
    setExams((prevExams) => [
      ...prevExams,
      {
        name: newName,
        registrationNumber: newRegistrationNumber,
        className: newClassName,
        marks: newMarks,
        id: uuidv4(),
      },
    ]);
    setNewName("");
    setNewRegistrationNumber("");
    setNewClassName("");
    setNewMarks("");
  };

  const updateNameValue = (event) => {
    setNewName(event.target.value);
  };

  const updateRegistrationNumberValue = (event) => {
    setNewRegistrationNumber(event.target.value);
  };

  const updateClassNameValue = (event) => {
    setNewClassName(event.target.value);
  };

  const updateMarksValue = (event) => {
    setNewMarks(event.target.value);
  };

  const deleteExam = (id) => {
    setExams((prevExams) =>
      prevExams.filter((prevExam) => prevExam.id !== id)
    );
  };

  const calculateTotalMarks = () => {
    let total = 0;
    for (let i = 0; i < exams.length; i++) {
      total += exams[i].marks;
    }
    return total;
  };

  return (
    <div className="ExamContainer">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px', transition: 'all ease 0.8s' }}>
          <h2 className="ExamHeader">Exams</h2>
          <form onSubmit={addNewExam} className="ExamForm">
            <input
              type="text"
              className="FormInput"
              placeholder="Enter student name"
              value={newName}
              onChange={updateNameValue}
              id="name"
              name="name"
            />
            <input
              type="text"
              className="FormInput"
              placeholder="Enter registration number"
              value={newRegistrationNumber}
              onChange={updateRegistrationNumberValue}
              id="registrationNumber"
              name="registrationNumber"
            />
            <input
              type="text"
              className="FormInput"
              placeholder="Enter class name"
              value={newClassName}
              onChange={updateClassNameValue}
              id="className"
              name="className"
            />
            <input
              type="text"
              className="FormInput"
              placeholder="Enter marks"
              value={newMarks}
              onChange={updateMarksValue}
              id="marks"
              name="marks"
            />
            <button type="submit" className="AddButton">
              Add Exam
            </button>
          </form>
          <br /><br />
          <h2>Total Marks: {calculateTotalMarks()}</h2>
          <br /><br />
          <h3>Exam Details:</h3>
          <br />
          {exams.length > 0 ? (
            <ul className="ExamList">
              {exams.map((exam) => (
                <li className="ExamItem" key={exam.id}>
                  <span>
                    Name: {exam.name} - Registration No.: {exam.registrationNumber} - Class: {exam.className} - Marks: {exam.marks}
                  </span>
                  <button
                    className="AddButton"
                    onClick={() => deleteExam(exam.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No exams to display</p>
          )}
      </div>
    </div>
  );
};

export default Exams;
