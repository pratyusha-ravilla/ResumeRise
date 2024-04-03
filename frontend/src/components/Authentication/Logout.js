// // /src/components/Authentication/Logout.js
// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:9900/api/auth/logout');
//       localStorage.removeItem('token');
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   return (
//     <button onClick={handleLogout}>Logout</button>
//   );
// };
// export default Logout;

// /src/components/Authentication/Logout.js
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:9900/api/auth/logout");
      localStorage.removeItem("token");
      navigate("/login");
      window.alert("User Logout successfully!"); // Show alert after successful logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-indigo-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full mb-2"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
