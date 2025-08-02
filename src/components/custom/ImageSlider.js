import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ImageSlider = ({ images }) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image
            source={typeof item === 'string' ? { uri: item } : item}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}
    />
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  imageContainer: { width, height: 250, backgroundColor: '#f5f5f5' },
  image: { width: '100%', height: '100%' },
});
