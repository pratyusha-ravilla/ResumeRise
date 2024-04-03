// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Paper,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   ListItemIcon,
// } from "@material-ui/core";
// import {
//   AccountCircle,
//   Email,
//   Phone,
//   LocationOn,
//   School,
//   Work,
//   Star,
//   Language,
//   Badge,
//   People,
// } from "@mui/icons-material";

// const useStyles = makeStyles((theme) => ({
//   template1: {
//     padding: theme.spacing(2),
//     maxWidth: 600,
//     margin: "auto",
//     backgroundColor: "#c6e2ff",
//   },
//   header: {
//     marginBottom: theme.spacing(2),
//   },
//   personalInfo: {
//     marginBottom: theme.spacing(2),
//     backgroundColor: "#ffffff",
//     padding: theme.spacing(2),
//   },
//   education: {
//     marginBottom: theme.spacing(2),
//     backgroundColor: "#ffffff",
//     padding: theme.spacing(2),
//   },
//   experience: {
//     marginBottom: theme.spacing(2),
//     backgroundColor: "#ffffff",
//     padding: theme.spacing(2),
//   },
//   skills: {
//     marginBottom: theme.spacing(2),
//     backgroundColor: "#ffffff",
//     padding: theme.spacing(2),
//   },
//   languages: {
//     marginBottom: theme.spacing(2),
//     backgroundColor: "#ffffff",
//     padding: theme.spacing(2),
//   },
//   certifications: {
//     marginBottom: theme.spacing(2),
//     backgroundColor: "#ffffff",
//     padding: theme.spacing(2),
//   },
//   references: {
//     marginBottom: theme.spacing(2),
//     backgroundColor: "#ffffff",
//     padding: theme.spacing(2),
//   },
// }));

// const Template1 = ({ resumeData }) => {
//   const classes = useStyles();

//   if (!resumeData) {
//     return <p>No resume data provided</p>;
//   }

//   const {
//     title,
//     summary,
//     personalInfo,
//     educations,
//     experiences,
//     skills,
//     languages,
//     certifications,
//     references,
//   } = resumeData;

//   // Check if personalInfo exists and is not empty
//   if (!personalInfo || personalInfo.length === 0) {
//     return <p>No personal information provided</p>;
//   }

//   // Get the first item of the personalInfo array
//   const info = personalInfo[0];

//   return (
//     <Paper className={classes.template1}>
//       <div className={classes.header}>
//         <Typography variant="h4">{title}</Typography>
//         <Typography variant="body1">{summary}</Typography>
//       </div>
//       <Divider />
//       <div className={classes.personalInfo}>
//         <Typography variant="h5">Personal Information</Typography>
//         <List>
//           <ListItem>
//             <ListItemIcon>
//               <AccountCircle />
//             </ListItemIcon>
//             <ListItemText
//               primary={`${info.firstName} ${info.lastName}`}
//               secondary="Name"
//             />
//           </ListItem>
//           <ListItem>
//             <ListItemIcon>
//               <Email />
//             </ListItemIcon>
//             <ListItemText primary={info.email} secondary="Email" />
//           </ListItem>
//           <ListItem>
//             <ListItemIcon>
//               <Phone />
//             </ListItemIcon>
//             <ListItemText primary={info.phone} secondary="Phone" />
//           </ListItem>
//           <ListItem>
//             <ListItemIcon>
//               <LocationOn />
//             </ListItemIcon>
//             <ListItemText
//               primary={`${info.address}, ${info.city}, ${info.state}, ${info.zip}, ${info.country}`}
//               secondary="Address"
//             />
//           </ListItem>
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.education}>
//         <Typography variant="h5">Education</Typography>
//         <List>
//           {educations.map((education, index) => (
//             <ListItem key={index}>
//               <ListItemIcon>
//                 <School />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${education.degree} - ${education.institution}`}
//                 secondary={`${education.startDate || ""} - ${
//                   education.endDate || "Present"
//                 }`}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.experience}>
//         <Typography variant="h5">Experience</Typography>
//         <List>
//           {experiences.map((experience, index) => (
//             <ListItem key={index}>
//               <ListItemIcon>
//                 <Work />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${experience.title} - ${experience.company}`}
//                 secondary={`${experience.startDate || ""} - ${
//                   experience.endDate || "Present"
//                 }`}
//               />
//               <ListItemText primary={experience.description} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.skills}>
//         <Typography variant="h5">Skills</Typography>
//         <List>
//           {skills.map((skill, index) => (
//             <ListItem key={index}>
//               <ListItemIcon>
//                 <Star />
//               </ListItemIcon>
//               <ListItemText primary={`${skill.name} - ${skill.level}`} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.languages}>
//         <Typography variant="h5">Languages</Typography>
//         <List>
//           {languages.map((language, index) => (
//             <ListItem key={index}>
//               <ListItemIcon>
//                 <Language />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${language.name} - ${language.proficiency}`}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.certifications}>
//         <Typography variant="h5">Certifications</Typography>
//         <List>
//           {certifications.map((certification, index) => (
//             <ListItem key={index}>
//               <ListItemIcon>
//                 <Badge />
//               </ListItemIcon>
//               <ListItemText
//                 primary={certification.name}
//                 secondary={`${certification.startDate || ""} - ${
//                   certification.endDate || "Present"
//                 }`}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.references}>
//         <Typography variant="h5">References</Typography>
//         <List>
//           {references.map((reference, index) => (
//             <ListItem key={index}>
//               <ListItemIcon>
//                 <People />
//               </ListItemIcon>
//               <ListItemText
//                 primary={reference.name}
//                 secondary={`${reference.company} - ${reference.email} - ${reference.phone}`}
//               />
//             </ListItem>
//           ))}
//         </List>
// </div>
// </Paper>
// );
// };

