// // /src/components/Profile/Profile.js

// import React, { useState, useEffect } from "react";
// import { getUserProfile, updateUserProfile } from "../../api/UserApi";
// import LogoutButton from "../Authentication/Logout";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation

// const Profile = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate(); // Use useNavigate hook for navigation

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await getUserProfile();
//         setProfileData(response.data);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           // Redirect to login page if unauthorized
//           navigate("/login");
//         } else {
//           setError("Error fetching user profile");
//         }
//       }
//     };

//     fetchProfileData();
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile(formData);
//       setIsEditing(false);
//       const response = await getUserProfile();
//       setProfileData(response.data);
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setError(error.response.data.error);
//       } else {
//         setError("Error updating profile");
//       }
//     }
//   };

//   const firstNameLetter =
//     profileData && profileData.user.username
//       ? profileData.user.username[0]
//       : "";

//   return (
//     <div className="flex">
//       <div className="w-1/4 bg-purple-700 h-screen text-white py-6 px-4 rounded-xl">
//         <div className="flex items-center mb-8">
//           <div className="bg-violet-400 rounded-full h-20 w-20 flex items-center justify-center text-6xl font-bold mr-4">
//             {firstNameLetter}
//           </div>
//           <div>
//             <h2 className="text-2xl font-semibold">
//               {profileData && profileData.user.username}
//             </h2>
//             <p className="text-sm">{profileData && profileData.user.email}</p>
//           </div>
//         </div>
//         <div className="mb-4">
//           <button
//             className="bg-indigo-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full mb-2"
//             onClick={() => setIsEditing(true)}
//           >
//             Update Profile
//           </button>
//           <LogoutButton />
//         </div>
//       </div>
//       <div className="w-3/4 p-6 ">
//         <div className="container max-w-md mt-10 p-6 bg-gray-200 rounded-md shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Profile</h2>
//           {error ? (
//             <p className="text-red-500">Error: {error}</p>
//           ) : profileData ? (
//             <div>
//               {!isEditing ? (
//                 <div>
//                   <p className="text-lg font-semibold">
//                     Username: {profileData.user.username}
//                   </p>
//                   <p className="text-lg font-semibold">
//                     Email: {profileData.user.email}
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-700 text-sm font-bold mb-2 pd-4"
//                       htmlFor="username"
//                     >
//                       Username
//                     </label>
//                     <input
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       type="text"
//                       name="username"
//                       defaultValue={profileData.user.username}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-700 text-sm font-bold mb-2 pt-4"
//                       htmlFor="email"
//                     >
//                       Email
//                     </label>
//                     <input
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       type="email"
//                       name="email"
//                       defaultValue={profileData.user.email}
//                       readOnly
//                       // onChange={handleChange}
//                     />
//                   </div>

//                   <button
//                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
//                     type="submit"
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//                     onClick={() => setIsEditing(false)}
//                   >
//                     Cancel
//                   </button>
//                 </form>
//               )}
//             </div>
//           ) : (
//             <p>Loading profile data...</p>
//           )}
//         </div>

//         {/* Suggestions */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
//           <ul className="list-disc pl-6">
//             <li className="text-gray-700 mb-2">
//               Update your username and email if needed.
//             </li>
//             <li className="text-gray-700 mb-2">
//               Add a bio to personalize your profile.
//             </li>
//             <li className="text-gray-700 mb-2">
//               Upload a profile picture to make your account unique.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { getUserProfile, updateUserProfile } from "../../api/UserApi";
// import LogoutButton from "../Authentication/Logout";
// import { useNavigate } from "react-router-dom";
// import { MdEdit, MdCancel } from "react-icons/md"; // Import Material Design icons
// import { FaUserCircle } from "react-icons/fa"; // Import Font Awesome icons

// const Profile = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await getUserProfile();
//         setProfileData(response.data);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           navigate("/login");
//         } else {
//           setError("Error fetching user profile");
//         }
//       }
//     };

//     fetchProfileData();
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile(formData);
//       setIsEditing(false);
//       const response = await getUserProfile();
//       setProfileData(response.data);
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setError(error.response.data.error);
//       } else {
//         setError("Error updating profile");
//       }
//     }
//   };

