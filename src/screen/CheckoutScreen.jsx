import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Modal } from 'react-native';
import AddressSection from '../components/Checkout/AddressSection';
import PaymentMethodSection from '../components/Checkout/PaymentMethodSection';
import OrderSummary from '../components/Checkout/OrderSummary';
import AddressModal from '../components/modals/AddressModal';
import CustomTouchableOpacity from '../components/custom/CustomTouchableOpacity ';


const CheckoutScreen = () => {
  const [addresses, setAddresses] = useState([
    { id: '1', label: 'Home', address: '123 Maple Street, Anytown, USA' },
    { id: '2', label: 'Work', address: '456 Oak Avenue, Anytown, USA' },
  ]);
  const [selectedAddress, setSelectedAddress] = useState('1');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [showAddressModal, setShowAddressModal] = useState(false);

  const subtotal = 59.98;
  const shipping = 5;
  const discount = 10;
  const total = subtotal + shipping - discount;

  const addNewAddress = (newAddress) => {
    setAddresses(prev => [...prev, { id: Date.now().toString(), ...newAddress }]);
    setShowAddressModal(false);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>
        <AddressSection 
          addresses={addresses} 
          selectedAddress={selectedAddress} 
          onSelect={setSelectedAddress} 
          onAddNew={() => setShowAddressModal(true)} 
        />
        <PaymentMethodSection selected={paymentMethod} onSelect={setPaymentMethod} />
        <OrderSummary subtotal={subtotal} shipping={shipping} discount={discount} total={total} />
      </ScrollView>

      {/* Sticky Place Order Button */}
      <View style={styles.placeOrderContainer}>
        <CustomTouchableOpacity style={styles.placeOrderButton}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </CustomTouchableOpacity>
      </View>

      <AddressModal  
      {...{setShowAddressModal ,showAddressModal }}
      />

     
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 16 },
  placeOrderContainer: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  placeOrderButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
     marginVertical :  20,
    borderRadius: 8,
    alignItems: 'center',
  },
  placeOrderText: { color: '#fff', fontSize: 16, fontWeight: '600'   , },

});
