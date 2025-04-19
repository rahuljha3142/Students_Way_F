import { NavLink } from 'react-router-dom'; 
import "../Styles/ChooseUser.css";
import { Navbar } from './Navbar';

const ChooseUser = () => {
  return (
    <>
    <Navbar />
      <div className="ChooseUserContainer">
        <div className="line-one">
              <NavLink className="btn" to="/admin-signIn">Admin</NavLink>
              <NavLink className="btn" to="/student-signIn">Student</NavLink>
        </div>

        <div className="line-two">
            <NavLink className="btn" to="/teacher-signIn">Teacher</NavLink>
            <NavLink className="btn" to="/parent-signIn">Parent</NavLink>
        </div>
      </div>
    </>
  )
}

export default ChooseUser
