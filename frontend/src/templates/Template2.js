//main code

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
//     padding: theme.spacing(2),
//     maxWidth: 800,
//     margin: "auto",
//     backgroundColor: "#f0f0f0",
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   section: {
//     marginBottom: theme.spacing(4),
//   },
//   header: {
//     marginBottom: theme.spacing(2),
//     borderBottom: "2px solid #333",
//     paddingBottom: theme.spacing(1),
//   },
//   listItem: {
//     marginBottom: theme.spacing(1),
//   },
// }));

// const Template2 = ({ resumeData }) => {
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
//       <div className={classes.header}>
//         <Typography variant="h4">{title}</Typography>
//         <Typography variant="body1">{summary}</Typography>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">Personal Information</Typography>
//         <List>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <AccountCircle />
//             </ListItemIcon>
//             <ListItemText
//               primary={`${info.firstName} ${info.lastName}`}
//               secondary="Name"
//             />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <Email />
//             </ListItemIcon>
//             <ListItemText primary={info.email} secondary="Email" />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <Phone />
//             </ListItemIcon>
//             <ListItemText primary={info.phone} secondary="Phone" />
//           </ListItem>
//           <ListItem className={classes.listItem}>
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
//       <div className={classes.section}>
//         <Typography variant="h5">Education</Typography>
//         <List>
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
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">Experience</Typography>
//         <List>
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
//               />
//               <ListItemText primary={experience.description} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">Skills</Typography>
//         <List>
//           {skills.map((skill, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <Star />
//               </ListItemIcon>
//               <ListItemText primary={`${skill.name} - ${skill.level}`} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">Languages</Typography>
//         <List>
//           {languages.map((language, index) => (
//             <ListItem key={index} className={classes.listItem}>
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
//       <div className={classes.section}>
//         <Typography variant="h5">Certifications</Typography>
//         <List>
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
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">References</Typography>
//         <List>
//           {references.map((reference, index) => (
//             <ListItem key={index} className={classes.listItem}>
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
//       </div>
//     </Paper>
//   );
// };

// export default Template2;

//with styling
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
// import {
//   Document,
//   Page,
//   Text,
//   pdf,
//   View,
//   StyleSheet
// } from "@react-pdf/renderer";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     maxWidth: 800,
//     margin: "auto",
//     backgroundColor: "#f0f0f0",
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   section: {
//     marginBottom: theme.spacing(4),
//   },
//   header: {
//     marginBottom: theme.spacing(2),
//     borderBottom: "2px solid #333",
//     paddingBottom: theme.spacing(1),
//   },
//   listItem: {
//     marginBottom: theme.spacing(1),
//   },
//   downloadButton: {
//     marginTop: theme.spacing(3),
//   },
// }));

// const Template2 = ({ resumeData }) => {
//   const classes = useStyles();
//   const [loading, setLoading]= useState(false)

//   const handleDownload = async () => {
//     try {
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

//   const styles = StyleSheet.create({
//     paper: {
//       padding: 20,
//       maxWidth: 800,
//       margin: "auto",
//       backgroundColor: "#f0f0f0",
//       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//     },
//     section: {
//       marginBottom: 20,
//     },
//     header: {
//       marginBottom: 10,
//       borderBottom: "2px solid #333",
//       paddingBottom: 5,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: "bold",
//     },
//     summary: {
//       fontSize: 12,
//       color: "#666",
//     },
//     listItem: {
//       marginBottom: 5,
//     },
//   });

//   const generatePdf = async (resumeData) => {
//     const pdfDocument = (
//       <Document>
//         <Page size="A4">
//           <View style={styles.paper}>
//             <View style={styles.header}>
//               <Text style={styles.title}>{resumeData.title}</Text>
//               <Text style={styles.summary}>{resumeData.summary}</Text>
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Personal Information</Text>
//               <View>
//                 <Text style={styles.listItem}>
//                   Name: {resumeData.personalInfo[0].firstName} {resumeData.personalInfo[0].lastName}
//                 </Text>
//                 <Text style={styles.listItem}>
//                   Email: {resumeData.personalInfo[0].email}
//                 </Text>
//                 <Text style={styles.listItem}>
//                   Phone: {resumeData.personalInfo[0].phone}
//                 </Text>
//                 <Text style={styles.listItem}>
//                   Address: {resumeData.personalInfo[0].address}, {resumeData.personalInfo[0].city}, {resumeData.personalInfo[0].state}, {resumeData.personalInfo[0].zip}, {resumeData.personalInfo[0].country}
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Education</Text>
//               {resumeData.educations.map((education, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {education.degree} - {education.institution},{" "}
//                   {education.startDate || ""} - {education.endDate || "Present"}
//                 </Text>
//               ))}
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Experience</Text>
//               {resumeData.experiences.map((experience, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {experience.title} - {experience.company},{" "}
//                   {experience.startDate || ""} - {experience.endDate || "Present"}
//                   , {experience.description}
//                 </Text>
//               ))}
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Skills</Text>
//               {resumeData.skills.map((skill, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {skill.name} - {skill.level}
//                 </Text>
//               ))}
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Languages</Text>
//               {resumeData.languages.map((language, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {language.name} - {language.proficiency}
//                 </Text>
//               ))}
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Certifications</Text>
//               {resumeData.certifications.map((certification, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {certification.name}, {certification.startDate || ""} -{" "}
//                   {certification.endDate || "Present"}
//                 </Text>
//               ))}
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>References</Text>
//               {resumeData.references.map((reference, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {reference.name}, {reference.company} - {reference.email} -{" "}
//                   {reference.phone}
//                 </Text>
//               ))}
//             </View>
//           </View>
//         </Page>
//       </Document>
//     );

//     const blob = await pdf(pdfDocument).toBlob();
//     return blob;
//   };
//   // const generatePdf = async (resumeData) => {
//   //   const pdfDocument = (
//   //     <Document>
//   //       <Page size="A4">
//   //         <View>
//   //           <Text>{resumeData.title}</Text>
//   //           <Text>{resumeData.summary}</Text>
//   //         </View>
//   //         <View>
//   //           <Text>Personal Information:</Text>
//   //           <Text>Name: {resumeData.personalInfo[0].firstName} {resumeData.personalInfo[0].lastName}</Text>
//   //           <Text>Email: {resumeData.personalInfo[0].email}</Text>
//   //           <Text>Phone: {resumeData.personalInfo[0].phone}</Text>
//   //           <Text>Address: {resumeData.personalInfo[0].address}, {resumeData.personalInfo[0].city}, {resumeData.personalInfo[0].state}, {resumeData.personalInfo[0].zip}, {resumeData.personalInfo[0].country}</Text>
//   //         </View>
//   //         <View>
//   //           <Text>Education:</Text>
//   //           {resumeData.educations.map((education, index) => (
//   //             <Text key={index}>
//   //               {education.degree} - {education.institution},{" "}
//   //               {education.startDate || ""} - {education.endDate || "Present"}
//   //             </Text>
//   //           ))}
//   //         </View>
//   //         <View>
//   //           <Text>Experience:</Text>
//   //           {resumeData.experiences.map((experience, index) => (
//   //             <Text key={index}>
//   //               {experience.title} - {experience.company},{" "}
//   //               {experience.startDate || ""} - {experience.endDate || "Present"}
//   //               , {experience.description}
//   //             </Text>
//   //           ))}
//   //         </View>
//   //         <View>
//   //           <Text>Skills:</Text>
//   //           {resumeData.skills.map((skill, index) => (
//   //             <Text key={index}>
//   //               {skill.name} - {skill.level}
//   //             </Text>
//   //           ))}
//   //         </View>
//   //         <View>
//   //           <Text>Languages:</Text>
//   //           {resumeData.languages.map((language, index) => (
//   //             <Text key={index}>
//   //               {language.name} - {language.proficiency}
//   //             </Text>
//   //           ))}
//   //         </View>
//   //         <View>
//   //           <Text>Certifications:</Text>
//   //           {resumeData.certifications.map((certification, index) => (
//   //             <Text key={index}>
//   //               {certification.name}, {certification.startDate || ""} -{" "}
//   //               {certification.endDate || "Present"}
//   //             </Text>
//   //           ))}
//   //         </View>
//   //         <View>
//   //           <Text>References:</Text>
//   //           {resumeData.references.map((reference, index) => (
//   //             <Text key={index}>
//   //               {reference.name}, {reference.company} - {reference.email} -{" "}
//   //               {reference.phone}
//   //             </Text>
//   //           ))}
//   //         </View>
//   //       </Page>
//   //     </Document>
//   //   );

//   //   const blob = await pdf(pdfDocument).toBlob();
//   //   return blob;
//   // };

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
//       <div className={classes.header}>
//         <Typography variant="h4">{title}</Typography>
//         <Typography variant="body1">{summary}</Typography>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">Personal Information</Typography>
//         <List>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <AccountCircle />
//             </ListItemIcon>
//             <ListItemText
//               primary={`${info.firstName} ${info.lastName}`}
//               secondary="Name"
//             />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <Email />
//             </ListItemIcon>
//             <ListItemText primary={info.email} secondary="Email" />
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <ListItemIcon>
//               <Phone />
//             </ListItemIcon>
//             <ListItemText primary={info.phone} secondary="Phone" />
//           </ListItem>
//           <ListItem className={classes.listItem}>
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
//       <div className={classes.section}>
//         <Typography variant="h5">Education</Typography>
//         <List>
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
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">Experience</Typography>
//         <List>
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
//               />
//               <ListItemText primary={experience.description} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">Skills</Typography>
//         <List>
//           {skills.map((skill, index) => (
//             <ListItem key={index} className={classes.listItem}>
//               <ListItemIcon>
//                 <Star />
//               </ListItemIcon>
//               <ListItemText primary={`${skill.name} - ${skill.level}`} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">Languages</Typography>
//         <List>
//           {languages.map((language, index) => (
//             <ListItem key={index} className={classes.listItem}>
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
//       <div className={classes.section}>
//         <Typography variant="h5">Certifications</Typography>
//         <List>
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
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <Divider />
//       <div className={classes.section}>
//         <Typography variant="h5">References</Typography>
//         <List>
//           {references.map((reference, index) => (
//             <ListItem key={index} className={classes.listItem}>
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

// export default Template2;

//imp
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
    padding: theme.spacing(2),
    maxWidth: 800,
    margin: "auto",
    backgroundColor: "#f0f0f0",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  header: {
    marginBottom: theme.spacing(3),
    borderBottom: "2px solid #333",
    paddingBottom: theme.spacing(5),
  },
  listItem: {
    marginBottom: theme.spacing(2),
  },
  downloadButton: {
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(1.2),
    backgroundColor: "#c154c1",
  },
}));

