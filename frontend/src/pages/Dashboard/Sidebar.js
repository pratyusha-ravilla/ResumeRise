// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getUserProfile } from "../../api/UserApi";
// import { getToken } from "../../utils/auth";

// const Sidebar = () => {
//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const token = getToken();
//         if (!token) return;

//         const profile = await getUserProfile();
//         setUserProfile(profile.data.user);
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-indigo-800 to-purple-800 text-white w-64 min-h-screen p-4">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//       <div className="flex items-center space-x-2 mb-4">
//         {userProfile ? (
//           userProfile.profileImage ? (
//             <img src={userProfile.profileImage} alt="Profile" className="w-8 h-8 rounded-full" />
//           ) : (
//             <div className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full text-white">
//               {userProfile.username ? userProfile.username.charAt(0).toUpperCase() : ""}
//             </div>
//           )
//         ) : (
//           <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
//         )}
//         {userProfile && <span>{userProfile.username}</span>}
//       </div>
//       <ul className="space-y-2">
//         <li>
//           <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">Home</Link>
//         </li>
//         <li>
//           <Link to="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</Link>
//         </li>
//         <li>
//           <Link to="/resumes" className="block py-2 px-4 rounded hover:bg-gray-700">Resumes</Link>
//         </li>
//         <li>
//           <Link to="/create-resume" className="block py-2 px-4 rounded hover:bg-gray-700">Create New Resume</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

//main
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getUserProfile } from "../../api/UserApi";
// import { getToken } from "../../utils/auth";

// const Sidebar = () => {
//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const token = getToken();
//         if (!token) return;

//         const profile = await getUserProfile();
//         setUserProfile(profile.data.user);
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white w-64 min-h-screen p-4">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//       <div className="flex items-center space-x-2 mb-4">
//         {userProfile ? (
//           userProfile.profileImage ? (
//             <img src={userProfile.profileImage} alt="Profile" className="w-8 h-8 rounded-full" />
//           ) : (
//             <div className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full text-white">
//               {userProfile.username ? userProfile.username.charAt(0).toUpperCase() : ""}
//             </div>
//           )
//         ) : (
//           <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
//         )}
//         {userProfile && <span>{userProfile.username}</span>}
//       </div>
//       <ul className="space-y-2">
//         <li>
//           <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">Home</Link>
//         </li>
//         <li>
//           <Link to="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</Link>
//         </li>
//         <li>
//           <Link to="/resumes" className="block py-2 px-4 rounded hover:bg-gray-700">Resumes</Link>
//         </li>
//         <li>
//           <Link to="/resumes/create" className="block py-2 px-4 rounded hover:bg-gray-700">Create New Resume</Link>
//         </li>
//         {/* Add Templates link */}
//         <li>
//           <Link to="/resumes/templates" className="block py-2 px-4 rounded hover:bg-gray-700">Templates</Link>
//         </li>
//       </ul>

//     </div>
//   );
// };

// export default Sidebar;


//important code
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../api/UserApi";
import { getToken } from "../../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFileAlt,
  faPlus,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = getToken();
        if (!token) return;

        const profile = await getUserProfile();
        setUserProfile(profile.data.user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white w-64 min-h-screen p-4 rounded-sm">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="flex items-center space-x-2 mb-4">
        {userProfile ? (
          userProfile.profileImage ? (
            <img
              src={userProfile.profileImage}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-full text-white">
              {/* {userProfile.username ? userProfile.username.charAt(0).toUpperCase() : ""} */}
              <FontAwesomeIcon icon={faUser} className="mr-0" />

            </div>
          )
        ) : (
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        )}
        {userProfile && <span>{userProfile.username}</span>}
      </div>
      <ul className="space-y-3">
        <li>
          <Link
            to="/"
            className="block py-3 px-2 rounded hover:bg-violet-500 flex items-center"
          >
            <FontAwesomeIcon icon={faHome} className="mr-5" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="block py-2 px-2 rounded hover:bg-violet-500 flex items-center"
          >
            <FontAwesomeIcon icon={faUser} className="mr-5" />
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/resumes"
            className="block py-2 px-2 rounded hover:bg-violet-500 flex items-center"
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-5" />
            Resumes
          </Link>
        </li>
        <li>
          <Link
            to="/resumes/create"
            className="block py-2 px-2 rounded hover:bg-violet-500 flex items-center"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-5" />
            Create New Resume
          </Link>
        </li>
        {/* Add Templates link */}
        <li>
          <Link
            to="/resumes/templates"
            className="block py-2 px-2 rounded hover:bg-violet-500 flex items-center"
          >
            <FontAwesomeIcon icon={faPalette} className="mr-5" />
            Templates
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getUserProfile } from "../../api/UserApi";
// import { getToken } from "../../utils/auth";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
// } from "@material-ui/core";
// import {
//   Dashboard as DashboardIcon,
//   Person as PersonIcon,
//   Description as DescriptionIcon,
//   AddCircle as AddCircleIcon,
//   FormatPaint as FormatPaintIcon,
// } from "@mui/icons-material";

// const Sidebar = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const token = getToken();
//         if (!token) return;

//         const profile = await getUserProfile();
//         setUserProfile(profile.data.user);
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = e.clientX;
//       if (x <= 50) {
//         setShowSidebar(true);
//       } else {
//         setShowSidebar(false);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <Drawer
//       variant="persistent"
//       anchor="left"
//       open={showSidebar}
//       PaperProps={{ style: { backgroundColor: "#3f51b5", color: "#fff" } }}
//     >
//       <div className="p-4">
//         <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//         <div className="flex items-center space-x-2 mb-4">
//           {userProfile ? (
//             userProfile.profileImage ? (
//               <img
//                 src={userProfile.profileImage}
//                 alt="Profile"
//                 className="w-8 h-8 rounded-full"
//               />
//             ) : (
//               <div className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full text-white">
//                 {userProfile.username
//                   ? userProfile.username.charAt(0).toUpperCase()
//                   : ""}
//               </div>
//             )
//           ) : (
//             <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
//           )}
//           {userProfile && <span>{userProfile.username}</span>}
//         </div>
//       </div>
//       <Divider />
//       <List>
//         <ListItem button component={Link} to="/">
//           <ListItemIcon>
//             <DashboardIcon />
//           </ListItemIcon>
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button component={Link} to="/profile">
//           <ListItemIcon>
//             <PersonIcon />
//           </ListItemIcon>
//           <ListItemText primary="Profile" />
//         </ListItem>
//         <ListItem button component={Link} to="/resumes">
//           <ListItemIcon>
//             <DescriptionIcon />
//           </ListItemIcon>
//           <ListItemText primary="Resumes" />
//         </ListItem>
//         <ListItem button component={Link} to="/resumes/create">
//           <ListItemIcon>
//             <AddCircleIcon />
//           </ListItemIcon>
//           <ListItemText primary="Create New Resume" />
//         </ListItem>
//         {/* Add Templates link */}
//         <ListItem button component={Link} to="/resumes/templates">
//           <ListItemIcon>
//             <FormatPaintIcon />
//           </ListItemIcon>
//           <ListItemText primary="Templates" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;
