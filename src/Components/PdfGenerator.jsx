import React from 'react';
import { Document, Page, Text, View, PDFViewer, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const PdfGenerator = ({ job }) => {
  return (
    <PDFDownloadLink document={<PdfDocument job={job} />} fileName="job_details.pdf">
      {({ blob, url, loading, error }) => (
        loading ? (
          'Loading document...'
        ) : (
          'Download PDF'
        )
      )}
    </PDFDownloadLink>
  );
};

const PdfDocument = ({ job }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Job Details</Text>
        <Text>Category: {job.jobcategory}</Text>
        <Text>Job Title: {job.jobtitle}</Text>
        <Text>Salary Range: ${job.salaryrange}</Text>
        <Text>Your Name: YourLoggedInUserName</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PdfGenerator;
