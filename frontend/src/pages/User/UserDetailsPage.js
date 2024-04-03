// /src/pages/User/UserDetailsPage.js
// import React from "react";
// import UserDetails from "../../components/User/UserDetails";

// const UserDetailsPage = () => {
//   return (
//     <div>
//       {/* User details page content */}
//       <h2>User Details Page</h2>
//       <UserDetails />
//     </div>
//   );
// };

// export default UserDetailsPage;



import React from 'react';
import { useParams } from 'react-router-dom';
import UserDetails from '../../components/User/UserDetails';

const UserDetailsPage = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <UserDetails userId={userId} />
    </div>
  );
};

export default UserDetailsPage;
