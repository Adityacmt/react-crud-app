import { useEffect, useState } from "react";
import api from "../api/axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "user"
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔹 Fetch users
  const fetchUsers = async () => {
    try {
      const { data } = await api.get("/users");
      setUsers(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Create or Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (editingId) {
        await api.put(`/users/${editingId}`, form);
        setMessage("User updated successfully");
      } else {
        console.log(form);
        await api.post("/users", form);
        setMessage("User created successfully");
      }

      setForm({ name: "", email: "", role: "user" });
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  // 🔹 Delete with confirmation
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/users/${id}`);
      setMessage("User deleted successfully");
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Edit
  const handleEdit = (user) => {
    setForm({
      name: user.name,
      email: user.email,
      role: user.role
    });
    setEditingId(user._id);
  };

  return (
    <div className="container">
      <h2>User Management</h2>

      {message && (
        <p style={{ color: "green" }}>{message}</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading
            ? "Processing..."
            : editingId
            ? "Update User"
            : "Add User"}
        </button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.role}

            <button onClick={() => handleEdit(user)}>
              Edit
            </button>

            <button
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;