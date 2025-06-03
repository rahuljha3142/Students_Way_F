import { useState } from 'react';
import Sidebar from './Sidebar';
import { v4 as uuidv4 } from "uuid";
import '../../Styles/Assignments.css'; // Import the CSS file for styling

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([
    {
      id: uuidv4(),
      title: "Math Homework",
      description: "Complete the algebra problems on page 42.",
      done: false,
    },
    {
      id: uuidv4(),
      title: "Science Project",
      description: "Prepare a presentation on renewable energy sources.",
      done: false,
    },
    {
      id: uuidv4(),
      title: "History Essay",
      description: "Write an essay on the causes of World War I.",
      done: true,
    },
  ]);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDoAssignment = (id) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === id ? { ...assignment, done: true } : assignment
      )
    );
  };

  return (
    <div className='AssignmentsContainer'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
        <div className="AssignmentsContent">
          <h2 className="AssignmentsHeader">Assignments</h2>
          <ul className="AssignmentList">
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <li className='AssignmentItem' key={assignment.id}>
                  <div>
                    <h3>{assignment.title}</h3>
                    <p>Description: {assignment.description}</p>
                    {!assignment.done ? (
                      <AssignmentForm onDoAssignment={() => handleDoAssignment(assignment.id)} />
                    ) : (
                      <p className="AssignmentDoneMessage">Assignment Done</p>
                    )}
                  </div>
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

const AssignmentForm = ({ onDoAssignment }) => {
  const [opinion, setOpinion] = useState('');

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== '') {
      onDoAssignment();
    } else {
      alert("Please provide your opinion/assignment.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="AddAssignmentForm">
      <textarea
        value={opinion}
        onChange={handleInputChange}
        placeholder="Enter your opinion/assignment..."
        className="AddAssignmentTextarea"
      />
      <button type="submit" className="AddAssignmentButton">Submit</button>
    </form>
  );
};

export default StudentAssignments;

