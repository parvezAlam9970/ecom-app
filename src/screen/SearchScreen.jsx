import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {products} from '../constants/dummyData';
import ProductCard from '../components/custom/ProductCard';
import CustomTouchableOpacity from '../components/custom/CustomTouchableOpacity ';

const filters = [
  'All',
  'Laptop',
  'Mouse',
  'Keyboard',
  'Headphones',
  'Monitor',
  'Charger',
];

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon
          name="search"
          size={20}
          color="#888"
          style={{marginHorizontal: 8}}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={'black'}
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText('')}>
            <Icon
              name="x-circle"
              size={20}
              color="#aaa"
              style={{marginHorizontal: 8}}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Filter Tabs */}
      <FlatList
        data={filters}
        horizontal
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
        renderItem={({item}) => (
          <CustomTouchableOpacity onPress={() => setSelectedFilter(item)}>
            <View
              style={[
                styles.filterTab,
                selectedFilter === item && styles.activeFilterTab,
              ]}>
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === item && styles.activeFilterText,
                ]}>
                {item}
              </Text>
              {selectedFilter === item && <View style={styles.activeLine} />}
            </View>
          </CustomTouchableOpacity>
        )}
      />

      {/* Product Grid */}
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <ProductCard item={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />} 

      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingHorizontal: 16},
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 4,
    marginTop: 16,
    marginBottom: 12,
  },
  searchInput: {flex: 1, paddingVertical: 10, fontSize: 16},
  filterContainer: {paddingVertical: 10},
  filterTab: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  filterText: {color: '#333', fontSize: 14},
  activeFilterTab: {
    backgroundColor: '#e6e6e6',
  },
  activeFilterText: {color: '#000', fontWeight: 'bold'},
  activeLine: {
    marginTop: 4,
    height: 2,
    width: '80%',
    backgroundColor: '#000',
    borderRadius: 1,
  },
  productList: {
    paddingVertical: 10,
    paddingBottom: 100,
  },
});
