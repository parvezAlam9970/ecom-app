import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import CartItem from '../components/Cart/CartItem';
import PriceBreakdown from '../components/Cart/PriceBreakdown';
import CustomTouchableOpacity from '../components/custom/CustomTouchableOpacity ';

const CartScreen = ({navigation}) => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Laptop Sleeve', price: 29.99, quantity: 1, image: require('../assets/prod1.jpg'), variant: { color: 'Black' } },
    { id: '2', name: 'Wireless Mouse', price: 19.99, quantity: 2, image: require('../assets/prod2.jpg'), variant: { color: 'Grey' } },
    { id: '3', name: 'Phone Case', price: 9.99, quantity: 1, image: require('../assets/prod3.jpg'), variant: { color: 'Blue', size: 'M' } },
    { id: '4', name: 'Laptop Sleeve', price: 29.99, quantity: 1, image: require('../assets/prod1.jpg'), variant: { color: 'Black' } },

  ]);

  const updateQuantity = (id, change) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const taxes = subtotal * 0.07; // Example 7%
  const total = subtotal + shipping + taxes;

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 180 }}>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => updateQuantity(item.id, 1)}
            onDecrease={() => updateQuantity(item.id, -1)}
          />
        ))}
        <PriceBreakdown subtotal={subtotal} shipping={shipping} taxes={taxes} total={total} />
      </ScrollView>

      {/* Sticky Checkout Button */}
      <View style={styles.checkoutContainer}>
        <CustomTouchableOpacity
        onPress={() => navigation.navigate('Checkout')}
        style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </CustomTouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 16 },
  checkoutContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 100, // fixed padding instead of safe area
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
