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
import {fontSize, Padding} from '../constants/theam';
import {banners, categories, products} from '../constants/dummyData';
import ProductCard from '../components/custom/ProductCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


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

      <View style={styles.searchContainer}>
        <Icon name="search" size={22} color="#aaa" style={{marginRight: 8}} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products"
          placeholderTextColor="#aaa"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 70 + insets.bottom }} // <-- Add this line

      >
        {/* Categories */}
        <View style={{marginTop: 10, marginBottom: 20}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories?.map((cat, idx) => (
              <View key={idx} style={styles.categoryItem}>
                <Image source={cat.image} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{cat.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Banner */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.bannerContainer}>
          {banners?.map((banner, idx) => (
            <Image
              key={idx}
              source={banner.image}
              style={[
                styles.bannerImage,
                idx !== banners.length - 1 && {marginRight: 10},
              ]}
              resizeMode="contain"
            />
          ))}
        </ScrollView>

        <View style={styles.popularContainer}>
          <View
            style={{
              marginBottom: 8,
            }}>
            <Text style={styles.popularTitle}> Popular Products</Text>
          </View>
          <FlatList
          style={{paddingVertical :5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={({item}) => <ProductCard  item={item}/>}
          />
        </View>
         <View style={styles.popularContainer}>
          <View
            style={{
              marginBottom: 8,
            }}>
            <Text style={styles.popularTitle}>Construction materials</Text>
          </View>
          <FlatList
          style={{paddingVertical :5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={({item}) => <ProductCard  item={item}/>}
          />
        </View>


         <View style={styles.popularContainer}>
          <View
            style={{
              marginBottom: 8,
            }}>
            <Text style={styles.popularTitle}>Steels</Text>
          </View>
          <FlatList
          style={{paddingVertical :5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={({item}) => <ProductCard  item={item}/>}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: Padding.p10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 40,
  },
  searchInput: {flex: 1, fontSize: 15, color: '#000'},
  categoryItem: {alignItems: 'center', marginHorizontal: 10},
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 4,
    backgroundColor: '#eee',
  },
  logoImg: {width: 150, height: 60},

  categoryText: {fontSize: 12, textAlign: 'center', width: 70},
  bannerContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bannerImage: {
    width: 350,
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
  },

  popularContainer: {marginTop: 10},
  popularTitle: {fontWeight: 'bold', fontSize: fontSize.sm},

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
});
