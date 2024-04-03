// import React from "react";
// import Dashboard from "../../components/Dashboard/Dashboard";
// import Sidebar from "./Sidebar";

// const DashboardPage = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500 flex flex-col justify-center items-center">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-3xl font-bold text-white mb-8">Welcome to Your Dashboard</h1>
//           <p className="text-lg text-gray-200 mb-4">
//             This is your personalized dashboard where you can manage your resumes, profile, and more.
//           </p>
//           <Dashboard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;


//main code
// import React from "react";
// import Dashboard from "../../components/Dashboard/Dashboard";
// import Sidebar from "./Sidebar";

// const DashboardPage = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-400 flex flex-col justify-center items-center ">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-3xl font-bold mb-10 text-purple-900">
//             Welcome to Your Dashboard Page
//           </h1>
//           <p className="text-lg text-gray-800 mb-4">
//             This is your personalized dashboard where you can manage your
//             resumes, profile, and more.
//           </p>
//           <Dashboard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;



import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Sidebar from "./Sidebar";
import { FaUserCog } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-400 flex flex-col justify-center items-center ">
        <div className="container mx-auto px-4 py-8 mt-5">
          <h1 className="text-3xl font-bold mb-7 text-purple-200 flex items-center ml-20">
            <FaUserCog className="mr-5" /> Welcome to Your Dashboard Page
          </h1>
          <p className="text-lg text-gray-800 mb-4 ml-20">
            This is your personalized dashboard where you can manage your
            resumes, profile, and more.
          </p>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;



// import React from "react";
// import Dashboard from "../../components/Dashboard/Dashboard";
// import Sidebar from "./Sidebar";
// import { FaUserCog } from "react-icons/fa";

// const DashboardPage = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-400 flex flex-col justify-center items-center">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-3xl font-bold mb-10 text-purple-900">
//             Welcome to Your Dashboard Page
//           </h1>
//           <p className="text-lg text-gray-800 mb-4">
//             This is your personalized dashboard where you can manage your
//             resumes, profile, and more.
//           </p>
//           <Dashboard />
//         </div>
//         <div className="absolute bottom-4 right-4">
//           <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
//             <FaUserCog className="mr-2" />
//             Account Settings
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

///////
// import React from "react";
// import Dashboard from "../../components/Dashboard/Dashboard";
// import Sidebar from "./Sidebar";
// import { FaUserCircle, FaCog } from "react-icons/fa";

// const DashboardPage = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-400 flex flex-col justify-center items-center ">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex items-center justify-between mb-10">
//             <h1 className="text-3xl font-bold text-purple-900">
//               <FaUserCircle className="inline-block mr-2 text-4xl" />
//               Welcome to Your Dashboard Page
//             </h1>
//             <div className="flex items-center">
//               <button className="text-xl text-white rounded-full bg-purple-700 px-4 py-2 mr-4">
//                 <FaCog className="inline-block mr-1" />
//                 Settings
//               </button>
//               <button className="text-xl text-white rounded-full bg-purple-700 px-4 py-2">
//                 Notifications
//               </button>
//             </div>
//           </div>
//           <p className="text-lg text-gray-800 mb-4">
//             This is your personalized dashboard where you can manage your
//             resumes, profile, and more.
//           </p>
//           <Dashboard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
