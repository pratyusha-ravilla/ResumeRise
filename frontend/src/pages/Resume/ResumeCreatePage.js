// // /src/pages/Resume/ResumeCreatePage.js
// import React from "react";
// import ResumeForm from "../../components/Resume/ResumeForm";

// const ResumeCreatePage = () => {
//   return (
//     <div>
//       {/* Resume create page content */}

//       <ResumeForm />
//     </div>
//   );
// };

// export default ResumeCreatePage;

// /src/pages/Resume/ResumeCreatePage.js
// import React from "react";
// import ResumeForm from "../../components/Resume/ResumeForm";

// const ResumeCreatePage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//       <div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-md">
//         <h1 className="text-3xl font-bold text-center mb-8">Create Your Resume</h1>

//         {/* Content */}
//         <p className="text-gray-800 text-lg mb-6">
//           Welcome to our resume creation page. Please fill out the form below to create your resume.
//         </p>

//         {/* Resume Form Component */}
//         <ResumeForm />

//         {/* Additional content */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-600">
//             Need help? Contact us at <a href="mailto:support@example.com">support@example.com</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeCreatePage;

//src/pages/Resume/ResumeCreatePage.js
import React from "react";
import ResumeForm from "../../components/Resume/ResumeForm";

const ResumeCreatePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-300 to-purple-300  min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-700 shadow-lg p-4">
        <h1 className="text-2xl font-bold text-gray-200">Create Your Resume</h1>
        <p className="text-gray-200">
          Fill in the details below to create your resume.
        </p>
      </header>

      {/* Main content */}
      <main className="container mx-auto py-8">
        <div className="max-w-lg mx-auto bg-gradient-to-r from-indigo-400 to-purple-400 ">
          <ResumeForm />
        </div>

        {/* Additional content */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-700">
            Need help? Contact us at{" "}
            <a href="mailto:support@example.com">support@example.com</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-400 text-center py-5 mt-12">
        <p className="text-gray-800">
          Pratyusha Chowdary © 2024 Resume Rise. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ResumeCreatePage;

// import React from "react";
// import ResumeForm from "../../components/Resume/ResumeForm";

// const ResumeCreatePage = () => {
//   const handleSubmit = async (formData) => {
//     try {
//       // Implement your submit logic here
//       console.log("Form data submitted:", formData);

//       // Assuming you have some asynchronous operation here, like sending data to a server
//       // Simulating an API call delay with setTimeout
//       setTimeout(() => {
//         console.log("Form data successfully submitted to server");
//         // Add code here to handle the success scenario, like showing a success message to the user
//       }, 1000);
//     } catch (error) {
//       console.error("Error submitting form data:", error);
//       // Add code here to handle the error scenario, like showing an error message to the user
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-indigo-200 to-purple-200 min-h-screen">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-700 to-purple-700 shadow-lg p-4">
//         <h1 className="text-2xl font-bold text-gray-200">Create Your Resume</h1>
//         <p className="text-gray-200">
//           Fill in the details below to create your resume.
//         </p>
//       </header>

//       {/* Main content */}
//       <main className="container mx-auto py-8">
//         <div className="max-w-lg mx-auto bg-gradient-to-r from-indigo-300 to-purple-300">
//           <ResumeForm onSubmit={handleSubmit} />
//         </div>

//         {/* Additional content */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-700">
//             Need help? Contact us at{" "}
//             <a href="mailto:support@example.com">support@example.com</a>
//           </p>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-purple-400 text-center py-5 mt-12">
//         <p className="text-gray-800">
//           Pratyusha Chowdary © 2024 Resume Rise. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default ResumeCreatePage;
