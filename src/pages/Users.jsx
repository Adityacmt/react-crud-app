import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Unauthorized");
          return;
        }

        setUsers(data.data);
      } catch (err) {
        setError("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2>Users</h2>

      <ul className="user-list">
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
