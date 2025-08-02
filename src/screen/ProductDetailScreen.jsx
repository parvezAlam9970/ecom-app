import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ImageSlider from '../components/custom/ImageSlider';
import ProductInfo from '../components/productDetails/ProductInfo';
import ProductOptions from '../components/productDetails/ProductOptions';
import ProductDescription from '../components/productDetails/ProductDescription';
import ProductActions from '../components/productDetails/ProductActions';
import RelatedProduct from '../components/productDetails/RelatedProduct';


const ProductDetailScreen = ({ route, navigation }) => {
  const { item } = route.params || {};

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useLayoutEffect(() => {
    if (route.params?.headerTitle) {
      navigation.setOptions({ title: route.params.headerTitle });
    }
  }, [navigation, route.params?.headerTitle]);

  if (!item) return <View style={styles.centered}><Text>No product data.</Text></View>;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      <ImageSlider images={item.images || [item.image]} />
      <ProductInfo item={item} />
      <ProductOptions 
        selectedSize={selectedSize} setSelectedSize={setSelectedSize}
        selectedColor={selectedColor} setSelectedColor={setSelectedColor}
      />
      <ProductActions quantity={quantity} setQuantity={setQuantity} />
      <ProductDescription title="Product Description" description={item.description} />
      <RelatedProduct/>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
