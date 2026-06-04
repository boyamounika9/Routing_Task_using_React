// Dashboard.jsx

import React from "react";
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Dashboard</h1>

      <p>Welcome to the Student Portal Dashboard.</p>
      
      <Link to="/courses">Courses</Link>
      <Link to ="/profile">Profile</Link>

      <h3>Quick Overview</h3>

      <ul>
        <li>Total Courses: 5</li>
        <li>Assignments Pending: 2</li>
        <li>Attendance: 92%</li>
      </ul>
    </div>
  );
}

export default Dashboard;