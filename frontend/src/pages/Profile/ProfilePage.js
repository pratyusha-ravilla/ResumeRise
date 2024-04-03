// // /src/pages/Profile/ProfilePage.js
// import React from "react";
// import Profile from "../../components/Profile/Profile";

// const ProfilePage = () => {
//   return (
//     <div>
//       {/* Profile page content */}

//       <Profile />
//     </div>
//   );
// };

// export default ProfilePage;

// import React from "react";
// import Profile from "../../components/Profile/Profile";

// const ProfilePage = () => {
//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-semibold text-center mb-8">
//           User Profile
//         </h1>
//         <div className="bg-white shadow-md rounded-md p-6">
//           <Profile />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

// import React from "react";
// import Profile from "../../components/Profile/Profile";

// const ProfilePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col justify-center items-center">
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-semibold text-white mb-8">User Profile</h1>
//         <div className="bg-white shadow-md rounded-md p-6">
//           <Profile />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React from "react";
import Profile from "../../components/Profile/Profile";


const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
      {/* Navbar */}
   
    
      {/* Profile Content */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold text-white mb-8 ">
         
        </h1>
        <div className="bg-white shadow-md rounded-md p-6">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
