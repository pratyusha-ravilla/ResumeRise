// // /src/pages/Authentication/LoginPage.js
// import React from "react";
// import LoginForm from "../../components/Authentication/LoginForm";

// const LoginPage = () => {
//   return (
//     <div>
//       {/* Login page content */}

//       <LoginForm />
//     </div>
//   );
// };

// export default LoginPage;

import React from "react";
import LoginForm from "../../components/Authentication/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white px-8 py-12 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Log In to Access Your Account
        </h2>

        {/* Login form component */}
        <LoginForm />

        {/* Message for new users */}
        <p className="mt-4 text-gray-600 text-center">
          DON'T HAVE AN ACCOUNT?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            SIGNUP
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
