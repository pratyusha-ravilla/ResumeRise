// /src/components/User/UserDetails.js

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import userApi from '../../api/UserApi';  // Correct the import path based on your project structure

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await userApi.getUserById(userId);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user details');
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Add more details as needed */}
      <Link to="/users">Back to User List</Link>
    </div>
  );
};

export default UserDetails;