//   const firstNameLetter =
//     profileData && profileData.user.username
//       ? profileData.user.username[0]
//       : "";

//   return (
//     <div className="flex">
//       <div className="w-1/4 bg-purple-700 h-screen text-white py-6 px-4 rounded-xl">
//         <div className="flex items-center mb-8">
//           <div className="bg-violet-400 rounded-full h-20 w-20 flex items-center justify-center text-6xl font-bold mr-4">
//             <FaUserCircle />
//           </div>
//           <div>
//             <h2 className="text-2xl font-semibold">
//               {profileData && profileData.user.username}
//             </h2>
//             <p className="text-sm">{profileData && profileData.user.email}</p>
//           </div>
//         </div>
//         <div className="mb-4">
//           <button
//             className="bg-indigo-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full mb-2"
//             onClick={() => setIsEditing(true)}
//           >
//             <MdEdit className="inline-block mr-2" /> Update Profile
//           </button>
//           <LogoutButton />
//         </div>
//       </div>
//       <div className="w-3/4 p-6 ">
//         <div className="container max-w-md mt-10 p-6 bg-gray-200 rounded-md shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Profile</h2>
//           {error ? (
//             <p className="text-red-500">Error: {error}</p>
//           ) : profileData ? (
//             <div>
//               {!isEditing ? (
//                 <div>
//                   <p className="text-lg font-semibold">
//                     Username: {profileData.user.username}
//                   </p>
//                   <p className="text-lg font-semibold">
//                     Email: {profileData.user.email}
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2 pd-4" htmlFor="username">
//                       Username
//                     </label>
//                     <input
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       type="text"
//                       name="username"
//                       defaultValue={profileData.user.username}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2 pt-4" htmlFor="email">
//                       Email
//                     </label>
//                     <input
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       type="email"
//                       name="email"
//                       defaultValue={profileData.user.email}
//                       readOnly
//                       // onChange={handleChange}
//                     />
//                   </div>

//                   <button
//                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
//                     type="submit"
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//                     onClick={() => setIsEditing(false)}
//                   >
//                     <MdCancel className="inline-block mr-2" /> Cancel
//                   </button>
//                 </form>
//               )}
//             </div>
//           ) : (
//             <p>Loading profile data...</p>
//           )}
//         </div>

//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
//           <ul className="list-disc pl-6">
//             <li className="text-gray-700 mb-2">Update your username and email if needed.</li>
//             <li className="text-gray-700 mb-2">Add a bio to personalize your profile.</li>
//             <li className="text-gray-700 mb-2">Upload a profile picture to make your account unique.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { getUserProfile, updateUserProfile } from "../../api/UserApi";
// import LogoutButton from "../Authentication/Logout";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
// import { MdAccountCircle, MdEmail } from 'react-icons/md'; // Import Material Design icons
// import { FaEdit, FaSave, FaTimes } from 'react-icons/fa'; // Import Font Awesome icons
// import { FaUserCircle } from "react-icons/fa"; // Import Font Awesome icons

// const Profile = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate(); // Use useNavigate hook for navigation

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await getUserProfile();
//         setProfileData(response.data);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           // Redirect to login page if unauthorized
//           navigate("/login");
//         } else {
//           setError("Error fetching user profile");
//         }
//       }
//     };

//     fetchProfileData();
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile(formData);
//       setIsEditing(false);
//       const response = await getUserProfile();
//       setProfileData(response.data);
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setError(error.response.data.error);
//       } else {
//         setError("Error updating profile");
//       }
//     }
//   };

//   const firstNameLetter =
//     profileData && profileData.user.username
//       ? profileData.user.username[0]
//       : "";

//   return (
//     <div className="flex">
//       <div className="w-1/4 bg-purple-700 h-screen text-white py-6 px-4 rounded-xl">

//         <div className="flex items-center mb-8">

//           <div className="bg-violet-400 rounded-full h-20 w-20 flex items-center justify-center text-6xl font-bold mr-4">
//             <FaUserCircle/>

