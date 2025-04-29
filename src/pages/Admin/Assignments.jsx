import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import Sidebar from "./Sidebar";

const Assignments = () => {
  let [assignments, setAssignments] = useState([]);
  let [newAssignment, setNewAssignment] = useState({ title: "", grade: "", deadline: "", description: "" });
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let addNewAssignment = (event) => {
    event.preventDefault();
    setAssignments((prevAssignments) => {
      return [...prevAssignments, { ...newAssignment, id: uuidv4() }];
    });
    setNewAssignment({ title: "", grade: "", deadline: "", description: "" });
  };

  let updateAssignmentValue = (event) => {
    const { name, value } = event.target;
    setNewAssignment((prevAssignment) => ({ ...prevAssignment, [name]: value }));
  };

  let deleteAssignment = (id) => {
    setAssignments((prevAssignments) => prevAssignments.filter((prevAssignment) => prevAssignment.id !== id));
  };

  return (
    <div className='AssignmentsContainer'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '220px' : '60px' }}>
        <div className="AssignmentsContent">
          <h2 className="AssignmentsHeader">Assignments</h2>
          <form onSubmit={addNewAssignment} className="AddAssignmentForm">
            <input
              type="text"
              placeholder="Enter Assignment Title"
              value={newAssignment.title}
              onChange={updateAssignmentValue}
              id="title"
              name="title"
              className="AddAssignmentInput"
            />
            <textarea
              placeholder="Enter Description"
              value={newAssignment.description}
              onChange={updateAssignmentValue}
              id="description"
              name="description"
              className="AddAssignmentTextarea"
            />
            <input
              type="text"
              placeholder="Enter Grade"
              value={newAssignment.grade}
              onChange={updateAssignmentValue}
              id="grade"
              name="grade"
              className="AddAssignmentInput"
            />
            <input
              type="date"
              placeholder="Enter Deadline"
              value={newAssignment.deadline}
              onChange={updateAssignmentValue}
              id="deadline"
              name="deadline"
              className="AddAssignmentInput"
            />
            <button type="submit" className="AddAssignmentButton">Add Assignment</button>
          </form>
          <ul className="AssignmentList">
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <li className='AssignmentItem' key={assignment.id}>
                  <div>
                    <h3>{assignment.title}</h3>
                    <p>Grade: {assignment.grade}</p>
                    <p>Deadline: {assignment.deadline}</p>
                    <p>Description: {assignment.description}</p>
                  </div>
                  <button className="AddAssignmentButton" onClick={() => deleteAssignment(assignment.id)}>Delete</button>
                </li>
              ))
            ) : (
              <p>No assignments to display</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
