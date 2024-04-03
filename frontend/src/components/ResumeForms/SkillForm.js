// // SkillForm.js
// import React, { useState } from 'react';

// const SkillForm = ({ addSkill }) => {
//   const [skill, setSkill] = useState({
//     name: '',
//     level: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSkill({ ...skill, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addSkill(skill);
//     setSkill({ name: '', level: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={skill.name} onChange={handleChange} placeholder="Skill Name" required />
//       <input type="text" name="level" value={skill.level} onChange={handleChange} placeholder="Skill Level" />
//       <button type="submit">Add Skill</button>
//     </form>
//   );
// };

// export default SkillForm;

// import React, { useState } from 'react';

// const SkillForm = ({ addSkill }) => {
//   const [skill, setSkill] = useState({
//     name: '',
//     level: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSkill({ ...skill, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addSkill(skill);
//     setSkill({ name: '', level: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Skill Name</label>
//         <input type="text" name="name" value={skill.name} onChange={handleChange} placeholder="Skill Name" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="level" className="block text-sm font-medium text-gray-700">Skill Level</label>
//         <input type="text" name="level" value={skill.level} onChange={handleChange} placeholder="Skill Level" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Add Skill</button>
//     </form>
//   );
// };

// export default SkillForm;

// import React, { useState } from 'react';

// const SkillForm = ({ addSkill }) => {
//   const [skill, setSkill] = useState({
//     name: '',
//     level: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSkill({ ...skill, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addSkill(skill);
//     setSkill({ name: '', level: '' });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Skill Name</label>
//         <input type="text" name="name" value={skill.name} onChange={handleChange} placeholder="Skill Name" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="level" className="block text-sm font-medium text-gray-700">Skill Level</label>
//         <input type="text" name="level" value={skill.level} onChange={handleChange} placeholder="Skill Level" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <button onClick={handleSubmit} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Add Skill</button>
//     </div>
//   );
// };

// export default SkillForm;



import React, { useState } from 'react';

const SkillForm = ({ addSkill }) => {
  const [skill, setSkill] = useState({
    name: '',
    level: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill({ ...skill, [name]: value });
  };

  const handleSave = () => {
    addSkill(skill);
    setSkill({ name: '', level: '' });
  };

  const handleAddAnother = () => {
    addSkill(skill);
    setSkill({ name: '', level: '' });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Skills
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Skill Name</label>
        <input type="text" name="name" value={skill.name} onChange={handleChange} placeholder="Skill Name" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="level" className="block text-sm font-medium text-gray-700">Skill Level</label>
        <input type="text" name="level" value={skill.level} onChange={handleChange} placeholder="Skill Level" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div className="text-center">
        <button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-purple-700 focus:outline-none mr-2">Save Skill</button>
        <button onClick={handleAddAnother} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Add Another Skill</button>
      </div>
    </div>
  );
};

export default SkillForm;
