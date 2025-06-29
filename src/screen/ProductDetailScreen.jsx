import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import QuantityAndVariant from '../components/productDetails/QuantityAndVariant';

const units = [
  {label: 'CUM', value: 'CUM'},
  {label: 'KG', value: 'KG'},
  {label: 'TON', value: 'TON'},
];

const ProductDetailScreen = ({route, navigation}) => {
  const {item} = route.params || {};
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('CUM');

  useLayoutEffect(() => {
    if (route.params?.headerTitle) {
      navigation.setOptions({title: route.params.headerTitle});
    }
  }, [navigation, route.params?.headerTitle]);

  if (!item) {
    return (
      <View style={styles.centered}>
        <Text>No product data.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 24}}>
      <Image
        source={item.image}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View style={styles.infoSection}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.mrp}>
            MRP: <Text style={styles.strike}>{item.mrp}</Text>
          </Text>
          <Text style={styles.discount}>{item.discount}</Text>
        </View>
        <Text style={styles.salePrice}>Sale: ₹ {item.sale}</Text>
        <View style={styles.brandRow}>
          <Text style={styles.brand}>Brand : {item.brand || 'JSW'}</Text>
          <Text style={styles.sku}>SKU: {item.sku || '#BK 1001'}</Text>
        </View>
        <Text style={styles.rating}>
          ⭐ {item.rating || '4.5'} ({item.reviews || 10})
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.desc}>
          {item.description ||
            'We are Number One Company producing RMC, STEEL, CEMENT in India Since 2019. We are in this business since last 25 Years. And Every Product is "A" Listed by government.'}
        </Text>
        <Text style={styles.detail}>
          Grade : {item.grade || 'Ready Mix Concrete'}
        </Text>
        <Text style={styles.detail}>Color : {item.color || 'Grey'}</Text>
        <Text style={styles.detail}>
          Packaging Size : {item.packaging || 'Truck'}
        </Text>
      </View>

      {/* <QuantityAndVariant /> */}
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 180,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  infoSection: {
    marginTop: 16,
    marginBottom: 8,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  mrp: {
    fontSize: 15,
    color: '#888',
    marginRight: 8,
  },
  strike: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discount: {
    color: '#e53935',
    fontWeight: 'bold',
    fontSize: 15,
  },
  salePrice: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  brandRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  brand: {
    fontSize: 14,
    color: '#444',
  },
  sku: {
    fontSize: 13,
    color: '#aaa',
  },
  rating: {
    fontSize: 15,
    color: '#e6b800',
    marginBottom: 6,
  },
  section: {
    backgroundColor: '#fafafa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  desc: {
    fontSize: 15,
    color: '#444',
    marginBottom: 6,
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
});
