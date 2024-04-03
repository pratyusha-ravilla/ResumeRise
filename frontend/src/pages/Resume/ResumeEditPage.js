// // /src/pages/Resume/ResumeEditPage.js
// import React from "react";
// import ResumeEdit from "../../components/Resume/ResumeEdit";

// const ResumeEditPage = () => {
//   return (
//     <div>
//       <ResumeEdit />
//     </div>
//   );
// };

// export default ResumeEditPage;

import React from "react";
import ResumeEdit from "../../components/Resume/ResumeEdit";

const ResumeEditPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-indigo-300 min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <ResumeEdit />
      </div>
    </div>
  );
};

export default ResumeEditPage;
