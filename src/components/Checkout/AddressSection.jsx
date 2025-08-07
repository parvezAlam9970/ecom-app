import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const AddressSection = ({ addresses, selectedAddress, onSelect, onAddNew, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Delivery address</Text>
      {addresses.map(addr => {
        const isSelected = selectedAddress === addr.id;
        return (
          <TouchableOpacity 
            key={addr.id} 
            style={[styles.addressItem, isSelected && styles.selectedAddress]}
            onPress={() => onSelect(addr.id)}
          >
            <View style={styles.iconWrapper}>
              <Icon name="home" size={20} color="#000" />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.label}>{addr.label}</Text>
              <Text style={styles.address}>{addr.address}</Text>
              {isSelected && <Text style={styles.badge}>Deliver Here</Text>}
            </View>
            <TouchableOpacity onPress={() => onEdit(addr.id)}>
              <Icon name="edit-2" size={18} color="#000" />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity style={styles.addNew} onPress={onAddNew}>
        <Icon name="plus" size={18} color="#000" />
        <Text style={styles.addText}>Add new address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressSection;

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  iconWrapper: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#eee' 
  },
  selectedAddress: { backgroundColor: '#f9f9f9' },
  label: { fontSize: 14, fontWeight: '600', color: '#000' },
  address: { fontSize: 13, color: '#666' },
  badge: { 
    marginTop: 4, 
    backgroundColor: '#000', 
    color: '#fff', 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    fontSize: 12, 
    borderRadius: 4, 
    alignSelf: 'flex-start' 
  },
  addNew: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  addText: { marginLeft: 8, fontSize: 14, color: '#000' },
});
