import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductInfo = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.productName}>{item.name}</Text>
    <View style={styles.priceRow}>
      <Text style={styles.mrp}>MRP: <Text style={styles.strike}>{item.mrp}</Text></Text>
      <Text style={styles.discount}>{item.discount}</Text>
    </View>
    <Text style={styles.salePrice}>Sale: ₹ {item.sale}</Text>
    <View style={styles.brandRow}>
      <Text style={styles.brand}>Brand : {item.brand || 'JSW'}</Text>
      <Text style={styles.sku}>SKU: {item.sku || '#BK 1001'}</Text>
    </View>
    <Text style={styles.rating}>⭐ {item.rating || '4.5'} ({item.reviews || 10})</Text>
  </View>
);

export default ProductInfo;

const styles = StyleSheet.create({
  container: { marginTop: 16, marginBottom: 8 },
  productName: { fontSize: 22, fontWeight: 'bold', color: '#222', marginBottom: 4 },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  mrp: { fontSize: 15, color: '#888', marginRight: 8 },
  strike: { textDecorationLine: 'line-through', color: '#888' },
  discount: { color: '#e53935', fontWeight: 'bold', fontSize: 15 },
  salePrice: { fontSize: 18, color: '#222', fontWeight: 'bold', marginBottom: 2 },
  brandRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
  brand: { fontSize: 14, color: '#444' },
  sku: { fontSize: 13, color: '#aaa' },
  rating: { fontSize: 15, color: '#e6b800', marginBottom: 6 },
});
