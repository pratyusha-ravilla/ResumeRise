// /src/components/User/UserList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userApi from '../../api/UserApi';  // Correct the import path based on your project structure

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userApi.getAllUsers();
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <div key={user._id}>
          <Link to={`/user/${user._id}`}>
            <p>Username: {user.username}</p>
          </Link>
          <p>Email: {user.email}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default UserList;


