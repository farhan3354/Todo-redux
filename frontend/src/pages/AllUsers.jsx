import axios from "axios";
import React, { useState, useEffect } from "react";

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/admin/us");

      if (response.data) {
        setUsers(response.data.users);
        console.log("Everything is OK");
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {users.length === 0 ? (
        <h2>No users in the database</h2>
      ) : (
        users.map((user) => (
          <li key={user._id}>
            <h4>{user.name}</h4>
            <h3>{user.email}</h3>
          </li>
        ))
      )}
    </>
  );
}
