# 🎓 School Management System

A comprehensive web application designed to streamline administrative tasks for educational institutions. This system facilitates efficient management of students, faculty, and academic records. Built using the MERN stack (MongoDB, Express, React, Node.js), it features role-based access control (Admin, Teacher, Student) and a user-friendly interface.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## 🚀 Live Demo

**[View Live Page](http://students-way-f.vercel.app/_)**

## ✨ Key Features

* **Role-Based Access Control (RBAC):** Secure login with distinct dashboards for Admins, Teachers, and Students.
* **Student Management:** Complete lifecycle management including admission, profile updates, and class assignment.
* **Faculty Management:** Admin tools to manage teacher profiles, subject allocation, and payroll data.
* **Attendance Tracking:** Digital attendance marking by teachers with real-time visibility for students/parents.
* **Examination & Results:** Module to schedule exams, input marks, and generate report cards automatically.
* **Responsive UI:** Fully responsive design ensuring accessibility on desktops, tablets, and smartphones.
* **Notice Board:** Digital notice board for broadcasting announcements to specific classes or the whole school.

## 🛠️ Tech Stack

**Frontend:**
* React.js
* Vite (Build Tool)
* Redux Toolkit (State Management)
* Tailwind CSS / Material UI
* Chart.js (For analytics and reports)

**Backend:**
* Node.js
* Express.js
* Mongoose (ODM)
* JSON Web Token (JWT) for Authentication
* Bcrypt.js (Password Hashing)

## ⚙️ Environment Variables

To run this project locally, you need to set up the backend environment variables.

1. Create a file named .env inside the server/ folder.
2. Add your database and auth configuration:

```Code snippet
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/school-management
JWT_SECRET=your_super_secret_key_here
PORT=5000
```

🏃‍♂️ Run Locally
Clone the project:

```Bash
git clone https://github.com/rahuljha3142/school-management-system.git
```

Go to the project directory:

```Bash
cd school-management-system
```

1. Setup & Run Backend

Navigate to the server directory, install dependencies, and start the API:

```Bash
cd server
npm install
node index.js
```

(The backend server will start on port 5000)

2. Setup & Run Frontend

Open a new terminal window, navigate to the root (or client) directory, and start the React app:

```Bash
cd client
npm install
npm run dev
```

(The frontend will start on port 5173)

📂 Project Structure
```Bash
school-management-system/
├── server/                 # Backend Node.js/Express Application
│   ├── config/             # DB Connection & Configs
│   ├── controllers/        # Request Logic (Student, Teacher, Auth)
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # API Routes
│   ├── middleware/         # Auth & Error Handling Middleware
│   ├── .env                # Backend secrets
│   └── index.js            # Server Entry Point
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── assets/         # Images and icons
│   │   ├── components/     # Reusable UI (Sidebar, Navbar, Cards)
│   │   ├── pages/          # Dashboard Pages (Admin, Student, etc.)
│   │   ├── redux/          # Global State Slices
│   │   ├── App.jsx         # Main App Component
│   │   └── main.jsx        # React Entry Point
│   └── vite.config.js      # Vite Configuration
└── package.json            # Root configuration
```

🚀 Deployment
This project is configured for deployment.

Frontend: Vercel

Backend: Render

📬 Contact

Rahul Raj

📧 Email: rahulraaz3142@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/rahul-raaz-378852202/

🐙 GitHub: https://github.com/rahuljha3142