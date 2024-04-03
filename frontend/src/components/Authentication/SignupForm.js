// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SignupForm = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       // Send a POST request to your backend signup endpoint
//       const response = await axios.post(
//         "http://localhost:9900/api/auth/signup",
//         formData
//       );

//       // Handle successful signup
//       console.log("User registered successfully:", response.data);

//       // Redirect user to login page using navigate
//       navigate("/login");
//     } catch (error) {
//       // Handle signup error
//       setError(error.response.data.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//         Sign Up
//       </h2>
//       {error && (
//         <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
//       )}
//       <form onSubmit={handleSignup}>

//        <div className="mb-6">
//          <label
//             htmlFor="username"
//             className="block text-sm font-bold text-gray-700 mb-2"
//           >
//             Username
//           </label>
//           <input
//             id="username"
//             type="text"
//             name="username"
//             onChange={handleChange}
//             className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             placeholder="Enter your username"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="block text-sm font-bold text-gray-700 mb-2"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             onChange={handleChange}
//             className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block text-sm font-bold text-gray-700 mb-2"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             onChange={handleChange}
//             className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             placeholder="Enter your password"
//           />
//         </div>
//         <div className="text-center">
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
//           >
//             Sign Up
//           </button>
//         </div>

//       </form>
//     </div>
//   );
// };

// export default SignupForm;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9900/api/auth/signup",
        formData
      );

      console.log("User registered successfully:", response.data);

      navigate("/login");
    } catch (error) {
      if (error.response.status === 409) {
        setError("User with this email already exists");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Resume Rise
      </h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <form onSubmit={handleSignup}>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-sm font-bold text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-bold text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
