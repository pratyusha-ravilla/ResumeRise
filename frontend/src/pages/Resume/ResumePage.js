// import React, { useEffect, useState } from 'react';
// import Template1 from '../../templates/Template1';
// import { getAllResumes } from '../../api/resumeApi'; // Import the getAllResumes function

// const ResumePage = () => {
//   const [resumeData, setResumeData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResumeData = async () => {
//       try {
//         const resumes = await getAllResumes(); // Fetch all resumes
//         console.log('Resumes:', resumes); // Log the response received from the API
//         if (resumes.length > 0) {
//           // Assuming you want to display the first resume
//           setResumeData(resumes[0]); // Set the resume data to the first resume
//         }
//         setLoading(false); // Set loading state to false after fetching data
//       } catch (error) {
//         console.error('Error fetching resume data:', error);
//         setLoading(false); // Set loading state to false if there's an error
//       }
//     };

//     fetchResumeData(); // Call the function to fetch resume data
//   }, []); // Run only once on component mount

//   return (
//     <div>
//       <h1>Resume Details</h1>
//       {loading ? (
//         <p>Loading...</p> // Display loading message while fetching data
//       ) : resumeData ? (
//         <Template1 resumeData={resumeData} /> // Pass resumeData to Template1 component
//       ) : (
//         <p>No resume data available</p> // Display message if no resume data is found
//       )}
//     </div>
//   );
// }

// export default ResumePage;

// import React, { useEffect, useState } from 'react';
// import Template1 from '../../templates/Template1';
// import { getAllResumes } from '../../api/resumeApi'; // Import the getAllResumes function

// const ResumePage = () => {
//   const [resumeData, setResumeData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResumeData = async () => {
//       try {
//         const response = await getAllResumes(); // Fetch all resumes
//         console.log('Resumes:', response.data); // Log the response received from the API
//         if (response.data && response.data.length > 0) {
//           setResumeData(response.data[0]); // Assuming you want to display the first resume
//         } else {
//           console.log('No resumes found');
//         }
//         setLoading(false); // Set loading state to false after fetching data
//       } catch (error) {
//         console.error('Error fetching resume data:', error);
//         setLoading(false); // Set loading state to false if there's an error
//       }
//     };

//     fetchResumeData(); // Call the function to fetch resume data
//   }, []); // Run only once on component mount

//   return (
//     <div>
//       <h1>Resume Details</h1>
//       {loading ? (
//         <p>Loading...</p> // Display loading message while fetching data
//       ) : resumeData ? (
//         <Template1 resumeData={resumeData} /> // Pass resumeData to Template1 component
//       ) : (
//         <p>No resume data available</p> // Display message if no resume data is found
//       )}
//     </div>
//   );
// }

// export default ResumePage;

// import React, { useEffect, useState } from 'react';
// import Template1 from '../../templates/Template1';
// import { getAllResumes } from '../../api/resumeApi'; // Import the getAllResumes function

// const ResumePage = () => {
//   const [resumeData, setResumeData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResumeData = async () => {
//       try {
//         const resumes = await getAllResumes(); // Fetch all resumes
//         console.log('Resumes:', resumes); // Log the response received from the API
//         if (resumes.data.length > 0) {
//           setResumeData(resumes.data[0]); // Assuming you want to display the first resume
//           setLoading(false);
//         } else {
//           console.log('No resumes found');
//         }
//         setLoading(false); // Set loading state to false after fetching data
//       } catch (error) {
//         console.error('Error fetching resume data:', error);
//         setLoading(false); // Set loading state to false if there's an error
//       }
//     };

//     fetchResumeData(); // Call the function to fetch resume data
//   }, []); // Run only once on component mount

//   return (
//     <div>
//       <h1 >
//         Resume Rise
//       </h1>
//       {loading ? (
//         <p>Loading...</p> // Display loading message while fetching data
//       ) : resumeData ? (
//         <Template1 resumeData={resumeData} /> // Pass resumeData to Template1 component
//       ) : (
//         <p>No resume data available</p> // Display message if no resume data is found
//       )}
//     </div>
//   );
// }

// export default ResumePage;

// import React, { useEffect, useState } from 'react';
// import { Typography, CircularProgress, Container } from '@material-ui/core'; // Import Material-UI components
// import { makeStyles } from '@material-ui/core/styles'; // Import makeStyles for custom styles
// import Template1 from '../../templates/Template1';
// import { getAllResumes } from '../../api/resumeApi'; // Import the getAllResumes function

// // Define custom styles using makeStyles
// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//     textAlign: 'center',
//   },
//   loading: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const ResumePage = () => {
//   const classes = useStyles(); // Access custom styles
//   const [resumeData, setResumeData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResumeData = async () => {
//       try {
//         const resumes = await getAllResumes(); // Fetch all resumes
//         console.log('Resumes:', resumes); // Log the response received from the API
//         if (resumes.data.length > 0) {
//           setResumeData(resumes.data[0]); // Assuming you want to display the first resume
//           setLoading(false);
//         } else {
//           console.log('No resumes found');
//         }
//       } catch (error) {
//         console.error('Error fetching resume data:', error);
//       }
//     };

//     fetchResumeData(); // Call the function to fetch resume data
//   }, []); // Run only once on component mount

//   return (
//     <Container className={classes.container}>
//       <Typography variant="h4" className={classes.title}>
//         Resume Rise
//       </Typography>
//       {loading ? (
//         <CircularProgress className={classes.loading} /> // Display loading spinner while fetching data
//       ) : resumeData ? (
//         <Template1 resumeData={resumeData} /> // Pass resumeData to Template1 component
//       ) : (
//         <Typography variant="body1">No resume data available</Typography> // Display message if no resume data is found
//       )}
//     </Container>
//   );
// }

// export default ResumePage;

// import React from "react";
// import ResumeTemplate from "../../components/Resume/ResumeTemplate";

// const ResumePage = () => {
//   return (
//     <>
//       <ResumeTemplate />
//     </>
//   );
// };

// export default ResumePage;

// import React from "react";
// import ResumeTemplate from "../../components/Resume/ResumeTemplate";

// const ResumePage = () => {
//   return (
//     <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen">
//       <div className="container mx-auto py-8">
//         <ResumeTemplate />
//       </div>
//     </div>
//   );
// };

// export default ResumePage;



import React from "react";
import ResumeTemplate from "../../components/Resume/ResumeTemplate";

const ResumePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen">
      <div className="container mx-auto py-8">
        <ResumeTemplate />
      </div>
    </div>
  );
};

export default ResumePage;