// export default Template1;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Paper,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   ListItemIcon,
// } from "@material-ui/core";
// import {
//   AccountCircle,
//   Email,
//   Phone,
//   LocationOn,
//   School,
//   Work,
//   Star,
//   Language,
//   Badge,
//   People,
// } from "@mui/icons-material";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     maxWidth: 800,
//     margin: "auto",
//     padding: theme.spacing(3),
//     backgroundColor: "#f5f5f5",
//     borderRadius: theme.spacing(1),
//     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//   },
//   section: {
//     marginBottom: theme.spacing(1.5),
//   },
//   sectionTitle: {
//     marginBottom: theme.spacing(1),
//     fontWeight: "bold",
//     color: "#333",
//     borderBottom: "2px solid #333",
//     paddingBottom: theme.spacing(1),
//   },
//   listItem: {
//     marginBottom: theme.spacing(1),
//     backgroundColor: "#fff",
//     borderRadius: theme.spacing(1),
//     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//   },
//   listItemText: {
//     fontSize: "1rem",
//     color: "#555",
//   },
// }));

// const Template1 = ({ resumeData }) => {
//   const classes = useStyles();

//   if (!resumeData) {
//     return <p>No resume data provided</p>;
//   }

//   const {
//     title,
//     summary,
//     personalInfo,
//     educations,
//     experiences,
//     skills,
//     languages,
//     certifications,
//     references,
//   } = resumeData;

//   // Check if personalInfo exists and is not empty
//   if (!personalInfo || personalInfo.length === 0) {
//     return <p>No personal information provided</p>;
//   }

//   // Get the first item of the personalInfo array
//   const info = personalInfo[0];

