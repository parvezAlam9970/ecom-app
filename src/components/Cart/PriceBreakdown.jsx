import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PriceBreakdown = ({ subtotal, shipping, taxes, total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Price Breakdown</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={styles.value}>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Taxes</Text>
        <Text style={styles.value}>${taxes.toFixed(2)}</Text>
      </View>
      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default PriceBreakdown;

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  heading: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  label: { fontSize: 14, color: '#555' },
  value: { fontSize: 14, fontWeight: '500' },
  totalRow: { marginTop: 10 },
  total: { fontSize: 16, fontWeight: '700' },
});
