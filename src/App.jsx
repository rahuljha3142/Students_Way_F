import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import { Contact } from "./components/Contact"
import ChooseUser from "./components/ChooseUser"
import { Error } from "./components/Error"
import { About } from "./components/About"
import { Logout } from "./components/Logout"
// import { Navbar } from "./components/Navbar"

// Sign in 
import AdminSignin from "./components/AdminSignin"
import AdminRegister from "./components/AdminRegister"
import TeacherSignin from "./components/TeacherSignin"
import StudentSignin from "./components/StudentSignin"
import ParentSignin from "./components/ParentSignin"

// Dashboard
import AdminDashboard from "./pages/Admin/Dashboard"
import StudentDashboard from './pages/Student/Dashboard';
import TeacherDashboard from './pages/Teacher/Dashboard';
import ParentDashboard from './pages/Parent/Dashboard';

// Admin
import Classes from './pages/Admin/Classes';
import Exam from './pages/Admin/Exam';
import Attendance from './pages/Admin/Attendance';
import Performance from './pages/Admin/Performance';
import Teachers from './pages/Admin/Teachers';
import Students from './pages/Admin/Students';
import Assignments from './pages/Admin/Assignments';
import Library from './pages/Admin/Library';
import EventCalendar from './pages/Admin/EventCalendar';
import SettingsProfile from './pages/Admin/SettingsProfile';
import Announcement from './pages/Admin/Announcement';

// Students
import StudentAssignments from '../src/pages/Student/Assignments';
import StudentTaskScheduler from '../src/pages/Student/TaskScheduler';
import StudentNotes from '../src/pages/Student/Notes';
import StudentMCQ from '../src/pages/Student/MCQGenerator';
import ExamSection from '../src/pages/Student/Exams';
import PerformanceSection from './pages/Student/Performance';
import AttendanceSection from '../src/pages/Student/Attendence';
import LibrarySection from '../src/pages/Student/Library';
import AnnouncementSection from '../src/pages/Student/Announcement';
import ProfileSection from '../src/pages/Student/Profile';
import QuestionGenerator from "../src/pages/Student/QuestionGenerator";
import CarrierRecommendation from "../src/pages/Student/CarrierRecommendation";
import IdCardGenerator from "../src/pages/Student/IdCardGenerator";

// Teachers
import ClassSection from '../src/pages/Teacher/Classes';
import StudentSection from '../src/pages/Teacher/Students';
import TeacherSection from '../src/pages/Teacher/Teachers';
import CheckPerformanceSection from '../src/pages/Teacher/Performance';
import EventSection from '../src/pages/Teacher/Events';
import TeacherProfileSection from '../src/pages/Teacher/Profile';
import CheckAnnouncementSection from '../src/pages/Teacher/Announcement';
import AssignmentSection from '../src/pages/Teacher/Assignments';
import CheckAttendanceSection from '../src/pages/Teacher/Attendence';
import CheckExamSection from '../src/pages/Teacher/Exams';

// Parents
import ParentAssignments from '../src/pages/Parent/Assignments';
import ParentExams from '../src/pages/Parent/Exams';
import ParentPerformance from '../src/pages/Parent/Performance';
import ParentAttendance from '../src/pages/Parent/Attendence';
import ParentAnnouncement from '../src/pages/Parent/Announcement';
import ParentSettings from '../src/pages/Parent/SettingsProfile';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/navbar" element={<Navbar />} /> */}
          <Route path="/choose-user" element={<ChooseUser />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          
          {/* All the sign-in pages/routes */}

          <Route exact path="/admin-register" element={<AdminRegister />} />
          <Route exact path="/admin-signIn" element={<AdminSignin />} />
          <Route exact path="/teacher-signIn" element={<TeacherSignin />} />
          <Route exact path="/student-signIn" element={<StudentSignin />} />
          <Route exact path="/parent-signIn" element={<ParentSignin />} />

          {/* All the dashboard routes */}

          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />        
          <Route exact path="/student/dashboard" element={<StudentDashboard />} />
          <Route exact path="/parent/dashboard" element={<ParentDashboard />} />

          {/* Admin section here */}

          <Route exact path="/admin/classes" element={<Classes />} />
          <Route exact path="/admin/exams" element={<Exam />} />
          <Route exact path="/admin/attendance" element={<Attendance />} />
          <Route exact path="/admin/performance" element={<Performance />} />
          <Route exact path="/admin/teachers" element={<Teachers />} />
          <Route exact path="/admin/students" element={<Students />} />
          <Route exact path="/admin/assignments" element={<Assignments />} />
          <Route exact path="/admin/library" element={<Library />} />
          <Route exact path="/admin/communication" element={<Announcement />} />
          <Route exact path="/admin/events" element={<EventCalendar />} />
          <Route exact path="/admin/settings" element={<SettingsProfile />} />

          {/* Students sections here  */}

          <Route exact path="/student/assignments" element={<StudentAssignments />} />
          <Route exact path="/student/tasks" element={<StudentTaskScheduler />} />
          <Route exact path="/student/notes" element={<StudentNotes />} />
          <Route exact path="/student/mcq" element={<StudentMCQ />} />
          <Route exact path="/student/exams" element={<ExamSection />} /> 
          <Route exact path="/student/performance" element={<PerformanceSection />} />
          <Route exact path="/student/attendance" element={<AttendanceSection />} />
          <Route exact path="/student/library" element={<LibrarySection />} />
          <Route exact path="/student/communication" element={<AnnouncementSection/>} />
          <Route exact path="/student/settings" element={<ProfileSection />} />
          <Route exact path="/student/question-generator" element={<QuestionGenerator />} />
          <Route exact path="/student/education-recommendation" element={<CarrierRecommendation />} />
          <Route exact path="/student/idcard-generator" element={<IdCardGenerator />} />

          {/* Teachers sections here */}

          <Route exact path="/teacher/classes" element={<ClassSection />} />
          <Route exact path="/teacher/students" element={<StudentSection />} />
          <Route exact path="/teacher/teachers" element={<TeacherSection />} />
          <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
          <Route exact path="/teacher/exams" element={<CheckExamSection />} />
          <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
          <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
          <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
          <Route exact path="/teacher/events" element={<EventSection />} />
          <Route exact path="/teacher/settings" element={<TeacherProfileSection/>} />

          {/* Parents sections here */}

          <Route exact path="/parent/assignments" element={<ParentAssignments />} />
          <Route exact path="/parent/exams" element={<ParentExams />} />
          <Route exact path="/parent/performance" element={<ParentPerformance />} />
          <Route exact path="/parent/attendance" element={<ParentAttendance />} />
          <Route exact path="/parent/communication" element={<ParentAnnouncement />} />
          <Route exact path="/parent/settings" element={<ParentSettings />} />


        </Routes>
      </Router>
    </>
  )
}

export default App