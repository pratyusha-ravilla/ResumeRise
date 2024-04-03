
// //main code
// import React, { useEffect, useState } from "react";
// import {
//   Typography,
//   CircularProgress,
//   Container,
//   // Button,
//   Grid,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Template1 from "../../templates/Template1";
// import Template2 from "../../templates/Template2";
// import { getAllResumes } from "../../api/resumeApi";
// import { getToken } from "../../utils/auth";
// import { saveAs } from 'file-saver';
// import { Document, Page, Text, pdf} from '@react-pdf/renderer';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(3),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//     textAlign: "center",
//   },
//   loading: {
//     marginTop: theme.spacing(2),
//   },
//   downloadButton: {
//     marginTop: theme.spacing(3),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// const ResumeTemplate = () => {
//   const classes = useStyles();
//   const [resumeData, setResumeData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedResumeIndex, setSelectedResumeIndex] = useState(0);
//   const [resumes, setResumes] = useState([]);
//   // const [downloadFormat, setDownloadFormat] = useState("pdf");

//   useEffect(() => {
//     const fetchResumeData = async () => {
//       try {
//         const resumesResponse = await getAllResumes();
//         if (resumesResponse.data.length > 0) {
//           setResumes(resumesResponse.data);
//           setResumeData(resumesResponse.data[0]);
//           setLoading(false);
//         } else {
//           console.log("No resumes found");
//         }
//       } catch (error) {
//         console.error("Error fetching resume data:", error);
//       }
//     };

//     fetchResumeData();
//   }, []);

//   // const handleDownload = async () => {
//   //   try {
//   //     const authToken = getToken();
//   //     const pdfBlob = await generatePdf(); // Generate PDF in memory
//   //     saveAs(pdfBlob, 'resume.pdf'); // Prompt user to download
//   //   } catch (error) {
//   //     console.error("Error downloading resume:", error);
//   //     alert("Error downloading resume: " + error.message);
//   //   }
//   // };
  
 
//   const handleChange = (event) => {
//     setSelectedResumeIndex(event.target.value);
//     setResumeData(resumes[event.target.value]);
//   };

//   // const handleFormatChange = (event) => {
//   //   setDownloadFormat(event.target.value);
//   // };

//   return (
//     <Container className={classes.container}>
//       <Typography
//         variant="h4"
//         style={{ color: "#e3f2fd" }}
//         className={classes.title}
//       >
//         Resume Rise
//       </Typography>
//       {loading ? (
//         <CircularProgress className={classes.loading} />
//       ) : resumeData ? (
//         <>
//           <FormControl className={classes.formControl}>
//             <InputLabel style={{ color: "#e3f2fd" }} id="resume-select-label">
//               Select Resume
//             </InputLabel>
//             <Select
//               style={{ color: "#e3f2fd" }}
//               labelId="resume-select-label"
//               id="resume-select"
//               value={selectedResumeIndex}
//               onChange={handleChange}
//             >
//               {resumes.map((resume, index) => (
//                 <MenuItem key={resume._id} value={index}>
//                   {resume.title}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
          
//           <Grid container spacing={9}>
//             <Grid item xs={6}>
//               <Template1 resumeData={resumeData} />
//               {/* <Button
//                 variant="contained"
//                 color="primary"
//                 className={classes.downloadButton}
//                 onClick={handleDownload}
//               >
//                 Download
//               </Button> */}
//             </Grid>
//             <Grid item xs={6}>
//               <Template2 resumeData={resumeData} />
//               {/* <Button
//                 variant="contained"
//                 color="primary"
//                 className={classes.downloadButton}
//                 onClick={handleDownload}
//               >
//                 Download
//               </Button> */}
//             </Grid>
//           </Grid>
//         </>
//       ) : (
//         <Typography variant="body1">No resume data available</Typography>
//       )}
//     </Container>
//   );
// };

// export default ResumeTemplate;







import React, { useEffect, useState } from "react";
import {
  Typography,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Template1 from "../../templates/Template1";
import Template2 from "../../templates/Template2";
import { getAllResumes } from "../../api/resumeApi";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
    color:'pink'
  },
  loading: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ResumeTemplate = () => {
  const classes = useStyles();
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedResumeIndex, setSelectedResumeIndex] = useState(0);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const resumesResponse = await getAllResumes();
        if (resumesResponse.data.length > 0) {
          setResumes(resumesResponse.data);
          setResumeData(resumesResponse.data[0]);
          setLoading(false);
        } else {
          console.log("No resumes found");
        }
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    fetchResumeData();
  }, []); // Ensure the dependency array is empty to run only once on mount

  const handleChange = (event) => {
    setSelectedResumeIndex(event.target.value);
    setResumeData(resumes[event.target.value]);
  };

  return (
    <Container className={classes.container}>
    
      <Typography variant="h4" className={classes.title}>
       Welcome to Resume Rise
      </Typography>
      {loading ? (
        <CircularProgress className={classes.loading} />
      ) : resumeData ? (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="resume-select-label">Select Resume</InputLabel>
            <Select
              labelId="resume-select-label"
              id="resume-select"
              value={selectedResumeIndex}
              onChange={handleChange}
            >
              {resumes.map((resume, index) => (
                <MenuItem key={resume._id} value={index}>
                  {resume.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Template1 resumeData={resumeData} />
            </Grid>
            <Grid item xs={6}>
              <Template2 resumeData={resumeData} />
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography variant="body1">No resume data available</Typography>
      )}
    </Container>
  );
};

export default ResumeTemplate;





