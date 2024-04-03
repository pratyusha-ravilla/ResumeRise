// import React, { useState } from "react";

// const EducationForm = ({ addEducation }) => {
//   const [education, setEducation] = useState({
//     institution: "",
//     degree: "",
//     fieldOfStudy: "",
//     startDate: "",
//     endDate: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEducation({ ...education, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addEducation(education);
//     setEducation({
//       institution: "",
//       degree: "",
//       fieldOfStudy: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//     });
//   };

//   return (
//     <div>
//       <div className="mb-4">
//         <input
//           type="text"
//           name="institution"
//           value={education.institution}
//           onChange={handleChange}
//           placeholder="Institution"
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="text"
//           name="degree"
//           value={education.degree}
//           onChange={handleChange}
//           placeholder="Degree"
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="text"
//           name="fieldOfStudy"
//           value={education.fieldOfStudy}
//           onChange={handleChange}
//           placeholder="Field of Study"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="date"
//           name="startDate"
//           value={education.startDate}
//           onChange={handleChange}
//           placeholder="Start Date"
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="date"
//           name="endDate"
//           value={education.endDate}
//           onChange={handleChange}
//           placeholder="End Date"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-6">
//         <textarea
//           name="description"
//           value={education.description}
//           onChange={handleChange}
//           placeholder="Description"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="text-center">
//         <button
//           onClick={handleSubmit}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
//         >
//           Add Education
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EducationForm;

// import React, { useState } from "react";

// const EducationForm = ({ addEducation }) => {
//   const [education, setEducation] = useState({
//     institution: "",
//     degree: "",
//     fieldOfStudy: "",
//     startDate: "",
//     endDate: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEducation({ ...education, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addEducation(education); // Call the addEducation function with the education data
//     setEducation({
//       institution: "",
//       degree: "",
//       fieldOfStudy: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//     });
//   };

//   return (
//     <div>
//       <div className="mb-4">
//         <input
//           type="text"
//           name="institution"
//           value={education.institution}
//           onChange={handleChange}
//           placeholder="Institution"
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="text"
//           name="degree"
//           value={education.degree}
//           onChange={handleChange}
//           placeholder="Degree"
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="text"
//           name="fieldOfStudy"
//           value={education.fieldOfStudy}
//           onChange={handleChange}
//           placeholder="Field of Study"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="date"
//           name="startDate"
//           value={education.startDate}
//           onChange={handleChange}
//           placeholder="Start Date"
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="date"
//           name="endDate"
//           value={education.endDate}
//           onChange={handleChange}
//           placeholder="End Date"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-6">
//         <textarea
//           name="description"
//           value={education.description}
//           onChange={handleChange}
//           placeholder="Description"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="text-center">
//         <button
//           onClick={handleSubmit}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
//         >
//           Add Education
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EducationForm;

import React, { useState } from "react";

const EducationForm = ({ addEducation }) => {
  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSave = () => {
    addEducation(education);
    setEducation({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Education
        </h2>
        <input
          type="text"
          name="institution"
          value={education.institution}
          onChange={handleChange}
          placeholder="Institution"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="degree"
          value={education.degree}
          onChange={handleChange}
          placeholder="Degree"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="fieldOfStudy"
          value={education.fieldOfStudy}
          onChange={handleChange}
          placeholder="Field of Study"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          name="startDate"
          value={education.startDate}
          onChange={handleChange}
          placeholder="Start Date"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
          placeholder="End Date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <textarea
          name="description"
          value={education.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-purple-600 focus:outline-none mr-4"
        >
          Save
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-purple-600 focus:outline-none"
        >
          Add Education
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
