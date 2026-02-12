import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>MERN App</h3>

      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </div>
    </nav>
  );
}

export default Navbar;
