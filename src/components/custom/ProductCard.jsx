import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTouchableOpacity from './CustomTouchableOpacity ';

export default function ProductCard({ item }) {
  const navigation = useNavigation();

  return (
    <CustomTouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('product-detail', { item, headerTitle: item.name })
      }>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />

        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.salePrice}>₹{item.sale}</Text>
          <Text style={styles.mrp}>₹{item.mrp}</Text>
        </View>

        <View style={styles.ratingRow}>
          <Text style={styles.star}>⭐ {item.rating}</Text>
          <Text style={styles.reviews}>({item.reviews})</Text>
        </View>
      </View>
    </CustomTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    width: 170,


  },
  image: { width: '100%', height: 140, marginBottom: 8, borderRadius: 10 , backgroundColor : "#e7edf4" ,  objectFit : "fill" },
  name: { fontWeight: '600', fontSize: 14, marginBottom: 5, color: '#000' },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  salePrice: { fontSize: 14, fontWeight: 'bold', color: '#4285F4', marginRight: 6 },
  mrp: { fontSize: 12, color: '#888', textDecorationLine: 'line-through' },
  ratingRow: { flexDirection: 'row', alignItems: 'center' },
  star: { fontSize: 12, color: '#ffa000', marginRight: 4 },
  reviews: { fontSize: 11, color: '#888' },
});
