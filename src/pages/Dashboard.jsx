import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
// import "../main.css";
// import "./Users.css";

function Dashboard() {
  
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard</p>
    </div>
  );
}

export default Dashboard;