//   return (
//     <Paper className={classes.paper}>
//       <div className={classes.section}>
//         <Typography variant="h4" className={classes.sectionTitle}>
//           {title}
//         </Typography>
//         <Typography variant="body1">{summary}</Typography>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Personal Information
//         </Typography>
//         <List>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <AccountCircle />
//             </ListItemIcon>
//             <ListItemText
//               primary={`${info.firstName} ${info.lastName}`}
//               secondary="Name"
//               className={classes.listItemText}
//             />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <Email />
//             </ListItemIcon>
//             <ListItemText
//               primary={info.email}
//               secondary="Email"
//               className={classes.listItemText}
//             />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <Phone />
//             </ListItemIcon>
//             <ListItemText
//               primary={info.phone}
//               secondary="Phone"
//               className={classes.listItemText}
//             />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <LocationOn />
//             </ListItemIcon>
//             <ListItemText
//               primary={`${info.address}, ${info.city}, ${info.state}, ${info.zip}, ${info.country}`}
//               secondary="Address"
//               className={classes.listItemText}
//             />
//           </ListItem>
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Education
//         </Typography>
//         <List>
//           {/* Mapping through educations */}
//           {educations.map((education, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <School />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${education.degree} - ${education.institution}`}
//                 secondary={`${education.startDate || ""} - ${
//                   education.endDate || "Present"
//                 }`}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Experience
//         </Typography>
//         <List>
//           {/* Mapping through experiences */}
//           {experiences.map((experience, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <Work />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${experience.title} - ${experience.company}`}
//                 secondary={`${experience.startDate || ""} - ${
//                   experience.endDate || "Present"
//                 }`}
//                 className={classes.listItemText}
//               />
//               <ListItemText
//                 primary={experience.description}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Skills
//         </Typography>
//         <List>
//           {/* Mapping through skills */}
//           {skills.map((skill, index)=> (
//               <ListItem key={index} className={classes.listItem}>
//                 <ListItemIcon>
//                   <Star />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={`${skill.name} - ${skill.level}`}
//                   className={classes.listItemText}
//                 />
//               </ListItem>
//             ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Languages
//         </Typography>
//         <List>
//           {/* Mapping through languages */}
//           {languages.map((language, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <Language />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${language.name} - ${language.proficiency}`}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Certifications
//         </Typography>
//         <List>
//           {/* Mapping through certifications */}
//           {certifications.map((certification, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <Badge />
//               </ListItemIcon>
//               <ListItemText
//                 primary={certification.name}
//                 secondary={`${certification.startDate || ""} - ${
//                   certification.endDate || "Present"
//                 }`}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           References
//         </Typography>
//         <List>
//           {/* Mapping through references */}
//           {references.map((reference, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <People />
//               </ListItemIcon>
//               <ListItemText
//                 primary={reference.name}
//                 secondary={`${reference.company} - ${reference.email} - ${reference.phone}`}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     </Paper>
//   );
// };

// export default Template1;

//main code
// import React, { useState } from "react";

// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Paper,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   ListItemIcon,
//   Button,
// } from "@material-ui/core";
// import {
//   AccountCircle,
//   Email,
//   Phone,
//   LocationOn,
//   School,
//   Work,
//   Star,
//   Language,
//   Badge,
//   People,
// } from "@mui/icons-material";
// import { saveAs } from "file-saver";
// import { Document, Page, Text, pdf, View } from "@react-pdf/renderer";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     maxWidth: 800,
//     margin: "auto",
//     padding: theme.spacing(3),
//     backgroundColor: "#f5f5f5",
//     borderRadius: theme.spacing(1),
//     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//   },
//   section: {
//     marginBottom: theme.spacing(1.5),
//   },
//   sectionTitle: {
//     marginBottom: theme.spacing(1),
//     fontWeight: "bold",
//     color: "#333",
//     borderBottom: "2px solid #333",
//     paddingBottom: theme.spacing(1),
//   },
//   listItem: {
//     marginBottom: theme.spacing(1),
//     backgroundColor: "#fff",
//     borderRadius: theme.spacing(1),
//     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//   },
//   listItemText: {
//     fontSize: "1rem",
//     color: "#555",
//   },
//   downloadButton: {
//     marginTop: theme.spacing(3),
//   },
// }));

