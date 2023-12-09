import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 10,
    },
    section: {
        margin: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
    },
});

const PdfGenerator = ({ job }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>Job Application Summary!</Text>
                    <View style={styles.text}>
                        <div className=' text-lg font-serif text-black'>
                            <Text>Job Title: {job.jobtitle}</Text>
                            <Text>Category: {job.jobcategory}</Text>
                            <Text>Salary Range: ${job.salaryrange}</Text>
                            <Text>Best of luck for your next path!</Text>
                        </div>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfGenerator;
