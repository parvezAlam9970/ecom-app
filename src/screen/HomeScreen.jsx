import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {fontSize, Padding} from '../constants/theam';
import {banners, categories, products} from '../constants/dummyData';
import ProductCard from '../components/custom/ProductCard';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/Build_logo_transparent.png')}
          style={styles.logoImg}
          resizeMode="contain"
        />
        <Icon name="notifications-none" size={24} color="#000" />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={22} color="#aaa" style={{marginRight: 8}} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products"
          placeholderTextColor="#aaa"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 70 + insets.bottom}}>
        
        {/* Upgrade Your Tech & Essential Accessories */}
        <View style={styles.twoCardsRow}>
          <TouchableOpacity style={styles.smallCard}>
            <Image
              source={require('../assets/prod2.jpg')}
              style={styles.smallCardImage}
            />
            <Text style={styles.smallCardTitle}>Upgrade Your Tech</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallCard}>
            <Image
              source={require('../assets/prod1.jpg')}
              style={styles.smallCardImage}
            />
            <Text style={styles.smallCardTitle}>Essential Accessories</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <FlatList
            data={products}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={({item}) => <ProductCard item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingVertical: 10}}
          />
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories?.map((cat, idx) => (
              <TouchableOpacity key={idx} style={styles.categoryItem}>
                <View style={styles.categoryCircle}>
                  <Image source={cat.image} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Best Sellers & Offers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Sellers & Offers</Text>
          <View style={styles.offerCard}>
            <Text style={styles.offerText}>Limited Time Offer</Text>
            <Text style={styles.offerTitle}>Wireless Charging Pad</Text>
            <Text style={styles.offerSub}>Fast charging for all devices</Text>
            <TouchableOpacity style={styles.offerButton}>
              <Text style={{color: '#fff'}}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingTop: 40, paddingHorizontal: Padding.p10},
  header: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20},
  logoImg: {width: 150, height: 60},
  searchContainer: {flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f3f3', borderRadius: 10, paddingHorizontal: 10, marginBottom: 15, height: 40},
  searchInput: {flex: 1, fontSize: 15, color: '#000'},

  // Two top cards
  twoCardsRow: {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20},
  smallCard: {width: '48%', backgroundColor: '#f6f6f6', borderRadius: 12, padding: 10, alignItems: 'center'},
  smallCardImage: {width: '100%', height: 120, borderRadius: 10, marginBottom: 10},
  smallCardTitle: {fontSize: 14, fontWeight: '600', textAlign: 'center'},

  // Section titles
  section: {marginBottom: 20},
  sectionTitle: {fontWeight: 'bold', fontSize: fontSize.sm, marginBottom: 10},

  // Categories
  categoryItem: {alignItems: 'center', marginRight: 15},
  categoryCircle: {width: 70, height: 70, borderRadius: 35, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center'},
  categoryImage: {width: 40, height: 40},
  categoryText: {fontSize: 12, textAlign: 'center', marginTop: 5},

  // Best offers
  offerCard: {backgroundColor: '#e3f2fd', borderRadius: 12, padding: 15, alignItems: 'flex-start'},
  offerText: {color: '#777', fontSize: 12, marginBottom: 5},
  offerTitle: {fontSize: 16, fontWeight: 'bold', marginBottom: 5},
  offerSub: {fontSize: 13, color: '#555', marginBottom: 10},
  offerButton: {backgroundColor: '#000', borderRadius: 8, paddingHorizontal: 15, paddingVertical: 8},
});