//           </div>
//           <div>
//             <h2 className="text-2xl font-semibold">
//               {profileData && profileData.user.username}
//             </h2>
//             <p className="text-sm">{profileData && profileData.user.email}</p>
//           </div>
//         </div>
//         <div className="mb-4">
//           <button
//             className="bg-indigo-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full mb-2"
//             onClick={() => setIsEditing(true)}
//           >
//             Update Profile
//           </button>
//           <LogoutButton />
//         </div>
//       </div>
//       <div className="w-3/4 p-6 ">
//         <div className="container max-w-md mt-10 p-6 bg-gray-200 rounded-md shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Profile</h2>
//           {error ? (
//             <p className="text-red-500">Error: {error}</p>
//           ) : profileData ? (
//             <div>
//               {!isEditing ? (
//                 <div>
//                   <p className="text-lg font-semibold">
//                     <MdAccountCircle className="inline mr-2" /> Username: {profileData.user.username}
//                   </p>
//                   <p className="text-lg font-semibold">
//                     <MdEmail className="inline mr-2" /> Email: {profileData.user.email}
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-700 text-sm font-bold mb-2 pd-4"
//                       htmlFor="username"
//                     >
//                       Username
//                     </label>
//                     <input
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       type="text"
//                       name="username"
//                       defaultValue={profileData.user.username}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-700 text-sm font-bold mb-2 pt-4"
//                       htmlFor="email"
//                     >
//                       Email
//                     </label>
//                     <input
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       type="email"
//                       name="email"
//                       defaultValue={profileData.user.email}
//                       readOnly
//                       // onChange={handleChange}
//                     />
//                   </div>

//                   <button
//                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
//                     type="submit"
//                   >
//                     <FaSave className="inline-block mr-2" /> Update
//                   </button>
//                   <button
//                     className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//                     onClick={() => setIsEditing(false)}
//                   >
//                     <FaTimes className="inline-block mr-2" /> Cancel
//                   </button>
//                 </form>
//               )}
//             </div>
//           ) : (
//             <p>Loading profile data...</p>
//           )}
//         </div>

//         {/* Suggestions */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
//           <ul className="list-disc pl-6">
//             <li className="text-gray-700 mb-2">
//               Update your username and email if needed.
//             </li>
//             <li className="text-gray-700 mb-2">
//               Add a bio to personalize your profile.
//             </li>
//             <li className="text-gray-700 mb-2">
//               Upload a profile picture to make your account unique.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// //new style
// import React, { useState, useEffect } from "react";
// import { getUserProfile, updateUserProfile } from "../../api/UserApi";
// import LogoutButton from "../Authentication/Logout";
// import { useNavigate } from "react-router-dom";
// import { MdAccountCircle, MdEmail } from "react-icons/md";
// import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa"; // Import Font Awesome icons

// const Profile = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await getUserProfile();
//         setProfileData(response.data);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           navigate("/login");
//         } else {
//           setError("Error fetching user profile");
//         }
//       }
//     };

//     fetchProfileData();
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile(formData);
//       setIsEditing(false);
//       const response = await getUserProfile();
//       setProfileData(response.data);
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setError(error.response.data.error);
//       } else {
//         setError("Error updating profile");
//       }
//     }
//   };

//   const firstNameLetter =
//     profileData && profileData.user.username
//       ? profileData.user.username[0]
//       : "";

//   return (
//     <div className="flex justify-center items-center">
//       <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
//         <div className="flex items-center mb-8">
//           <div className="bg-violet-500 rounded-full h-20 w-20 flex items-center justify-center text-6xl font-bold mr-4 text-white">
//             {/* {firstNameLetter} */}
//             <FaUserCircle />
//           </div>
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800">
//               {profileData && profileData.user.username}
//             </h2>
//             <p className="text-sm text-gray-600">
//               {profileData && profileData.user.email}
//             </p>
//           </div>
//         </div>
//         <div className="mb-4">
//           <button
//             className="bg-purple-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg mb-2 w-full flex items-center justify-center"
//             onClick={() => setIsEditing(true)}
//           >
//             <FaEdit className="mr-2" /> Edit Profile
//           </button>
//           <LogoutButton />
          
