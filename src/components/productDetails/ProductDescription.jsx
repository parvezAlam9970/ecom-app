import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDescription = ({ title, description }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>{title}</Text>
    <Text style={styles.desc}>{description || 'No description available.'}</Text>
  </View>
);

export default ProductDescription;

const styles = StyleSheet.create({
  section: { backgroundColor: '#fafafa', borderRadius: 8, padding: 12, marginBottom: 12 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  desc: { fontSize: 15, color: '#444', lineHeight: 20 },
});
