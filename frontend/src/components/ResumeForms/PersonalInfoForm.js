
// import React, { useState, useEffect } from "react";

// const PersonalInfoForm = ({
//   initialData,
//   addPersonalInfo,
//   handleChange,
//   handleNext,
// }) => {
//   const [personalInfo, setPersonalInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     country: "",
//   });

//   useEffect(() => {
//     if (initialData) {
//       setPersonalInfo(initialData);
//     }
//   }, [initialData]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPersonalInfo({ ...personalInfo, [name]: value });
//     handleChange("personalInfo", { ...personalInfo, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (addPersonalInfo) {
//       addPersonalInfo(personalInfo);
//       handleNext(); // Call handleNext to move to the next form section
//     } else {
//       console.error("addPersonalInfo function is not defined");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8">
//       <div className="grid grid-cols-2 gap-4">
//         <input
//           type="text"
//           name="firstName"
//           value={personalInfo.firstName || ""}
//           onChange={handleInputChange}
//           placeholder="First Name"
//           required
//           className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//         <input
//           type="text"
//           name="lastName"
//           value={personalInfo.lastName || ""}
//           onChange={handleInputChange}
//           placeholder="Last Name"
//           required
//           className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>
//       <input
//         type="email"
//         name="email"
//         value={personalInfo.email || ""}
//         onChange={handleInputChange}
//         placeholder="Email"
//         required
//         className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//       />
//       <input
//         type="tel"
//         name="phone"
//         value={personalInfo.phone || ""}
//         onChange={handleInputChange}
//         placeholder="Phone"
//         className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//       />
//       <input
//         type="text"
//         name="address"
//         value={personalInfo.address || ""}
//         onChange={handleInputChange}
//         placeholder="Address"
//         className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//       />
//       <div className="grid grid-cols-3 gap-4">
//         <input
//           type="text"
//           name="city"
//           value={personalInfo.city || ""}
//           onChange={handleInputChange}
//           placeholder="City"
//           className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//         <input
//           type="text"
//           name="state"
//           value={personalInfo.state || ""}
//           onChange={handleInputChange}
//           placeholder="State"
//           className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//         <input
//           type="text"
//           name="zip"
//           value={personalInfo.zip || ""}
//           onChange={handleInputChange}
//           placeholder="Zip"
//           className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>
//       <input
//         type="text"
//         name="country"
//         value={personalInfo.country || ""}
//         onChange={handleInputChange}
//         placeholder="Country"
//         className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//       />
//       <button
//         onClick={handleSubmit}
//         className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-indigo-700"
//       >
//         Save Personal Info
//       </button>
//     </div>
//   );
// };

// export default PersonalInfoForm;



import React, { useState, useEffect } from "react";

const PersonalInfoForm = ({
  initialData,
  addPersonalInfo,
  handleChange,
  handleNext,
}) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  useEffect(() => {
    if (initialData) {
      setPersonalInfo(initialData);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    handleChange("personalInfo", { ...personalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addPersonalInfo) {
      addPersonalInfo(personalInfo);
      handleNext(); // Call handleNext to move to the next form section
    } else {
      console.error("addPersonalInfo function is not defined");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Personal Information
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          value={personalInfo.firstName || ""}
          onChange={handleInputChange}
          placeholder="First Name"
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          name="lastName"
          value={personalInfo.lastName || ""}
          onChange={handleInputChange}
          placeholder="Last Name"
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <input
        type="email"
        name="email"
        value={personalInfo.email || ""}
        onChange={handleInputChange}
        placeholder="Email"
        required
        className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <input
        type="tel"
        name="phone"
        value={personalInfo.phone || ""}
        onChange={handleInputChange}
        placeholder="Phone"
        className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <input
        type="text"
        name="address"
        value={personalInfo.address || ""}
        onChange={handleInputChange}
        placeholder="Address"
        className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          name="city"
          value={personalInfo.city || ""}
          onChange={handleInputChange}
          placeholder="City"
          className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          name="state"
          value={personalInfo.state || ""}
          onChange={handleInputChange}
          placeholder="State"
          className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          name="zip"
          value={personalInfo.zip || ""}
          onChange={handleInputChange}
          placeholder="Zip"
          className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <input
        type="text"
        name="country"
        value={personalInfo.country || ""}
        onChange={handleInputChange}
        placeholder="Country"
        className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-indigo-700"
      >
        Save Personal Info
      </button>
    </div>
  );
};

export default PersonalInfoForm;
