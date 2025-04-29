import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import "../../Styles/Classes.css";
import Sidebar from "./Sidebar";

const Classes = () => {
  let [classes, setClasses] = useState([]);
  let [newClass, setNewClass] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let addNewClass = (event) => {
    event.preventDefault();
    setClasses((prevClasses) => {
      return [...prevClasses, { name: newClass, id: uuidv4() }];
    });
    setNewClass("");
  };

  let updateClassValue = (event) => {
    setNewClass(event.target.value);
  };

  let deleteClass = (id) => {
    setClasses((prevClasses) => prevClasses.filter((prevClass) => prevClass.id !== id));
  };

  return (
    <div className='ClassesContainer'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '220px' : '60px' }}>
        <div className="ClassesContent">
          <h2 className="ClassesHeader">Classes</h2>
          <form onSubmit={addNewClass} className="AddClassForm">
            <input
              type="text"
              placeholder="Enter Class Name"
              value={newClass}
              onChange={updateClassValue}
              id="className"
              name="className"
              className="AddClassInput"
            />
            <button type="submit" className="AddClassButton">Add Class</button>
          </form>
          <ul className="ClassList">
            {classes.length > 0 ? (
              classes.map((classItem) => (
                <li className='ClassItem' key={classItem.id}>
                  <span>{classItem.name}</span>
                  &nbsp;&nbsp;
                  <button className="AddClassButton" onClick={() => deleteClass(classItem.id)}>Delete</button>
                </li>
              ))
            ) : (
              <p>No classes to display</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Classes;
