// // LanguageForm.js
// import React, { useState } from "react";

// const LanguageForm = ({ addLanguage }) => {
//   const [language, setLanguage] = useState({
//     name: "",
//     proficiency: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLanguage({ ...language, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addLanguage(language);
//     setLanguage({ name: "", proficiency: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={language.name}
//         onChange={handleChange}
//         placeholder="Language Name"
//         required
//       />
//       <input
//         type="text"
//         name="proficiency"
//         value={language.proficiency}
//         onChange={handleChange}
//         placeholder="Proficiency"
//       />
//       <button type="submit">Add Language</button>
//     </form>
//   );
// };

// export default LanguageForm;

// import React, { useState } from 'react';

// const LanguageForm = ({ addLanguage }) => {
//   const [language, setLanguage] = useState({
//     name: '',
//     proficiency: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLanguage({ ...language, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addLanguage(language);
//     setLanguage({ name: '', proficiency: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Language Name</label>
//         <input type="text" name="name" value={language.name} onChange={handleChange} placeholder="Language Name" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="proficiency" className="block text-sm font-medium text-gray-700">Proficiency</label>
//         <input type="text" name="proficiency" value={language.proficiency} onChange={handleChange} placeholder="Proficiency" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Add Language</button>
//     </form>
//   );
// };

// export default LanguageForm;



// import React, { useState } from "react";

// const LanguageForm = ({ addLanguage }) => {
//   const [language, setLanguage] = useState({
//     name: "",
//     proficiency: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLanguage({ ...language, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addLanguage(language);
//     setLanguage({ name: "", proficiency: "" });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8">
//       <div className="mb-4">
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Language Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           value={language.name}
//           onChange={handleChange}
//           placeholder="Language Name"
//           required
//           className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="proficiency"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Proficiency
//         </label>
//         <input
//           type="text"
//           name="proficiency"
//           value={language.proficiency}
//           onChange={handleChange}
//           placeholder="Proficiency"
//           className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>
//       <button
//         onClick={handleSubmit}
//         className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
//       >
//         Add Language
//       </button>
//     </div>
//   );
// };

// export default LanguageForm;



import React, { useState } from 'react';

const LanguageForm = ({ addLanguage }) => {
  const [language, setLanguage] = useState({
    name: '',
    proficiency: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLanguage({ ...language, [name]: value });
  };

  const handleSave = () => {
    addLanguage(language);
    setLanguage({ name: '', proficiency: '' });
  };

  const handleAddAnother = () => {
    addLanguage(language);
    setLanguage({ name: '', proficiency: '' });
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
       Languages
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Language Name
        </label>
        <input
          type="text"
          name="name"
          value={language.name}
          onChange={handleChange}
          placeholder="Language Name"
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="proficiency" className="block text-sm font-medium text-gray-700">
          Proficiency
        </label>
        <input
          type="text"
          name="proficiency"
          value={language.proficiency}
          onChange={handleChange}
          placeholder="Proficiency"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-purple-700 focus:outline-none mr-2"
        >
          Save Language
        </button>
        <button
          onClick={handleAddAnother}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          Add Another Language
        </button>
      </div>
    </div>
  );
};

export default LanguageForm;



