import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For heart icon
import CustomTouchableOpacity from './CustomTouchableOpacity ';

export default function ProductCard({ item }) {
  const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2s (optional)
  };

  const toggleWishlist = () => {
    setIsWishlisted(prev => !prev);
  };

  return (
    <View style={styles.card}>
      <CustomTouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('product-detail', { item, headerTitle: item.name })
        }>
        <View>
          <Image source={item.image} style={styles.image} resizeMode="contain" />

          {/* Wishlist Icon */}
          <TouchableOpacity style={styles.wishlistIcon} onPress={toggleWishlist}>
            <Icon
              name={isWishlisted ? 'heart' : 'heart-o'}
              size={15}
              color={isWishlisted ? 'red' : '#000'}
            />
          </TouchableOpacity>
        </View>

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
      </CustomTouchableOpacity>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={[styles.cartButton, addedToCart && styles.addedButton]}
        onPress={handleAddToCart}>
        <Text style={styles.cartButtonText}>
          {addedToCart ? 'Added to Cart' : 'Add to Cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginBottom: 16,
    width: 170,
    borderRadius: 8,
    padding: 8,
  },
  image: { width: '100%', height: 140, marginBottom: 8, borderRadius: 10, backgroundColor: '#e7edf4' },
  wishlistIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  name: { fontWeight: '600', fontSize: 14, marginBottom: 5, color: '#000' },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  salePrice: { fontSize: 14, fontWeight: 'bold', color: '#4285F4', marginRight: 6 },
  mrp: { fontSize: 12, color: '#888', textDecorationLine: 'line-through' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  star: { fontSize: 12, color: '#ffa000', marginRight: 4 },
  reviews: { fontSize: 11, color: '#888' },

  // Cart Button
  cartButton: {
    backgroundColor: '#000',
    paddingVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
  },
  addedButton: {
    backgroundColor: '#4CAF50', // green when added
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
