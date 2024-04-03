// // src/components/Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between">
//           <div className="text-white text-xl">Dashboard</div>
//           <div className="flex space-x-4">
//             <Link
//               to="/"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               to="/dashboard"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Dashboard
//             </Link>
//             <Link
//               to="/resumes"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Resumes
//             </Link>
//             <Link
//               to="/profile"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Profile
//             </Link>
//             <Link
//               to="/resumes/create"
//               className="bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm font-medium"
//             >
//               Create New Resume
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
