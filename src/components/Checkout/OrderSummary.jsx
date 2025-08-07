import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const OrderSummary = ({ subtotal, shipping, discount, total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Order summary</Text>
      
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={styles.value}>${shipping.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Discount</Text>
        <Text style={[styles.value, styles.discount]}>-${discount.toFixed(2)}</Text>
      </View>

      <View style={styles.rowTotal}>
        <Text style={styles.totalLabel}>Order total</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 14 },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 6 
  },
  rowTotal: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10
  },
  label: { fontSize: 14, color: '#333' },
  value: { fontSize: 14, fontWeight: '500', color: '#000' },
  discount: { color: '#d9534f' },
  totalLabel: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  totalValue: { fontSize: 16, fontWeight: 'bold', color: '#000' },
});
