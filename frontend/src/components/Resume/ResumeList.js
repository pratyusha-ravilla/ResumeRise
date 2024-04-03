// //main code
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllResumes, deleteResume } from '../../api/resumeApi';

// const ResumeList = () => {
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const response = await getAllResumes();
//         setResumes(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching resumes');
//         setLoading(false);
//       }
//     };

//     fetchResumes();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteResume(id);
//       setResumes(resumes.filter(resume => resume._id !== id));
//     } catch (error) {
//       setError('Error deleting resume');
//     }
//   };

//   if (loading) {
//     return <p className="text-center mt-4">Loading resumes...</p>;
//   }

//   if (error) {
//     return <p className="text-center mt-4">{error}</p>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-3xl font-bold text-center mb-8">Resume List</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {resumes.map(resume => (
//           <div key={resume._id} className="bg-gray-100 p-4 rounded-md shadow-md">
//             <Link to={`/resumes/${resume._id}`} className="block text-blue-500 hover:underline">
//               <p className="text-xl font-semibold mb-2">{resume.title}</p>
//             </Link>
//             <p className="text-gray-600">{resume.summary}</p>
//             <div className="flex justify-between mt-4">
//               <Link to={`/resumes/${resume._id}/edit`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit</Link>
//               <button onClick={() => handleDelete(resume._id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResumeList;

//with styling
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllResumes, deleteResume } from '../../api/resumeApi';
// import { Container, Typography, Grid, Card, CardContent, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(8),
//   },
//   title: {
//     marginBottom: theme.spacing(4),
//     textAlign: 'center',
//   },
//   resumeCard: {
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(2),
//     borderRadius: theme.spacing(2),
//     boxShadow: theme.shadows[2],
//   },
//   actionButtons: {
//     marginTop: theme.spacing(2),
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
// }));

// const ResumeList = () => {
//   const classes = useStyles();
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const response = await getAllResumes();
//         setResumes(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching resumes');
//         setLoading(false);
//       }
//     };

//     fetchResumes();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteResume(id);
//       setResumes(resumes.filter(resume => resume._id !== id));
//     } catch (error) {
//       setError('Error deleting resume');
//     }
//   };

//   if (loading) {
//     return <p className="text-center mt-4">Loading resumes...</p>;
//   }

//   if (error) {
//     return <p className="text-center mt-4">{error}</p>;
//   }

//   return (
//     <Container className={classes.root}>
//       <Typography variant="h3" className={classes.title}>Resume List</Typography>
//       <Grid container spacing={4}>
//         {resumes.map(resume => (
//           <Grid key={resume._id} item xs={12} sm={6} md={4}>
//             <Card className={classes.resumeCard}>
//               <CardContent>
//                 <Link to={`/resumes/${resume._id}`} className="block text-blue-500 hover:underline">
//                   <Typography variant="h5" component="h2" gutterBottom>{resume.title}</Typography>
//                 </Link>
//                 <Typography variant="body2" color="textSecondary" component="p">{resume.summary}</Typography>
//                 <div className={classes.actionButtons}>
//                   <Link to={`/resumes/${resume._id}/edit`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit</Link>
//                   <Button onClick={() => handleDelete(resume._id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default ResumeList;

//main code
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getAllResumes, deleteResume } from "../../api/resumeApi";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { MdDescription } from "react-icons/md"; // Importing Material Design icons

// const ResumeList = () => {
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const response = await getAllResumes();
//         setResumes(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching resumes");
//         setLoading(false);
//       }
//     };

//     fetchResumes();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteResume(id);
//       setResumes(resumes.filter((resume) => resume._id !== id));
//     } catch (error) {
//       setError("Error deleting resume");
//     }
//   };

//   if (loading) {
//     return <p className="text-center mt-4">Loading resumes...</p>;
//   }

