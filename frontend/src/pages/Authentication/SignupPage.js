// // /src/pages/Authentication/SignupPage.js
// import React from "react";
// import SignupForm from "../../components/Authentication/SignupForm";

// const SignupPage = () => {
//   return (
//     <div>
//       {/* Signup page content */}

//       <SignupForm />
//     </div>
//   );
// };

// export default SignupPage;



// /src/pages/Authentication/SignupPage.js
import React from "react";
import SignupForm from "../../components/Authentication/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white px-8 py-12 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Create Your Account
        </h2>

        {/* Signup form component */}
        <SignupForm />

        {/* Message for existing users */}
        <p className="mt-4 text-gray-600 text-center">
          ALREADY HAVE AN ACCOUNT?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            LOGIN
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
