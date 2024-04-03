// import React, { useState } from "react";
// import axios from "axios";
// import { getToken } from "../../utils/auth"; // Import getToken function from auth.js
// import PersonalInfoForm from "../ResumeForms/PersonalInfoForm";
// import EducationForm from "../ResumeForms/EducationForm";
// import ExperienceForm from "../ResumeForms/ExperienceForm";
// import SkillForm from "../ResumeForms/SkillForm";
// import CertificateForm from "../ResumeForms/CertificateForm";
// import ReferenceForm from "../ResumeForms/ReferenceForm";
// import LanguageForm from "../ResumeForms/LanguageForm";

// const ResumeForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     summary: "",
//     personalInfo: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       address: "",
//       city: "",
//       state: "",
//       zip: "",
//       country: "",
//     },
//     educations: [],
//     experiences: [],
//     skills: [],
//     languages: [],
//     certifications: [],
//     references: [],
//   });

//   const [currentForm, setCurrentForm] = useState("addTitleSummary");
//   const [showPrevious, setShowPrevious] = useState(false);
//   const [showNext, setShowNext] = useState(true);
//   const [errors, setErrors] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = getToken(); // Retrieve the token using getToken function
//       if (!token) {
//         // Handle case where token is not available
//         console.error("Token not found");
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       // Submit the final form data
//       await axios.post("http://localhost:9900/api/resumes", formData, config);

//       // Optionally, you can redirect the user to a success page or show a success message
//       console.log("Resume submitted successfully!");
//     } catch (error) {
//       console.error("Error creating resume:", error);
//       console.log("Error details:", error.response);

//       // Optionally, you can show an error message to the user
//     }
//   };

//   const handleFormChange = (fieldName, fieldData) => {
//     setFormData({ ...formData, [fieldName]: fieldData });
//   };

//   // Function to handle moving to the next form section
//   const handleNext = () => {
//     const currentFormData = formData[currentForm] || {}; // Ensure currentFormData is initialized as an empty object if it's undefined
//     console.log("Current Form Data:", currentFormData);
//     const requiredFields = Object.entries(currentFormData).filter(
//       ([key, value]) => value === ""
//     );
//     console.log("Required Fields:", requiredFields);
//     if (requiredFields.length > 0) {
//       setErrors({
//         ...errors,
//         [currentForm]: "Please fill in all required fields.",
//       });
//       return;
//     }

//     setErrors({});

//     console.log("Current Form:", currentForm);
//     console.log("Form Data:", formData);

//     // Move to the next form section
//     switch (currentForm) {
//       case "addTitleSummary":
//         setCurrentForm("addPersonalInfo");
//         break;
//       case "addPersonalInfo":
//         setCurrentForm("educations");
//         setShowPrevious(true);
//         break;
//       case "educations":
//         setCurrentForm("experiences");
//         break;
//       case "experiences":
//         setCurrentForm("skills");
//         break;
//       case "skills":
//         setCurrentForm("languages");
//         break;
//       case "languages":
//         setCurrentForm("certifications");
//         break;
//       case "certifications":
//         setCurrentForm("references");
//         setShowNext(false); // Hide next button on last form section
//         break;
//       default:
//         break;
//     }
//   };

//   // Function to handle moving to the previous form section
//   const handlePrevious = () => {
//     // Move to the previous form section
//     switch (currentForm) {
//       case "addPersonalInfo":
//         setCurrentForm("addTitleSummary");
//         break;
//       case "educations":
//         setCurrentForm("addPersonalInfo");
//         setShowPrevious(false); // Hide previous button on first form section
//         break;
//       case "experiences":
//         setCurrentForm("educations");
//         break;
//       case "skills":
//         setCurrentForm("experiences");
//         break;
//       case "languages":
//         setCurrentForm("skills");
//         break;
//       case "certifications":
//         setCurrentForm("languages");
//         break;
//       case "references":
//         setCurrentForm("certifications");
//         setShowNext(true); // Show next button on previous form section
//         break;
//       default:
//         break;
//     }
//   };

