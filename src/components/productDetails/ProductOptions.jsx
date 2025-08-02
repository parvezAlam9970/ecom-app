import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const sizeOptions = [
  { label: '13 inch', value: '13' },
  { label: '15 inch', value: '15' },
  { label: '17 inch', value: '17' },
];

const colorOptions = [
  { label: 'Black', value: 'black' },
  { label: 'Grey', value: 'grey' },
  { label: 'Blue', value: 'blue' },
];

const ProductOptions = ({ selectedSize, setSelectedSize, selectedColor, setSelectedColor }) => (
  <View style={styles.container}>
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLabel}>Select Size</Text>
      <Dropdown
        style={styles.dropdown}
        data={sizeOptions}
        labelField="label"
        valueField="value"
        placeholder="Choose size"
        value={selectedSize}
        onChange={(item) => setSelectedSize(item.value)}
      />
    </View>
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLabel}>Select Color</Text>
      <Dropdown
        style={styles.dropdown}
        data={colorOptions}
        labelField="label"
        valueField="value"
        placeholder="Choose color"
        value={selectedColor}
        onChange={(item) => setSelectedColor(item.value)}
      />
    </View>
  </View>
);

export default ProductOptions;

const styles = StyleSheet.create({
  container: { 
    marginVertical: 16, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  dropdownContainer: {
    width: 150,
  },
  dropdownLabel: { 
    fontSize: 16, 
    color: '#333', 
    marginBottom: 6, 
    fontWeight: '500' 
  },
  dropdown: {
    height: 45,
    width: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