const Template2 = ({ resumeData }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
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

  const styles = StyleSheet.create({
    page: {
      padding: 20,
      fontFamily: "Helvetica",
      fontSize: 12,
    },
    section: {
      marginBottom: 10,
    },
    header: {
      marginBottom: 10,
      borderBottom: "2px solid #333",
      paddingBottom: 5,
    },
    listItem: {
      marginBottom: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 5,
    },
    text: {
      marginBottom: 3,
    },
  });

  const generatePdf = (resumeData) => {
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

    const pdfDocument = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{summary}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Personal Information:</Text>
            {personalInfo.map((info, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.text}>
                  Name: {info.firstName} {info.lastName}
                </Text>
                <Text style={styles.text}>Email: {info.email}</Text>
                <Text style={styles.text}>Phone: {info.phone}</Text>
                <Text style={styles.text}>
                  Address: {info.address}, {info.city}, {info.state}, {info.zip}
                  , {info.country}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Education: </Text>
            {educations.map((education, index) => (
              <Text key={index} style={styles.listItem}>
                {education.degree} - {education.institution},{" "}
                {education.startDate || ""} - {education.endDate || "Present"}
              </Text>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Experience:</Text>
            {experiences.map((experience, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.text}>
                  {experience.title} - {experience.company},{" "}
                  {experience.startDate || ""} -{" "}
                  {experience.endDate || "Present"}, {experience.description}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Skills:</Text>
            {skills.map((skill, index) => (
              <Text key={index} style={styles.listItem}>
                {skill.name} - {skill.level}
              </Text>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Languages:</Text>
            {languages.map((language, index) => (
              <Text key={index} style={styles.listItem}>
                {language.name} - {language.proficiency}
              </Text>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Certifications:</Text>
            {certifications.map((certification, index) => (
              <Text key={index} style={styles.listItem}>
                {certification.name}, {certification.startDate || ""} -{" "}
                {certification.endDate || "Present"}
              </Text>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>References:</Text>
            {references.map((reference, index) => (
              <Text key={index} style={styles.listItem}>
                {reference.name}, {reference.company} - {reference.email} -{" "}
                {reference.phone}
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    );

    const blob = pdf(pdfDocument).toBlob();
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
      <div className={classes.header}>
        <Typography variant="h4">{title}</Typography>

        <Typography variant="body1">{summary}</Typography>
      </div>

      <div className={classes.section}>
        <Typography variant="h5">Personal Information</Typography>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText
              primary={`${info.firstName} ${info.lastName}`}
              secondary="Name"
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={info.email} secondary="Email" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary={info.phone} secondary="Phone" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText
              primary={`${info.address}, ${info.city}, ${info.state}, ${info.zip}, ${info.country}`}
              secondary="Address"
            />
          </ListItem>
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5">Education</Typography>
        <List>
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
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5">Experience</Typography>
        <List>
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
              />
              <ListItemText primary={experience.description} />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5">Skills</Typography>
        <List>
          {skills.map((skill, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <ListItemText primary={`${skill.name} - ${skill.level}`} />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5">Languages</Typography>
        <List>
          {languages.map((language, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon>
                <Language />
              </ListItemIcon>
              <ListItemText
                primary={`${language.name} - ${language.proficiency}`}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5">Certifications</Typography>
        <List>
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
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h5">References</Typography>
        <List>
          {references.map((reference, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText
                primary={reference.name}
                secondary={`${reference.company} - ${reference.email} - ${reference.phone}`}
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

export default Template2;
