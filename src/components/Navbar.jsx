import { Link, useNavigate } from "react-router-dom";
import { removeToken, isAuthenticated } from "../utils/auth";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };
  return (
    <nav className="navbar">
      <h3>MERN App</h3>

      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
        {isAuthenticated() && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
