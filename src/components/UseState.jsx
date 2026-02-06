import { useState } from "react";

export function Counter(){
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(a => a +1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(prev => prev - 1);
        }
    };

    return (
        <div>
        <h2>Count: {count}</h2>

        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>
    );
}

export function RoleToggle(){
    const [role, setRole] = useState("Admin");

    const toggleRole = ()=>{
        setRole(prev => (prev === "Admin" ? "User" : "Admin"));
    }

    return (
        <div>
        <h2>Role: {role}</h2>
        <button onClick={toggleRole}>
            {role === "Admin" ? "Make User" : "Make Admin"}
        </button>
        </div>
    )
}

export function UserCard1() {
  const [user, setUser] = useState({
    name: "Aditya",
    role: "Admin"
  });

  const changeName = () => {
    setUser({
      ...user,
      name: "Rahul"
    });
  };

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Role: {user.role}</h2>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}