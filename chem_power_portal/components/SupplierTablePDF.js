import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const SupplierTablePDF = ({ suppliers }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Supplier Table</Text>
                <View>
                    {suppliers.map((supplier, index) => (
                        <View key={index}>
                            <Text>{`Name: ${supplier.name}`}</Text>
                            <Text>{`Contact: ${supplier.contact}`}</Text>
                            <Text>{`Payment Type: ${supplier.paymentTerms}`}</Text>
                            <Text>{`Delivery Schedule: ${supplier.deliverySchedule}`}</Text>
                            <Text>{'--------------------------------'}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
);

export default SupplierTablePDF;