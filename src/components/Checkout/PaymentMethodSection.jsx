import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PaymentMethodSection = ({ selected, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Payment method</Text>
      {[
        { key: 'cod', label: 'Cash on Delivery', icon: 'attach-money' }, 
        { key: 'online', label: 'Online Payment', icon: 'credit-card' }
      ].map(method => (
        <TouchableOpacity 
          key={method.key} 
          style={styles.methodItem} 
          onPress={() => onSelect(method.key)}
        >
          <View style={styles.iconWrapper}>
            <MaterialIcons name={method.icon} size={20} color="#000" />
          </View>
          <Text style={styles.methodText}>{method.label}</Text>
          <View style={styles.radioButton}>
            {selected === method.key && <View style={styles.radioInner} />}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PaymentMethodSection;

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  methodItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 12, 
    borderBottomWidth: 1, 
    borderBottomColor: '#eee' 
  },
  iconWrapper: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodText: { flex: 1, marginLeft: 10, fontSize: 14, color: '#000' },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
});
