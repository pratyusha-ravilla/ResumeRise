import React from "react";
import { saveAs } from "file-saver";
import { Document, Page, Text, pdf, StyleSheet } from "@react-pdf/renderer";

const Template1Pdf = ({ resumeData }) => {
  const handleDownload = async () => {
    try {
      const pdfBlob = await generatePdf(); // Generate PDF
      saveAs(pdfBlob, 'resume_template1.pdf'); // Prompt user to download
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Error downloading resume: " + error.message);
    }
  };

  // const generatePdf = async () => {
  //   const pdfDocument = (
  //     <Document>
  //       <Page size="A4">
  //         {/* JSX structure of Template1 */}
  //         <Text>{resumeData.title}</Text>
  //         <Text>{resumeData.summary}</Text>
  //         <Text>Personal Information:</Text>
  //         <Text>Name: {resumeData.personalInfo[0].firstName} {resumeData.personalInfo[0].lastName}</Text>
  //         <Text>Email: {resumeData.personalInfo[0].email}</Text>
  //         <Text>Phone: {resumeData.personalInfo[0].phone}</Text>
  //         <Text>Address: {resumeData.personalInfo[0].address}, {resumeData.personalInfo[0].city}, {resumeData.personalInfo[0].state}, {resumeData.personalInfo[0].zip}, {resumeData.personalInfo[0].country}</Text>
  //         <Text>Education:</Text>
  //         {resumeData.educations.map((education, index) => (
  //           <Text key={index}>{education.degree} - {education.institution}, {education.startDate || ""} - {education.endDate || "Present"}</Text>
  //         ))}
  //         <Text>Experience:</Text>
  //         {resumeData.experiences.map((experience, index) => (
  //           <Text key={index}>{experience.title} - {experience.company}, {experience.startDate || ""} - {experience.endDate || "Present"}, {experience.description}</Text>
  //         ))}
  //         <Text>Skills:</Text>
  //         {resumeData.skills.map((skill, index) => (
  //           <Text key={index}>{skill.name} - {skill.level}</Text>
  //         ))}
  //         <Text>Languages:</Text>
  //         {resumeData.languages.map((language, index) => (
  //           <Text key={index}>{language.name} - {language.proficiency}</Text>
  //         ))}
  //         <Text>Certifications:</Text>
  //         {resumeData.certifications.map((certification, index) => (
  //           <Text key={index}>{certification.name}, {certification.startDate || ""} - {certification.endDate || "Present"}</Text>
  //         ))}
  //         <Text>References:</Text>
  //         {resumeData.references.map((reference, index) => (
  //           <Text key={index}>{reference.name}, {reference.company} - {reference.email} - {reference.phone}</Text>
  //         ))}
  //       </Page>
  //     </Document>
  //   );

  //   const blob = await pdf(pdfDocument).toBlob();
  //   return blob;
  // };


  const generatePdf = async (resumeData) => {
    // Define styles for PDF
    const styles = StyleSheet.create({
      page: {
        fontFamily: "Helvetica",
        padding: 20,
        fontSize: 12,
      },
      section: {
        marginBottom: 10,
      },
      sectionTitle: {
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: "#333",
        paddingBottom: 5,
      },
      listItem: {
        marginBottom: 5,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 5,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
      listItemText: {
        fontSize: 12,
        color: "#555",
      },
    });
  
    // Generate PDF document using @react-pdf/renderer
    const pdfDocument = (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text>{resumeData.title}</Text>
          <Text>{resumeData.summary}</Text>
  
          {/* Personal Information */}
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.listItem}>
            Name: {resumeData.personalInfo[0].firstName}{" "}
            {resumeData.personalInfo[0].lastName}
          </Text>
          <Text style={styles.listItem}>Email: {resumeData.personalInfo[0].email}</Text>
          <Text style={styles.listItem}>Phone: {resumeData.personalInfo[0].phone}</Text>
          <Text style={styles.listItem}>
            Address: {resumeData.personalInfo[0].address},{" "}
            {resumeData.personalInfo[0].city}, {resumeData.personalInfo[0].state},{" "}
            {resumeData.personalInfo[0].zip}, {resumeData.personalInfo[0].country}
          </Text>
  
          {/* Education */}
          <Text style={styles.sectionTitle}>Education</Text>
          {resumeData.educations.map((education, index) => (
            <Text key={index} style={styles.listItem}>
              {education.degree} - {education.institution},{" "}
              {education.startDate || ""} - {education.endDate || "Present"}
            </Text>
          ))}
  
          {/* Experience */}
          <Text style={styles.sectionTitle}>Experience</Text>
          {resumeData.experiences.map((experience, index) => (
            <Text key={index} style={styles.listItem}>
              {experience.title} - {experience.company},{" "}
              {experience.startDate || ""} - {experience.endDate || "Present"}
              {experience.description}
            </Text>
          ))}
  
          {/* Skills */}
          <Text style={styles.sectionTitle}>Skills</Text>
          {resumeData.skills.map((skill, index) => (
            <Text key={index} style={styles.listItem}>
              {skill.name} - {skill.level}
            </Text>
          ))}
  
          {/* Languages */}
          <Text style={styles.sectionTitle}>Languages</Text>
          {resumeData.languages.map((language, index) => (
            <Text key={index} style={styles.listItem}>
              {language.name} - {language.proficiency}
            </Text>
          ))}
  
          {/* Certifications */}
          <Text style={styles.sectionTitle}>Certifications</Text>
          {resumeData.certifications.map((certification, index) => (
            <Text key={index} style={styles.listItem}>
              {certification.name},{" "}
              {certification.startDate || ""} - {certification.endDate || "Present"}
            </Text>
          ))}
  
          {/* References */}
          <Text style={styles.sectionTitle}>References</Text>
          {resumeData.references.map((reference, index) => (
            <Text key={index} style={styles.listItem}>
              {reference.name}, {reference.company} - {reference.email} -{" "}
              {reference.phone}
            </Text>
          ))}
        </Page>
      </Document>
    );
  
    // Render PDF to blob
    const blob = await pdf(pdfDocument).toBlob();
    return blob;
  };  
  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default Template1Pdf;

