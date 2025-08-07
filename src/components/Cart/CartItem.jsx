import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CartItem = ({ item, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        {item.variant && (
          <Text style={styles.variant}>
            {item.variant.color ? `Color: ${item.variant.color}` : ''} 
            {item.variant.size ? `  Size: ${item.variant.size}` : ''}
          </Text>
        )}
      </View>
      <View style={styles.qtyContainer}>
        <TouchableOpacity style={styles.qtyButton} onPress={onDecrease}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qty}>{item.quantity}</Text>
        <TouchableOpacity style={styles.qtyButton} onPress={onIncrease}>
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  image: { width: 60, height: 60, borderRadius: 8, backgroundColor: '#f2f2f2' },
  details: { flex: 1, marginLeft: 12 },
  name: { fontSize: 14, fontWeight: '500', color: '#222' },
  price: { fontSize: 13, color: '#666', marginVertical: 4 },
  variant: { fontSize: 12, color: '#888' },
  qtyContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyButton: { width: 28, height: 28, borderRadius: 14, borderWidth: 1, borderColor: '#ccc', alignItems: 'center', justifyContent: 'center' },
  qtyText: { fontSize: 16, fontWeight: '600' },
  qty: { marginHorizontal: 8, fontSize: 14, fontWeight: '500' },
});
