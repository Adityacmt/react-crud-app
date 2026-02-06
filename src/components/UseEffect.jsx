import { useEffect, useState } from "react";

export function UsersList(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log("UsersList component mounted");
    }, []);

    useEffect(()=>{
        const fetchUsers = async() =>{
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error("Failed to fetch users");
            }finally{
                setLoading(false);
            }
        }

        fetchUsers();
    },[]);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    

    return (
    <div>
      <h2>Users List</h2>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}