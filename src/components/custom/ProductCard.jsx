import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTouchableOpacity from './CustomTouchableOpacity ';

export default function ProductCard({item}) {
  const navigation = useNavigation();

  return (
    <CustomTouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('product-detail', {item, headerTitle: item.name})
      }>
      <View style={styles.productCard}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productMrp}>
          MRP: <Text style={styles.strike}>{item.mrp}</Text>
        </Text>
        <Text style={styles.productDiscount}>{item.discount}</Text>
        <Text style={styles.productSale}>Sale: {item.sale}</Text>
        <Text style={styles.productReviews}>
          ⭐ {item.rating} ({item.reviews})
        </Text>
      </View>
    </CustomTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 3,
    width: 120,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  productImage: {width: 60, height: 60, marginBottom: 6},
  productName: {fontWeight: 'bold', fontSize: 14, marginBottom: 2},
  productMrp: {fontSize: 11, color: '#888'},
  strike: {textDecorationLine: 'line-through'},
  productDiscount: {fontSize: 11, color: '#e53935', marginBottom: 2},
  productSale: {fontSize: 13, color: '#4285F4', fontWeight: 'bold'},
  productReviews: {fontSize: 11, color: '#888', marginTop: 2},
});
