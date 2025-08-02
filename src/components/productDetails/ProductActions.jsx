import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductActions = ({ quantity, setQuantity }) => (
  <View style={styles.container}>
    {/* Quantity Row */}
    <View style={styles.qtyRow}>
      <Text style={styles.qtyLabel}>Quantity</Text>
      <View style={styles.qtyContainer}>
        <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity(q => Math.max(1, q - 1))}>
          <Text style={styles.qtyBtnText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qtyText}>{quantity}</Text>
        <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity(q => q + 1)}>
          <Text style={styles.qtyBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>

    {/* Buttons Row */}
    <View style={styles.buttonRow}>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#000', marginRight: 8 }]}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ProductActions;

const styles = StyleSheet.create({
  container: { marginTop: 12, marginBottom: 20 },
  qtyRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  qtyLabel: { fontSize: 16, fontWeight: '500', color: '#333' },
  qtyContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 40, height: 40, borderWidth: 1, borderColor: '#ccc', alignItems: 'center', justifyContent: 'center', borderRadius: 4 },
  qtyBtnText: { fontSize: 18, fontWeight: '600' },
  qtyText: { width: 40, textAlign: 'center', fontSize: 16 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { flex: 1, paddingVertical: 12, borderRadius: 8 },
  buttonText: { textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '600' },
});