//         </div>
//         <div className="bg-gray-200 p-6 rounded-md shadow-md">
//           <h2 className="text-2xl font-bold mb-4 text-gray-800">Profile</h2>
//           {error ? (
//             <p className="text-red-500">Error: {error}</p>
//           ) : profileData ? (
//             <div>
//               {!isEditing ? (
//                 <div>
//                   <p className="text-lg font-semibold flex items-center text-gray-700 mb-2">
//                     <MdAccountCircle className="mr-2" /> Username:{" "}
//                     {profileData.user.username}
//                   </p>
//                   <p className="text-lg font-semibold flex items-center text-gray-700 mb-2">
//                     <MdEmail className="mr-2" /> Email: {profileData.user.email}
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-700 text-sm font-bold mb-2"
//                       htmlFor="username"
//                     >
//                       Username
//                     </label>
//                     <input
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       type="text"
//                       name="username"
//                       defaultValue={profileData.user.username}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-700 text-sm font-bold mb-2"
//                       htmlFor="email"
//                     >
//                       Email
//                     </label>
//                     <input
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       type="email"
//                       name="email"
//                       defaultValue={profileData.user.email}
//                       readOnly
//                       // onChange={handleChange}
//                     />
//                   </div>

//                   <button
//                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 flex items-center justify-center"
//                     type="submit"
//                   >
//                     <FaSave className="mr-2" /> Save
//                   </button>
//                   <button
//                     className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
//                     onClick={() => setIsEditing(false)}
//                   >
//                     <FaTimes className="mr-2" /> Cancel
//                   </button>
//                 </form>
//               )}
//             </div>
//           ) : (
//             <p>Loading profile data...</p>
//           )}
//         </div>

//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4 text-gray-800">Suggestions</h2>
//           <ul className="list-disc pl-6 text-gray-700">
//             <li className="mb-2">Update your username and email if needed.</li>
//             <li className="mb-2">Add a bio to personalize your profile.</li>
//             <li className="mb-2">
//               Upload a profile picture to make your account unique.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from "react";
import { getUserProfile, updateUserProfile } from "../../api/UserApi";
import LogoutButton from "../Authentication/Logout";
import { useNavigate } from "react-router-dom";
import { MdAccountCircle, MdEmail } from "react-icons/md";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa"; // Import Font Awesome icons

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getUserProfile();
        setProfileData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/login");
        } else {
          setError("Error fetching user profile");
        }
      }
    };

    fetchProfileData();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData);
      setIsEditing(false);
      const response = await getUserProfile();
      setProfileData(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError("Error updating profile");
      }
    }
  };

  const firstNameLetter =
    profileData && profileData.user.username
      ? profileData.user.username[0]
      : "";

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="bg-violet-500 rounded-full h-20 w-20 flex items-center justify-center text-6xl font-bold mr-4 text-white">
            {/* {firstNameLetter} */}
            <FaUserCircle/>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              {profileData && profileData.user.username}
            </h2>
            <p className="text-sm">{profileData && profileData.user.email}</p>
          </div>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MdAccountCircle className="mr-2 text-indigo-500 text-2xl" /> Profile Details
          </h2>
          {!isEditing ? (
            <div>
              <p className="text-lg">
                <MdAccountCircle className="inline mr-2 text-2xl text-purple-500" /> Username:{" "}
                {profileData && profileData.user.username}
              </p>
              <p className="text-lg">
                <MdEmail className="inline mr-2 text-2xl text-purple-500" /> Email:{" "}
                {profileData && profileData.user.email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="username"
                  defaultValue={profileData && profileData.user.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  defaultValue={profileData && profileData.user.email}
                  readOnly
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-purple-600 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-xl mr-2 flex items-center"
                  type="submit"
                >
                  <FaSave className="mr-2" /> Save
                </button>
                <button
                  className="bg-indigo-600 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl flex items-center"
                  onClick={() => setIsEditing(false)}
                >
                  <FaTimes className="mr-2" /> Cancel
                </button>
              </div>
            </form>
          )}
          {!isEditing && (
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 mt-4 rounded-xl flex items-center"
              onClick={() => setIsEditing(true)}
            >
              <FaEdit className="mr-2 " /> Edit Profile
            </button>
          )}
          {error && <p className="text-red-500 mt-4">Error: {error}</p>}
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaEdit className="mr-2 text-purple-600" /> Suggestions
          </h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-700 mb-2">
              Update your username and email if needed.
            </li>
            <li className="text-gray-700 mb-2">
              Add a bio to personalize your profile.
            </li>
            <li className="text-gray-700 mb-2">
              Upload a profile picture to make your account unique.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
