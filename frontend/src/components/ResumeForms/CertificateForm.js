// // CertificationForm.js
// import React, { useState } from 'react';

// const CertificationForm = ({ addCertification }) => {
//   const [certification, setCertification] = useState({
//     name: '',
//     authority: '',
//     licenseNumber: '',
//     startDate: '',
//     endDate: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCertification({ ...certification, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addCertification(certification);
//     setCertification({
//       name: '',
//       authority: '',
//       licenseNumber: '',
//       startDate: '',
//       endDate: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={certification.name} onChange={handleChange} placeholder="Certification Name" required />
//       <input type="text" name="authority" value={certification.authority} onChange={handleChange} placeholder="Authority" />
//       <input type="text" name="licenseNumber" value={certification.licenseNumber} onChange={handleChange} placeholder="License Number" />
//       <input type="date" name="startDate" value={certification.startDate} onChange={handleChange} placeholder="Start Date" />
//       <input type="date" name="endDate" value={certification.endDate} onChange={handleChange} placeholder="End Date" />
//       <button type="submit">Add Certification</button>
//     </form>
//   );
// };

// export default CertificationForm;

// import React, { useState } from 'react';

// const CertificationForm = ({ addCertification }) => {
//   const [certification, setCertification] = useState({
//     name: '',
//     authority: '',
//     licenseNumber: '',
//     startDate: '',
//     endDate: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCertification({ ...certification, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addCertification(certification);
//     setCertification({
//       name: '',
//       authority: '',
//       licenseNumber: '',
//       startDate: '',
//       endDate: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <div className="mb-4">
//         <input type="text" name="name" value={certification.name} onChange={handleChange} placeholder="Certification Name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="mb-4">
//         <input type="text" name="authority" value={certification.authority} onChange={handleChange} placeholder="Authority" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="mb-4">
//         <input type="text" name="licenseNumber" value={certification.licenseNumber} onChange={handleChange} placeholder="License Number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="mb-4">
//         <input type="date" name="startDate" value={certification.startDate} onChange={handleChange} placeholder="Start Date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="mb-6">
//         <input type="date" name="endDate" value={certification.endDate} onChange={handleChange} placeholder="End Date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="text-center">
//         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Add Certification</button>
//       </div>
//     </form>
//   );
// };

// export default CertificationForm;

// import React, { useState } from 'react';

// const CertificationForm = ({ addCertification }) => {
//   const [certification, setCertification] = useState({
//     name: '',
//     authority: '',
//     licenseNumber: '',
//     startDate: '',
//     endDate: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCertification({ ...certification, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addCertification(certification);
//     setCertification({
//       name: '',
//       authority: '',
//       licenseNumber: '',
//       startDate: '',
//       endDate: ''
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <div className="mb-4">
//         <input type="text" name="name" value={certification.name} onChange={handleChange} placeholder="Certification Name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="mb-4">
//         <input type="text" name="authority" value={certification.authority} onChange={handleChange} placeholder="Authority" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="mb-4">
//         <input type="text" name="licenseNumber" value={certification.licenseNumber} onChange={handleChange} placeholder="License Number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="mb-4">
//         <input type="date" name="startDate" value={certification.startDate} onChange={handleChange} placeholder="Start Date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="mb-6">
//         <input type="date" name="endDate" value={certification.endDate} onChange={handleChange} placeholder="End Date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//       </div>
//       <div className="text-center">
//         <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Add Certification</button>
//       </div>
//     </div>
//   );
// };

// export default CertificationForm;

import React, { useState } from "react";

const CertificationForm = ({ addCertification }) => {
  const [certification, setCertification] = useState({
    name: "",
    authority: "",
    licenseNumber: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertification({ ...certification, [name]: value });
  };

  const handleSave = () => {
    addCertification(certification);
    setCertification({
      name: "",
      authority: "",
      licenseNumber: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleAddAnother = () => {
    addCertification(certification);
    setCertification({
      name: "",
      authority: "",
      licenseNumber: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Certification
      </h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={certification.name}
          onChange={handleChange}
          placeholder="Certification Name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="authority"
          value={certification.authority}
          onChange={handleChange}
          placeholder="Authority"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="licenseNumber"
          value={certification.licenseNumber}
          onChange={handleChange}
          placeholder="License Number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          name="startDate"
          value={certification.startDate}
          onChange={handleChange}
          placeholder="Start Date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="date"
          name="endDate"
          value={certification.endDate}
          onChange={handleChange}
          placeholder="End Date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-purple-600 focus:outline-none mr-2"
        >
          Save Certification
        </button>
        <button
          onClick={handleAddAnother}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Another Certification
        </button>
      </div>
    </div>
  );
};

export default CertificationForm;
