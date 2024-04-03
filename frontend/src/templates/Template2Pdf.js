import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Create Template2Pdf component
const Template2Pdf = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{resumeData.title}</Text>
        <Text style={styles.subtitle}>Summary:</Text>
        <Text style={styles.text}>{resumeData.summary}</Text>
        <Text style={styles.subtitle}>Personal Information:</Text>
        {resumeData.personalInfo && resumeData.personalInfo.length > 0 && (
          <View>
            {resumeData.personalInfo.map((info, index) => (
              <View key={index}>
                <Text style={styles.text}>Name: {info.firstName} {info.lastName}</Text>
                <Text style={styles.text}>Email: {info.email}</Text>
                <Text style={styles.text}>Phone: {info.phone}</Text>
                <Text style={styles.text}>Address: {info.address}, {info.city}, {info.state}, {info.zip}, {info.country}</Text>
              </View>
            ))}
          </View>
        )}
        {/* Render other sections */}
      </View>
    </Page>
  </Document>
);

export default Template2Pdf;
