// // ReferenceForm.js
// import React, { useState } from 'react';

// const ReferenceForm = ({ addReference }) => {
//   const [reference, setReference] = useState({
//     name: '',
//     company: '',
//     email: '',
//     phone: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setReference({ ...reference, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addReference(reference);
//     setReference({
//       name: '',
//       company: '',
//       email: '',
//       phone: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={reference.name} onChange={handleChange} placeholder="Reference Name" required />
//       <input type="text" name="company" value={reference.company} onChange={handleChange} placeholder="Company" />
//       <input type="email" name="email" value={reference.email} onChange={handleChange} placeholder="Email" />
//       <input type="tel" name="phone" value={reference.phone} onChange={handleChange} placeholder="Phone" />
//       <button type="submit">Add Reference</button>
//     </form>
//   );
// };

// export default ReferenceForm;

// import React, { useState } from 'react';

// const ReferenceForm = ({ addReference }) => {
//   const [reference, setReference] = useState({
//     name: '',
//     company: '',
//     email: '',
//     phone: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setReference({ ...reference, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addReference(reference);
//     setReference({
//       name: '',
//       company: '',
//       email: '',
//       phone: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Reference Name</label>
//         <input type="text" name="name" value={reference.name} onChange={handleChange} placeholder="Reference Name" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
//         <input type="text" name="company" value={reference.company} onChange={handleChange} placeholder="Company" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//         <input type="email" name="email" value={reference.email} onChange={handleChange} placeholder="Email" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//         <input type="tel" name="phone" value={reference.phone} onChange={handleChange} placeholder="Phone" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//       </div>
//       <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Add Reference</button>
//     </form>
//   );
// };

// export default ReferenceForm;

import React, { useState } from "react";

const ReferenceForm = ({ addReference }) => {
  const [reference, setReference] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReference({ ...reference, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReference(reference);
    setReference({
      name: "",
      company: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        References
      </h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Reference Name
        </label>
        <input
          type="text"
          name="name"
          value={reference.name}
          onChange={handleChange}
          placeholder="Reference Name"
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
          value={reference.company}
          onChange={handleChange}
          placeholder="Company"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={reference.email}
          onChange={handleChange}
          placeholder="Email"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={reference.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-purple-700"
      >
        Add Reference
      </button>
    </div>
  );
};

export default ReferenceForm;