//   const renderForm = () => {
//     switch (currentForm) {
//       case "addTitleSummary":
//         return (
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Title:
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               value={formData.title}
//               onChange={(e) => handleFormChange("title", e.target.value)}
//             />
//             <br />
//             <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
//               Summary:
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={formData.summary}
//               onChange={(e) => handleFormChange("summary", e.target.value)}
//             />
//           </div>
//         );
//       case "addPersonalInfo":
//         return (
//           <PersonalInfoForm
//             addPersonalInfo={(data) =>
//               handleFormChange("personalInfo", data)
//             } // Pass a function to update personalInfo in the formData
//             handleChange={handleFormChange}
//             handleNext={handleNext} // Pass the handleNext function as a prop
//           />
//         );
//       case "educations":
//         return (
//           <EducationForm
//             addEducation={(data) =>
//               handleFormChange("educations", [...formData.educations, data])
//             }
//             handleChange={handleFormChange}
//             handleNext={handleNext}
//           />
//         );
//       case "experiences":
//         return (
//           <ExperienceForm
//             addExperience={(data) =>
//               handleFormChange("experiences", [
//                 ...formData.experiences,
//                 data,
//               ])
//             }
//             handleChange={handleFormChange}
//             handleNext={handleNext}
//           />
//         );
//       case "skills":
//         return (
//           <SkillForm
//             addSkill={(data) =>
//               handleFormChange("skills", [...formData.skills, data])
//             }
//             handleChange={handleFormChange}
//             handleNext={handleNext}
//           />
//         );
//       case "languages":
//         return (
//           <LanguageForm
//             addLanguage={(data) =>
//               handleFormChange("languages", [...formData.languages, data])
//             }
//             handleChange={handleFormChange}
//             handleNext={handleNext}
//           />
//         );
//       case "certifications":
//         return (
//           <CertificateForm
//             addCertification={(data) =>
//               handleFormChange("certifications", [
//                 ...formData.certifications,
//                 data,
//               ])
//             }
//             handleChange={handleFormChange}
//             handleNext={handleNext}
//           />
//         );
//       case "references":
//         return (
//           <ReferenceForm
//             addReference={(data) =>
//               handleFormChange("references", [...formData.references, data])
//             }
//             handleChange={handleFormChange}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Create Resume</h2>
//       <form onSubmit={handleSubmit}>
//         {renderForm()}
//         <div className="flex justify-between mt-4">
//           {showPrevious && (
//             <button
//               type="button"
//               onClick={handlePrevious}
//               className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Previous
//             </button>
//           )}
//           {showNext && (
//             <button
//               type="button"
//               onClick={handleNext}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Next
//             </button>
//           )}
//           {!showNext && (
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//         {errors[currentForm] && (
//           <p className="text-red-500 mt-2">{errors[currentForm]}</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ResumeForm;



//important code.
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/auth"; // Import getToken function from auth.js
import PersonalInfoForm from "../ResumeForms/PersonalInfoForm";
import EducationForm from "../ResumeForms/EducationForm";
import ExperienceForm from "../ResumeForms/ExperienceForm";
import SkillForm from "../ResumeForms/SkillForm";
import CertificateForm from "../ResumeForms/CertificateForm";
import ReferenceForm from "../ResumeForms/ReferenceForm";
import LanguageForm from "../ResumeForms/LanguageForm";

const ResumeForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    educations: [],
    experiences: [],
    skills: [],
    languages: [],
    certifications: [],
    references: [],
  });

  const [currentForm, setCurrentForm] = useState("addTitleSummary");
  const [showPrevious, setShowPrevious] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = getToken(); // Retrieve the token using getToken function
      if (!token) {
        // Handle case where token is not available
        console.error("Token not found");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Submit the final form data
      await axios.post(
        "http://localhost:9900/api/resumes/new",
        formData,
        config
      );

      // Navigate to the user's dashboard page after successfully submitting the resume
      navigate("/dashboard");
      // Optionally, you can redirect the user to a success page or show a success message
      console.log("Resume submitted successfully!");
    } catch (error) {
      console.error("Error creating resume:", error);
      console.log("Error details:", error.response);

      // Optionally, you can show an error message to the user
    }
  };

  const handleFormChange = (fieldName, fieldData) => {
    setFormData({ ...formData, [fieldName]: fieldData });
  };

  // Function to handle moving to the next form section
  const handleNext = () => {
    const currentFormData = formData[currentForm] || {}; // Ensure currentFormData is initialized as an empty object if it's undefined
    console.log("Current Form Data:", currentFormData);
    const requiredFields = Object.entries(currentFormData).filter(
      ([key, value]) => value === ""
    );
    console.log("Required Fields:", requiredFields);
    if (requiredFields.length > 0) {
      setErrors({
        ...errors,
        [currentForm]: "Please fill in all required fields.",
      });
      return;
    }

    setErrors({});

    console.log("Current Form:", currentForm);
    console.log("Form Data:", formData);

    // Move to the next form section
    switch (currentForm) {
      case "addTitleSummary":
        setCurrentForm("addPersonalInfo");
        break;
      case "addPersonalInfo":
        setCurrentForm("educations");
        setShowPrevious(true);
        break;
      case "educations":
        setCurrentForm("experiences");
        break;
      case "experiences":
        setCurrentForm("skills");
        break;
      case "skills":
        setCurrentForm("languages");
        break;
      case "languages":
        setCurrentForm("certifications");
        break;
      case "certifications":
        setCurrentForm("references");
        setShowNext(false); // Hide next button on last form section
        break;
      default:
        break;
    }
  };

  // Function to handle moving to the previous form section
  const handlePrevious = () => {
    // Move to the previous form section
    switch (currentForm) {
      case "addPersonalInfo":
        setCurrentForm("addTitleSummary");
        break;
      case "educations":
        setCurrentForm("addPersonalInfo");
        setShowPrevious(false); // Hide previous button on first form section
        break;
      case "experiences":
        setCurrentForm("educations");
        break;
      case "skills":
        setCurrentForm("experiences");
        break;
      case "languages":
        setCurrentForm("skills");
        break;
      case "certifications":
        setCurrentForm("languages");
        break;
      case "references":
        setCurrentForm("certifications");
        setShowNext(true); // Show next button on previous form section
        break;
      default:
        break;
    }
  };

  const renderForm = () => {
    switch (currentForm) {
      case "addTitleSummary":
        return (
          <div className="max-w-lg mx-auto mt-8 p-4 ">
            <h2 className="text-2xl font-bold mb-4">Add Title and Summary</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={formData.title}
                onChange={(e) => handleFormChange("title", e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Summary
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.summary}
                onChange={(e) => handleFormChange("summary", e.target.value)}
              />
            </div>
          </div>
        );
      case "addPersonalInfo":
        return (
          <PersonalInfoForm
            addPersonalInfo={(data) => handleFormChange("personalInfo", data)} // Pass a function to update personalInfo in the formData
            handleChange={handleFormChange}
            handleNext={handleNext} // Pass the handleNext function as a prop
          />
        );
      case "educations":
        return (
          <EducationForm
            addEducation={(data) =>
              handleFormChange("educations", [...formData.educations, data])
            }
            handleChange={handleFormChange}
            handleNext={handleNext}
          />
        );
      case "experiences":
        return (
          <ExperienceForm
            addExperience={(data) =>
              handleFormChange("experiences", [...formData.experiences, data])
            }
            handleChange={handleFormChange}
            handleNext={handleNext}
          />
        );
      case "skills":
        return (
          <SkillForm
            addSkill={(data) =>
              handleFormChange("skills", [...formData.skills, data])
            }
            handleChange={handleFormChange}
            handleNext={handleNext}
          />
        );
      case "languages":
        return (
          <LanguageForm
            addLanguage={(data) =>
              handleFormChange("languages", [...formData.languages, data])
            }
            handleChange={handleFormChange}
            handleNext={handleNext}
          />
        );
      case "certifications":
        return (
          <CertificateForm
            addCertification={(data) =>
              handleFormChange("certifications", [
                ...formData.certifications,
                data,
              ])
            }
            handleChange={handleFormChange}
            handleNext={handleNext}
          />
        );
      case "references":
        return (
          <ReferenceForm
            addReference={(data) =>
              handleFormChange("references", [...formData.references, data])
            }
            handleChange={handleFormChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-100">
        Create Your Personalize Resume
      </h2>
      <form onSubmit={handleSubmit}>
        {renderForm()}
        <div className="flex justify-between mt-4">
          {showPrevious && (
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Previous
            </button>
          )}
          {showNext && (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          )}
          {!showNext && (
            <button
              type="submit"
              className="bg-purple-800 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          )}
        </div>
        {errors[currentForm] && (
          <p className="text-red-500 mt-2">{errors[currentForm]}</p>
        )}
      </form>
    </div>
  );
};

export default ResumeForm;





//modified
// import React, { useState, useEffect } from "react";
// import PersonalInfoForm from "../ResumeForms/PersonalInfoForm";
// import EducationForm from "../ResumeForms/EducationForm";
// import ExperienceForm from "../ResumeForms/ExperienceForm";
// import SkillForm from "../ResumeForms/SkillForm";
// import CertificateForm from "../ResumeForms/CertificateForm";
// import ReferenceForm from "../ResumeForms/ReferenceForm";
// import LanguageForm from "../ResumeForms/LanguageForm";

// const ResumeForm = ({ initialData, onSubmit }) => {
//   const [formData, setFormData] = useState(initialData || getDefaultFormData());
//   const [currentForm, setCurrentForm] = useState("addTitleSummary");
//   const [showPrevious, setShowPrevious] = useState(false);
//   const [showNext, setShowNext] = useState(true);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (initialData) {
//       setFormData(initialData);
//     }
//   }, [initialData]);

//   function getDefaultFormData() {
//     return {
//       title: "",
//       summary: "",
//       personalInfo: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         address: "",
//         city: "",
//         state: "",
//         zip: "",
//         country: "",
//       },
//       educations: [],
//       experiences: [],
//       skills: [],
//       languages: [],
//       certifications: [],
//       references: [],
//     };
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (typeof onSubmit === 'function') {
//         const response = await onSubmit(formData);
//         if (response && response.data) {
//           console.log('Resume created/updated successfully:', response.data);
//         } else {
//           console.error('Unexpected response format:', response);
//         }
//       } else {
//         console.error('onSubmit is not a function');
//       }
//     } catch (error) {
//       console.error('Error creating/updating resume:', error);
//       if (error.response && error.response.data) {
//         setErrors(error.response.data);
//       } else {
//         console.error('Unexpected error format:', error);
//       }
//     }
//   };

//   const handleFormChange = (fieldName, fieldData) => {
//     setFormData({ ...formData, [fieldName]: fieldData });
//   };
//     const handleNext = () => {
//     switch (currentForm) {
//       case "addTitleSummary":
//         setCurrentForm("addPersonalInfo");
//         setShowPrevious(true);
//         break;
//       case "addPersonalInfo":
//         setCurrentForm("educations");
//         break;
//       case "educations":
//         setCurrentForm("experiences");
//         break;
//       case "experiences":
//         setCurrentForm("skills");
//         break;
//       case "skills":
//         setCurrentForm("languages");
//         break;
//       case "languages":
//         setCurrentForm("certifications");
//         break;
//       case "certifications":
//         setCurrentForm("references");
//         setShowNext(false);
//         break;
//       default:
//         break;
//     }
//   };

//   const handlePrevious = () => {
//     switch (currentForm) {
//       case "addPersonalInfo":
//         setCurrentForm("addTitleSummary");
//         setShowPrevious(false);
//         break;
//       case "educations":
//         setCurrentForm("addPersonalInfo");
//         break;
//       case "experiences":
//         setCurrentForm("educations");
//         break;
//       case "skills":
//         setCurrentForm("experiences");
//         break;
//       case "languages":
//         setCurrentForm("skills");
//         break;
//       case "certifications":
//         setCurrentForm("languages");
//         break;
//       case "references":
//         setCurrentForm("certifications");
//         setShowNext(true);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleAddPersonalInfo = (data) => {
//     setFormData({ ...formData, personalInfo: data });
//     handleNext();
//   };

//     const renderForm = () => {
//     switch (currentForm) {
//       case "addTitleSummary":
//         return (
//           <div className="max-w-lg mx-auto mt-8 p-4 ">
//             <h2 className="text-2xl font-bold mb-4">Add Title and Summary</h2>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Title
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 value={formData.title}
//                 onChange={(e) => handleFormChange("title", e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Summary
//               </label>
//               <textarea
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 value={formData.summary}
//                 onChange={(e) => handleFormChange("summary", e.target.value)}
//               />
//             </div>
//           </div>
//         );

//       case "addPersonalInfo":
//         return (
//           <PersonalInfoForm
//             initialData={formData.personalInfo}
//             addPersonalInfo={handleAddPersonalInfo}
//             handleChange={(data) =>
//               handleFormChange("personalInfo", data)
//             }
//             handleNext={handleNext}
//           />
//         );
//       case "educations":
//         return (
//           <EducationForm
//             initialData={formData.educations}
//             addEducation={(data) =>
//               handleFormChange("educations", [...formData.educations, data])
//             }
//             handleNext={handleNext}
//             handlePrevious={handlePrevious}
//           />
//         );
//       case "experiences":
//         return (
//           <ExperienceForm
//             initialData={formData.experiences}
//             addExperience={(data) =>
//               handleFormChange("experiences", [...formData.experiences, data])
//             }
//             handleNext={handleNext}
//             handlePrevious={handlePrevious}
//           />
//         );
//       case "skills":
//         return (
//           <SkillForm
//             initialData={formData.skills}
//             addSkill={(data) =>
//               handleFormChange("skills", [...formData.skills, data])
//             }
//             handleNext={handleNext}
//             handlePrevious={handlePrevious}
//           />
//         );
//       case "languages":
//         return (
//           <LanguageForm
//             initialData={formData.languages}
//             addLanguage={(data) =>
//               handleFormChange("languages", [...formData.languages, data])
//             }
//             handleNext={handleNext}
//             handlePrevious={handlePrevious}
//           />
//         );
//       case "certifications":
//         return (
//           <CertificateForm
//             initialData={formData.certifications}
//             addCertification={(data) =>
//               handleFormChange("certifications", [
//                 ...formData.certifications,
//                 data,
//               ])
//             }
//             handleNext={handleNext}
//             handlePrevious={handlePrevious}
//           />
//         );
//       case "references":
//         return (
//           <ReferenceForm
//             initialData={formData.references}
//             addReference={(data) =>
//               handleFormChange("references", [...formData.references, data])
//             }
//             handlePrevious={handlePrevious}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4 text-purple-600">
//         Create Your Personalized Resume
//       </h2>

//       <form onSubmit={handleSubmit}>
//         {renderForm()}
//         <div className="flex justify-between mt-4">
//           {showPrevious && (
//             <button
//               type="button"
//               onClick={handlePrevious}
//               className="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Previous
//             </button>
//           )}
//           {showNext && (
//             <button
//               type="button"
//               onClick={handleNext}
//               className="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Next
//             </button>
//           )}
//           {!showNext && (
//             <button
//               type="submit"
//               className="bg-purple-800 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//         {errors[currentForm] && (
//           <p className="text-red-500 mt-2">{errors[currentForm]}</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ResumeForm;

