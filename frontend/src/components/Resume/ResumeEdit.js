//src/components/Resume/ResumeEdit.js

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom"; // Import useParams hook
// import ResumeForm from "../../components/Resume/ResumeForm";
// import { getToken } from "../../utils/auth";

// const ResumeEdit = () => {
//   const { id: resumeId } = useParams(); // Extract resumeId from URL params
//   const navigate = useNavigate();
//   const [resumeData, setResumeData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResumeData = async () => {
//       try {
//         const token = getToken();
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const response = await axios.get(
//           `http://localhost:9900/api/resumes/${resumeId}`,
//           config
//         );
//         console.log("Fetched resume data:", response.data); // Log the fetched data
//         setResumeData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching resume data:", error);
//         setLoading(false);
//       }
//     };

//     fetchResumeData();
//   }, [resumeId]);

//   const handleUpdateResume = async (updatedResumeData) => {
//     try {
//       const token = getToken();
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       await axios.put(
//         `http://localhost:9900/api/resumes/${resumeId}`,
//         updatedResumeData,
//         config
//       );
//       // Resume updated successfully, navigate back to dashboard
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error updating resume:", error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Resume</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ResumeForm
//           initialData={resumeData} // Pass initial data to pre-fill the form fields
//           onSubmit={handleUpdateResume}
//         />
//       )}
//     </div>
//   );
// };

// export default ResumeEdit;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import ResumeForm from "../../components/Resume/ResumeForm";
// import { getToken } from "../../utils/auth";

// const ResumeEdit = () => {
//   const { id: resumeId } = useParams();
//   const navigate = useNavigate();
//   const [resumeData, setResumeData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResumeData = async () => {
//       try {
//         const token = getToken();
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const response = await axios.get(
//           `http://localhost:9900/api/resumes/${resumeId}`,
//           config
//         );
//         console.log("Fetched resume data:", response.data);
//         setResumeData(response.data.data); // Set the fetched resume data
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching resume data:", error);
//         setLoading(false);
//       }
//     };

//     fetchResumeData();
//   }, [resumeId]);

//   const handleUpdateResume = async (updatedResumeData) => {
//     try {
//       const token = getToken();
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       await axios.put(
//         `http://localhost:9900/api/resumes/${resumeId}`,
//         updatedResumeData,
//         config
//       );
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error updating resume:", error);
//     }
//   };

//   return (
//     <div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ResumeForm initialData={resumeData} onSubmit={handleUpdateResume} />
//       )}
//     </div>
//   );
// };

// export default ResumeEdit;


//main
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import ResumeForm from "../../components/Resume/ResumeForm";
// import { getToken } from "../../utils/auth";

// const ResumeEdit = () => {
//   const { id: resumeId } = useParams();
//   const navigate = useNavigate();
//   const [resumeData, setResumeData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResumeData = async () => {
//       try {
//         const token = getToken();
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const response = await axios.get(
//           `http://localhost:9900/api/resumes/${resumeId}`,
//           config
//         );
//         console.log("Fetched resume data:", response.data);
//         setResumeData(response.data.data); // Set the fetched resume data
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching resume data:", error);
//         setLoading(false);
//       }
//     };

//     fetchResumeData();
//   }, [resumeId]);

//   const handleUpdateResume = async (updatedResumeData) => {
//     try {
//       const token = getToken();
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       await axios.put(
//         `http://localhost:9900/api/resumes/${resumeId}`,
//         updatedResumeData,
//         config
//       );
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error updating resume:", error);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-indigo-500 to-purple-400 min-h-screen py-8">
//       <div className="max-w-4xl mx-auto px-4">
//         {loading ? (
//           <p className="text-gray-600">Loading...</p>
//         ) : (
//           <ResumeForm initialData={resumeData} onSubmit={handleUpdateResume} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResumeEdit;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import ResumeForm from "../../components/Resume/ResumeForm";
// import { getToken } from "../../utils/auth";

// const ResumeEdit = () => {
//   const { id: resumeId } = useParams();
//   const navigate = useNavigate();
//   const [resumeData, setResumeData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResumeData = async () => {
//       try {
//         const token = getToken();
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const response = await axios.get(
//           `http://localhost:9900/api/resumes/${resumeId}`,
//           config
//         );
//         console.log("Fetched resume data:", response.data);
//         setResumeData(response.data); // Set the fetched resume data directly
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching resume data:", error);
//         setLoading(false);
//       }
//     };

//     fetchResumeData();
//   }, [resumeId]);

//   const handleUpdateResume = async (updatedResumeData) => {
//     try {
//       const token = getToken();
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
  
//       // Log updated resume data to verify its correctness
//       console.log("Updated resume data:", updatedResumeData);
  
//       const response = await axios.put(
//         `http://localhost:9900/api/resumes/${resumeId}`,
//         updatedResumeData,
//         config
//       );
  
//       // Log response from the API
//       console.log("Response from API:", response.data);
  
//       // Redirect to dashboard after successful update
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error updating resume:", error);
//     }
//   };
  

//   return (
//     <div className="bg-gradient-to-r from-indigo-500 to-purple-400 min-h-screen py-8">
//       <div className="max-w-4xl mx-auto px-4">
//         {loading ? (
//           <p className="text-gray-600">Loading...</p>
//         ) : (
//           <ResumeForm initialData={resumeData} onSubmit={handleUpdateResume} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResumeEdit;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ResumeForm from "../../components/Resume/ResumeForm";
import { getToken } from "../../utils/auth";

const ResumeEdit = () => {
  const { id: resumeId } = useParams();
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchResumeData = async () => {
      try {
        const token = getToken();
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `http://localhost:9900/api/resumes/${resumeId}`,
          config
        );
        console.log("Fetched resume data:", response.data);
        setResumeData(response.data.data); // Set the fetched resume data directly
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resume data:", error);
        setLoading(false);
      }
    };
  
    fetchResumeData();
  }, [resumeId]);
  

  const handleUpdateResume = async (updatedResumeData) => {
    try {
      const token = getToken();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Log updated resume data to verify its correctness
      console.log("Updated resume data:", updatedResumeData);

      const response = await axios.put(
        `http://localhost:9900/api/resumes/${resumeId}`,
        updatedResumeData,
        config
      );

      // Log response from the API
      console.log("Response from API:", response.data);

      // Redirect to dashboard after successful update
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating resume:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-400 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <ResumeForm initialData={resumeData} onSubmit={handleUpdateResume} />
        )}
      </div>
    </div>
  );
};

export default ResumeEdit;