//   if (error) {
//     return <p className="text-center mt-4">{error}</p>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-4xl font-bold text-center mb-9 text-gray-200 ">
//         My Resumes List
//       </h2>
//       <div>
//         {resumes.map((resume) => (
//           <div
//             key={resume._id}
//             className="bg-gray-100 p-5 rounded-xl shadow-xl mb-6"
//           >
//             <div className="flex items-center justify-between mb-3">
//               <Link
//                 to={`/resumes/${resume._id}/edit`}
//                 className="block text-purple-700 flex items-center"
//               >
//                 <MdDescription className="mr-2 text-2xl" />
//                 <p className="text-2xl font-semibold">{resume.title}</p>
//               </Link>
//               <div>
//                 <Link
//                   to={`/resumes/${resume._id}/edit`}
//                   className="text-blue-500 hover:text-blue-700 mr-2"
//                 >
//                   <FaEdit className="inline-block mr-2 text-xl text-purple-700 " />
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(resume._id)}
//                   className="text-red-500 hover:text-red-600"
//                 >
//                   <FaTrashAlt className="inline-block mr-2 text-xl text-indigo-600" />
//                 </button>
//               </div>
//             </div>
//             <p className="text-gray-700">{resume.summary}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResumeList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getAllResumes, deleteResume } from "../../api/resumeApi";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { MdDescription } from "react-icons/md";

// const ResumeList = () => {
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const response = await getAllResumes();
//         setResumes(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching resumes");
//         setLoading(false);
//       }
//     };

//     fetchResumes();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteResume(id);
//       const updatedResumes = await getAllResumes(); // Fetch updated list of resumes from the server
//       setResumes(updatedResumes.data); // Update the state with the fresh data
//     } catch (error) {
//       setError("Error deleting resume");
//     }
//   };
//   if (loading) {
//     return <p className="text-center mt-4">Loading resumes...</p>;
//   }

//   if (error) {
//     return <p className="text-center mt-4">{error}</p>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-4xl font-bold text-center mb-9 text-gray-200 ">
//         My Resumes List
//       </h2>
//       <div>
//         {resumes.map((resume) => (
//           <div
//             key={resume._id}
//             className="bg-gray-100 p-5 rounded-xl shadow-xl mb-6"
//           >
//             <div className="flex items-center justify-between mb-3">
//               <Link
//                 to={`/resumes/${resume._id}/edit`}
//                 className="block text-purple-700 flex items-center"
//               >
//                 <MdDescription className="mr-2 text-2xl" />
//                 <p className="text-2xl font-semibold">{resume.title}</p>
//               </Link>
//               <div>
//                 <Link
//                   to={`/resumes/${resume._id}/edit`}
//                   className="text-blue-500 hover:text-blue-700 mr-2"
//                 >
//                   <FaEdit className="inline-block mr-2 text-xl text-purple-700 " />
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(resume._id)}
//                   className="text-red-500 hover:text-red-600"
//                 >
//                   <FaTrashAlt className="inline-block mr-2 text-xl text-indigo-600" />
//                 </button>
//               </div>
//             </div>
//             <p className="text-gray-700">{resume.summary}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResumeList;

//delete function
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getAllResumes, deleteResume } from "../../api/resumeApi";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { MdDescription } from "react-icons/md";

// const ResumeList = () => {
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const response = await getAllResumes();
//         setResumes(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching resumes");
//         setLoading(false);
//       }
//     };

//     fetchResumes();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteResume(id);
//       const updatedResumes = await getAllResumes();
//       setResumes(updatedResumes.data);
//       setSuccessMessage("Resume deleted successfully");
//     } catch (error) {
//       setError("Error deleting resume");
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-4xl font-bold text-center mb-9 text-gray-200 ">
//         My Resumes List
//       </h2>
//       {loading && <p className="text-center mt-4">Loading resumes...</p>}
//       {error && <p className="text-center mt-4 text-red-600">{error}</p>}
//       {successMessage && (
//         <p className="text-center mt-4 text-green-600">{successMessage}</p>
//       )}
//       <div>
//         {resumes.map((resume) => (
//           <div
//             key={resume._id}
//             className="bg-gray-100 p-5 rounded-xl shadow-xl mb-6"
//           >
//             <div className="flex items-center justify-between mb-3">
//               <Link
//                 to={`/resumes/${resume._id}/edit`}
//                 className="block text-purple-700 flex items-center"
//               >
//                 <MdDescription className="mr-2 text-2xl" />
//                 <p className="text-2xl font-semibold">{resume.title}</p>
//               </Link>
//               <div>
//                 <Link
//                   to={`/resumes/${resume._id}/edit`}
//                   className="text-blue-500 hover:text-blue-700 mr-2"
//                 >
//                   <FaEdit className="inline-block mr-2 text-xl text-purple-700 " />
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(resume._id)}
//                   className="text-red-500 hover:text-red-600"
//                 >
//                   <FaTrashAlt className="inline-block mr-2 text-xl text-indigo-600" />
//                 </button>
//               </div>
//             </div>
//             <p className="text-gray-700">{resume.summary}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResumeList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getAllResumes, deleteResume } from "../../api/resumeApi";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { MdDescription } from "react-icons/md";