// const Template1 = ({ resumeData }) => {
//   const classes = useStyles();
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     try {
//       // const authToken = getToken();
//       setLoading(true);
//       const pdfBlob = await generatePdf(resumeData);
//       saveAs(pdfBlob, "resume.pdf");
//       setLoading(false);
//     } catch (error) {
//       console.error("Error downloading resume:", error);
//       alert("Error downloading resume: " + error.message);
//       setLoading(false);
//     }
//   };

//   const generatePdf = async (resumeData) => {
//     // Generate PDF document using @react-pdf/renderer

//     const styles = {
//       paper: {
//         maxWidth: 800,
//         padding: 20,
//         backgroundColor: "#f5f5f5",
//         borderRadius: 10,
//         boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//       },
//       section: {
//         marginBottom: 15,
//       },
//       sectionTitle: {
//         marginBottom: 10,
//         fontWeight: "bold",
//         color: "#333",
//         borderBottom: "2px solid #333",
//         paddingBottom: 10,
//       },
//       sectionText: {
//         fontSize: "1rem",
//         color: "#555",
//       },
//       listItem: {
//         marginBottom: 10,
//         backgroundColor: "#fff",
//         borderRadius: 10,
//         boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//       },
//       listItemText: {
//         fontSize: "1rem",
//         color: "#555",
//       },
//       downloadButton: {
//         marginTop: 20,
//       },
//     };

//     const pdfDocument = (
//       <Document>
//         <Page size="A4">
//           <View style={styles.paper}>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>{resumeData.title}</Text>
//               <Text>{resumeData.summary}</Text>
//             </View>
//             <Text>Personal Information:</Text>
//             <Text>
//               Name: {resumeData.personalInfo[0].firstName}{" "}
//               {resumeData.personalInfo[0].lastName}
//             </Text>
//             <Text>Email: {resumeData.personalInfo[0].email}</Text>
//             <Text>Phone: {resumeData.personalInfo[0].phone}</Text>
//             <Text>
//               Address: {resumeData.personalInfo[0].address},{" "}
//               {resumeData.personalInfo[0].city},{" "}
//               {resumeData.personalInfo[0].state},{" "}
//               {resumeData.personalInfo[0].zip},{" "}
//               {resumeData.personalInfo[0].country}
//             </Text>
//             <Text>Education:</Text>
//             {resumeData.educations.map((education, index) => (
//               <Text key={index}>
//                 {education.degree} - {education.institution},{" "}
//                 {education.startDate || ""} - {education.endDate || "Present"}
//               </Text>
//             ))}
//             <Text>Experience:</Text>
//             {resumeData.experiences.map((experience, index) => (
//               <Text key={index}>
//                 {experience.title} - {experience.company},{" "}
//                 {experience.startDate || ""} - {experience.endDate || "Present"}
//                 , {experience.description}
//               </Text>
//             ))}
//             <Text>Skills:</Text>
//             {resumeData.skills.map((skill, index) => (
//               <Text key={index}>
//                 {skill.name} - {skill.level}
//               </Text>
//             ))}
//             <Text>Languages:</Text>
//             {resumeData.languages.map((language, index) => (
//               <Text key={index}>
//                 {language.name} - {language.proficiency}
//               </Text>
//             ))}
//             <Text>Certifications:</Text>
//             {resumeData.certifications.map((certification, index) => (
//               <Text key={index}>
//                 {certification.name}, {certification.startDate || ""} -{" "}
//                 {certification.endDate || "Present"}
//               </Text>
//             ))}
//             <Text>References:</Text>
//             {resumeData.references.map((reference, index) => (
//               <Text key={index}>
//                 {reference.name}, {reference.company} - {reference.email} -{" "}
//                 {reference.phone}
//               </Text>
//             ))}
//           </View>
//         </Page>
//       </Document>
//     );

//     // Render PDF to blob
//     const blob = await pdf(pdfDocument).toBlob();
//     return blob;
//   };

//   if (!resumeData) {
//     return <p>No resume data provided</p>;
//   }

//   const {
//     title,
//     summary,
//     personalInfo,
//     educations,
//     experiences,
//     skills,
//     languages,
//     certifications,
//     references,
//   } = resumeData;

//   // Check if personalInfo exists and is not empty
//   if (!personalInfo || personalInfo.length === 0) {
//     return <p>No personal information provided</p>;
//   }

//   // Get the first item of the personalInfo array
//   const info = personalInfo[0];

//   return (
//     <Paper className={classes.paper}>
//       <div className={classes.section}>
//         <Typography variant="h4" className={classes.sectionTitle}>
//           {title}
//         </Typography>
//         <Typography variant="body1">{summary}</Typography>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Personal Information
//         </Typography>
//         <List>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <AccountCircle />
//             </ListItemIcon>
//             <ListItemText
//               primary={`${info.firstName} ${info.lastName}`}
//               secondary="Name"
//               className={classes.listItemText}
//             />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <Email />
//             </ListItemIcon>
//             <ListItemText
//               primary={info.email}
//               secondary="Email"
//               className={classes.listItemText}
//             />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <Phone />
//             </ListItemIcon>
//             <ListItemText
//               primary={info.phone}
//               secondary="Phone"
//               className={classes.listItemText}
//             />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <LocationOn />
//             </ListItemIcon>
//             <ListItemText
//               primary={`${info.address}, ${info.city}, ${info.state}, ${info.zip}, ${info.country}`}
//               secondary="Address"
//               className={classes.listItemText}
//             />
//           </ListItem>
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Education
//         </Typography>
//         <List>
//           {/* Mapping through educations */}
//           {educations.map((education, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <School />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${education.degree} - ${education.institution}`}
//                 secondary={`${education.startDate || ""} - ${
//                   education.endDate || "Present"
//                 }`}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Experience
//         </Typography>
//         <List>
//           {/* Mapping through experiences */}
//           {experiences.map((experience, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <Work />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${experience.title} - ${experience.company}`}
//                 secondary={`${experience.startDate || ""} - ${
//                   experience.endDate || "Present"
//                 }`}
//                 className={classes.listItemText}
//               />
//               <ListItemText
//                 primary={experience.description}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Skills
//         </Typography>
//         <List>
//           {/* Mapping through skills */}
//           {skills.map((skill, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <Star />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${skill.name} - ${skill.level}`}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Languages
//         </Typography>
//         <List>
//           {/* Mapping through languages */}
//           {languages.map((language, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <Language />
//               </ListItemIcon>
//               <ListItemText
//                 primary={`${language.name} - ${language.proficiency}`}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           Certifications
//         </Typography>
//         <List>
//           {/* Mapping through certifications */}
//           {certifications.map((certification, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <Badge />
//               </ListItemIcon>
//               <ListItemText
//                 primary={certification.name}
//                 secondary={`${certification.startDate || ""} - ${
//                   certification.endDate || "Present"
//                 }`}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5" className={classes.sectionTitle}>
//           References
//         </Typography>
//         <List>
//           {/* Mapping through references */}
//           {references.map((reference, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <People />
//               </ListItemIcon>
//               <ListItemText
//                 primary={reference.name}
//                 secondary={`${reference.company} - ${reference.email} - ${reference.phone}`}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Button
//         variant="contained"
//         color="primary"
//         className={classes.downloadButton}
//         onClick={handleDownload}
//         disabled={loading}
//       >
//         {loading ? "Downloading..." : "Download"}
//       </Button>
//     </Paper>
//   );
// };

// export default Template1;



import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Button,
} from "@material-ui/core";
import {
  AccountCircle,
  Email,
  Phone,
  LocationOn,
  School,
  Work,
  Star,
  Language,
  Badge,
  People,
} from "@mui/icons-material";
import { saveAs } from "file-saver";
import {
  Document,
  Page,
  Text,
  pdf,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 800,
    margin: "auto",
    padding: theme.spacing(3),
    backgroundColor: "#f5f5f5",
    borderRadius: theme.spacing(1),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  sectionTitle: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    color: "#333",
    borderBottom: "2px solid #333",
    paddingBottom: theme.spacing(1),
  },
  listItem: {
    marginBottom: theme.spacing(1),
    backgroundColor: "#fff",
    borderRadius: theme.spacing(1),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  listItemText: {
    fontSize: "1rem",
    color: "#555",
  },
  downloadButton: {
    marginTop: theme.spacing(3),
    borderRadius: theme.spacing(1.2),
    backgroundColor: "#c154c1"
  },
}));

