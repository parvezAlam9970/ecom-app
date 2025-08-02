import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCard from '../custom/ProductCard';
import {products} from '../../constants/dummyData';
import { fontSize } from '../../constants/theam';

const RelatedProduct = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Related Products</Text>
      <FlatList
        data={products}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({item}) => <ProductCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 10}}
      />{' '}
    </View>
  );
};

export default RelatedProduct;

const styles = StyleSheet.create({
  sectionTitle: {fontWeight: 'bold', fontSize: fontSize.sm, marginBottom: 10},
});