// const ResumeList = () => {
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const response = await getAllResumes();
//         setResumes(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching resumes");
//         setLoading(false);
//       }
//     };

//     fetchResumes();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteResume(id);
//       const updatedResumes = await getAllResumes();
//       setResumes(updatedResumes.data);
//       setSuccessMessage("Resume deleted successfully");
//     } catch (error) {
//       setError("Error deleting resume");
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-4xl font-bold text-center mb-9 text-gray-200 ">
//         My Resumes List
//       </h2>
//       {loading && <p className="text-center mt-4">Loading resumes...</p>}
//       {error && <p className="text-center mt-4 text-red-600">{error}</p>}
//       {successMessage && (
//         <p className="text-center mt-4 text-green-600">{successMessage}</p>
//       )}
//       <div>
//         {resumes.map((resume) => (
//           <div
//             key={resume._id}
//             className="bg-gray-100 p-5 rounded-xl shadow-xl mb-6"
//           >
//             <div className="flex items-center justify-between mb-3">
//               <Link
//                 to={`/resumes/${resume._id}/edit`}
//                 className="block text-purple-700 flex items-center"
//               >
//                 <MdDescription className="mr-2 text-2xl" />
//                 <p className="text-2xl font-semibold">{resume.title}</p>
//               </Link>
//               <div>
//                 <Link
//                   to={`/resumes/${resume._id}/edit`}
//                   className="text-blue-500 hover:text-blue-700 mr-2"
//                 >
//                   <FaEdit className="inline-block mr-2 text-xl text-purple-700 " />
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(resume._id)}
//                   className="text-red-500 hover:text-red-600"
//                 >
//                   <FaTrashAlt className="inline-block mr-2 text-xl text-indigo-600" />
//                 </button>
//               </div>
//             </div>
//             <p className="text-gray-700">{resume.summary}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResumeList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllResumes, deleteResume } from "../../api/resumeApi";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await getAllResumes();
        setResumes(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching resumes");
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteResume(id);
      const updatedResumes = await getAllResumes();
      setResumes(updatedResumes.data);
      setSuccessMessage("Resume deleted successfully");
    } catch (error) {
      setError("Error deleting resume");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold text-center mb-9 text-gray-200 ">
        My Resumes List
      </h2>
      {loading && <p className="text-center mt-4">Loading resumes...</p>}
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}
      {successMessage && (
        <p className="text-center mt-4 text-green-600">{successMessage}</p>
      )}
      {resumes.length === 0 ? (
        <p className="text-center mt-4 text-gray-800 text-2xl">
          You don't have any existing resumes.{" "}
          <Link to="/resumes/create" className="text-blue-900 text-3xl ">
            Create a new resume
          </Link>{" "}
          now!
        </p>
      ) : (
        <div>
          {resumes.map((resume) => (
            <div
              key={resume._id}
              className="bg-gray-100 p-5 rounded-xl shadow-xl mb-6"
            >
              <div className="flex items-center justify-between mb-3">
                <Link
                  to={`/resumes/${resume._id}/edit`}
                  className="block text-purple-700 flex items-center"
                >
                  <MdDescription className="mr-2 text-2xl" />
                  <p className="text-2xl font-semibold">{resume.title}</p>
                </Link>
                <div>
                  <Link
                    to={`/resumes/${resume._id}/edit`}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <FaEdit className="inline-block mr-2 text-xl text-purple-700 " />
                  </Link>
                  <button
                    onClick={() => handleDelete(resume._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FaTrashAlt className="inline-block mr-2 text-xl text-indigo-600" />
                  </button>
                </div>
              </div>
              <p className="text-gray-700">{resume.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeList;