const Template1 = ({ resumeData }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      // const authToken = getToken();
      setLoading(true);
      const pdfBlob = await generatePdf(resumeData);
      saveAs(pdfBlob, "resume.pdf");
      setLoading(false);
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Error downloading resume: " + error.message);
      setLoading(false);
    }
  };

   // Generate PDF document using @react-pdf/renderer
    const generatePdf = async (resumeData) => {

      // Define styles using StyleSheet.create()
    const styles = StyleSheet.create({
      paper: {
        maxWidth: 800,
        padding: 20,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
      section: {
        marginBottom: 15,
      },
      sectionTitle: {
        marginBottom: 10,
        fontWeight: "bold",
        color: "#333",
        borderBottom: "2px solid #333",
        paddingBottom: 10,
        fontSize: 18, // Adjust title font size
      },
      sectionText: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: 5, // Add margin bottom to text
      },
      listItem: {
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
      listItemText: {
        fontSize: "1rem",
        color: "#555",
      },
    });

      const pdfDocument = (
        <Document>
          <Page size="A4">
            <View style={styles.paper}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{resumeData.title}</Text>
                <Text>{resumeData.summary}</Text>
              </View>
              <Text>Personal Information:</Text>
              <Text>
                Name: {resumeData.personalInfo[0].firstName}{" "}
                {resumeData.personalInfo[0].lastName}
              </Text>
              <Text>Email: {resumeData.personalInfo[0].email}</Text>
              <Text>Phone: {resumeData.personalInfo[0].phone}</Text>
              <Text>
                Address: {resumeData.personalInfo[0].address},{" "}
                {resumeData.personalInfo[0].city},{" "}
                {resumeData.personalInfo[0].state},{" "}
                {resumeData.personalInfo[0].zip},{" "}
                {resumeData.personalInfo[0].country}
              </Text>
              <Text>Education:</Text>
              {resumeData.educations.map((education, index) => (
                <Text key={index}>
                  {education.degree} - {education.institution},{" "}
                  {education.startDate || ""} - {education.endDate || "Present"}
                </Text>
              ))}
              <Text>Experience:</Text>
              {resumeData.experiences.map((experience, index) => (
                <Text key={index}>
                  {experience.title} - {experience.company},{" "}
                  {experience.startDate || ""} - {experience.endDate || "Present"}
                  , {experience.description}
                </Text>
              ))}
              <Text>Skills:</Text>
              {resumeData.skills.map((skill, index) => (
                <Text key={index}>
                  {skill.name} - {skill.level}
                </Text>
              ))}
              <Text>Languages:</Text>
              {resumeData.languages.map((language, index) => (
                <Text key={index}>
                  {language.name} - {language.proficiency}
                </Text>
              ))}
              <Text>Certifications:</Text>
              {resumeData.certifications.map((certification, index) => (
                <Text key={index}>
                  {certification.name}, {certification.startDate || ""} -{" "}
                  {certification.endDate || "Present"}
                </Text>
              ))}
              <Text>References:</Text>
              {resumeData.references.map((reference, index) => (
                <Text key={index}>
                  {reference.name}, {reference.company} - {reference.email} -{" "}
                  {reference.phone}
                </Text>
              ))}
            </View>
          </Page>
        </Document>
      );

   const blob = await pdf(pdfDocument).toBlob();
      return blob;
    };

  if (!resumeData) {
    return <p>No resume data provided</p>;
  }

  const {
    title,
    summary,
    personalInfo,
    educations,
    experiences,
    skills,
    languages,
    certifications,
    references,
  } = resumeData;

  // Check if personalInfo exists and is not empty
  if (!personalInfo || personalInfo.length === 0) {
    return <p>No personal information provided</p>;
  }

  // Get the first item of the personalInfo array
  const info = personalInfo[0];

  return (
    <Paper className={classes.paper}>
      <div className={classes.section}>
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="body1">{summary}</Typography>
        
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Personal Information
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText
              primary={`${info.firstName} ${info.lastName}`}
              secondary="Name"
              className={classes.listItemText}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText
              primary={info.email}
              secondary="Email"
              className={classes.listItemText}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText
              primary={info.phone}
              secondary="Phone"
              className={classes.listItemText}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText
              primary={`${info.address}, ${info.city}, ${info.state}, ${info.zip}, ${info.country}`}
              secondary="Address"
              className={classes.listItemText}
            />
          </ListItem>
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Education
        </Typography>
        <List>
          {/* Mapping through educations */}
          {educations.map((education, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon>
                <School />
              </ListItemIcon>
              <ListItemText
                primary={`${education.degree} - ${education.institution}`}
                secondary={`${education.startDate || ""} - ${
                  education.endDate || "Present"
                }`}
                className={classes.listItemText}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Experience
        </Typography>
        <List>
          {/* Mapping through experiences */}
          {experiences.map((experience, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText
                primary={`${experience.title} - ${experience.company}`}
                secondary={`${experience.startDate || ""} - ${
                  experience.endDate || "Present"
                }`}
                className={classes.listItemText}
              />
              <ListItemText
                primary={experience.description}
                className={classes.listItemText}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Skills
        </Typography>
        <List>
          {/* Mapping through skills */}
          {skills.map((skill, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <ListItemText
                primary={`${skill.name} - ${skill.level}`}
                className={classes.listItemText}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Languages
        </Typography>
        <List>
          {/* Mapping through languages */}
          {languages.map((language, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon>
                <Language />
              </ListItemIcon>
              <ListItemText
                primary={`${language.name} - ${language.proficiency}`}
                className={classes.listItemText}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Certifications
        </Typography>
        <List>
          {/* Mapping through certifications */}
          {certifications.map((certification, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon>
                <Badge />
              </ListItemIcon>
              <ListItemText
                primary={certification.name}
                secondary={`${certification.startDate || ""} - ${
                  certification.endDate || "Present"
                }`}
                className={classes.listItemText}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          References
        </Typography>
        <List>
          {/* Mapping through references */}
          {references.map((reference, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText
                primary={reference.name}
                secondary={`${reference.company} - ${reference.email} - ${reference.phone}`}
                className={classes.listItemText}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.downloadButton}
        onClick={handleDownload}
        disabled={loading}
      >
        {loading ? "Downloading..." : "Download"}
      </Button>
    </Paper>
  );
};

export default Template1;








               

