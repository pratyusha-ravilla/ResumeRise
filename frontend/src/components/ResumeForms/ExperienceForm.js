// // ExperienceForm.js
// import React, { useState } from 'react';

// const ExperienceForm = ({ addExperience }) => {
//   const [experience, setExperience] = useState({
//     title: '',
//     company: '',
//     location: '',
//     startDate: '',
//     endDate: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setExperience({ ...experience, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addExperience(experience);
//     setExperience({
//       title: '',
//       company: '',
//       location: '',
//       startDate: '',
//       endDate: '',
//       description: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="title" value={experience.title} onChange={handleChange} placeholder="Title" required />
//       <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company" required />
//       <input type="text" name="location" value={experience.location} onChange={handleChange} placeholder="Location" />
//       <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} placeholder="Start Date" required />
//       <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} placeholder="End Date" />
//       <textarea name="description" value={experience.description} onChange={handleChange} placeholder="Description"></textarea>
//       <button type="submit">Add Experience</button>
//     </form>
//   );
// };

// export default ExperienceForm;

// import React, { useState } from 'react';

// const ExperienceForm = ({ addExperience }) => {
//   const [experience, setExperience] = useState({
//     title: '',
//     company: '',
//     location: '',
//     startDate: '',
//     endDate: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setExperience({ ...experience, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addExperience(experience);
//     setExperience({
//       title: '',
//       company: '',
//       location: '',
//       startDate: '',
//       endDate: '',
//       description: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//         <input type="text" name="title" value={experience.title} onChange={handleChange} placeholder="Title" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
//         <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//         <input type="text" name="location" value={experience.location} onChange={handleChange} placeholder="Location" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
//         <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
//         <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea name="description" value={experience.description} onChange={handleChange} placeholder="Description" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//       </div>
//       <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Add Experience</button>
//     </form>
//   );
// };

// export default ExperienceForm;

// import React, { useState } from 'react';

// const ExperienceForm = ({ addExperience }) => {
//   const [experience, setExperience] = useState({
//     title: '',
//     company: '',
//     location: '',
//     startDate: '',
//     endDate: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setExperience({ ...experience, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addExperience(experience);
//     setExperience({
//       title: '',
//       company: '',
//       location: '',
//       startDate: '',
//       endDate: '',
//       description: ''
//     });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8">
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//         <input type="text" name="title" value={experience.title} onChange={handleChange} placeholder="Title" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
//         <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//         <input type="text" name="location" value={experience.location} onChange={handleChange} placeholder="Location" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
//         <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
//         <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea name="description" value={experience.description} onChange={handleChange} placeholder="Description" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//       </div>
//       <button onClick={handleSubmit} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Add Experience</button>
//     </div>
//   );
// };

// export default ExperienceForm;

// import React, { useState } from 'react';

// const ExperienceForm = ({ addExperience }) => {
//   const [experience, setExperience] = useState({
//     title: '',
//     company: '',
//     location: '',
//     startDate: '',
//     endDate: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setExperience({ ...experience, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addExperience(experience); // Ensure that addExperience function is called with the experience data
//     setExperience({
//       title: '',
//       company: '',
//       location: '',
//       startDate: '',
//       endDate: '',
//       description: ''
//     });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//           <input type="text" name="title" value={experience.title} onChange={handleChange} placeholder="Title" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
//           <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//           <input type="text" name="location" value={experience.location} onChange={handleChange} placeholder="Location" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
//           <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
//           <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea name="description" value={experience.description} onChange={handleChange} placeholder="Description" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//         </div>
//         <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Add Experience</button>
//       </form>
//     </div>
//   );
// };

// export default ExperienceForm;

// import React, { useState } from 'react';

// const ExperienceForm = ({ addExperience }) => {
//   const [experience, setExperience] = useState({
//     title: '',
//     company: '',
//     location: '',
//     startDate: '',
//     endDate: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setExperience({ ...experience, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addExperience(experience);
//     setExperience({
//       title: '',
//       company: '',
//       location: '',
//       startDate: '',
//       endDate: '',
//       description: ''
//     });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8">
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//         <input type="text" name="title" value={experience.title} onChange={handleChange} placeholder="Title" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
//         <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//         <input type="text" name="location" value={experience.location} onChange={handleChange} placeholder="Location" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
//         <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
//         <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea name="description" value={experience.description} onChange={handleChange} placeholder="Description" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//       </div>
//       <button onClick={handleSubmit} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Add Experience</button>
//     </div>
//   );
// };

// export default ExperienceForm;

import React, { useState } from "react";

const ExperienceForm = ({ addExperience }) => {
  const [experience, setExperience] = useState({
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleSave = () => {
    addExperience(experience);
    setExperience({
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleAddAnother = () => {
    addExperience(experience);
    setExperience({
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Experience
      </h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          value={experience.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Company
        </label>
        <input
          type="text"
          name="company"
          value={experience.company}
          onChange={handleChange}
          placeholder="Company"
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <input
          type="text"
          name="location"
          value={experience.location}
          onChange={handleChange}
          placeholder="Location"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="startDate"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          type="date"
          name="startDate"
          value={experience.startDate}
          onChange={handleChange}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="endDate"
          className="block text-sm font-medium text-gray-700"
        >
          End Date
        </label>
        <input
          type="date"
          name="endDate"
          value={experience.endDate}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          name="description"
          value={experience.description}
          onChange={handleChange}
          placeholder="Description"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-indigo-700 mr-2"
        >
          Save Experience
        </button>
        <button
          onClick={handleAddAnother}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        >
          Add Another Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
