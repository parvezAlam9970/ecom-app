import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export const orders = [
  { id: '1', number: '789012', date: '12/15/23', status: 'Delivered', image: require('../assets/prod1.jpg') },
  { id: '2', number: '345678', date: '11/20/23', status: 'Cancelled', image: require('../assets/prod3.jpg') },
  { id: '3', number: '901234', date: '10/05/23', status: 'Delivered', image: require('../assets/prod1.jpg') },
  { id: '4', number: '567890', date: '09/10/23', status: 'Delivered', image: require('../assets/prod2.jpg') },
];

const OrderListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('OrderDetail', { orderId: item.id })}>
      <Image source={item.image} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.orderNumber}>Order number: {item.number}</Text>
        <Text style={styles.date}>Order date: {item.date}</Text>
        <Text style={[styles.status, item.status === 'Cancelled' && styles.cancelled]}>{`Status: ${item.status}`}</Text>
      </View>
      <Icon name="chevron-right" size={20} color="#000" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default OrderListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 16 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: { width: 50, height: 50, borderRadius: 6, marginRight: 12 },
  orderNumber: { fontSize: 14, fontWeight: 'bold', color: '#000' },
  date: { fontSize: 13, color: '#666', marginTop: 2 },
  status: { fontSize: 13, color: 'green', marginTop: 2 },
  cancelled: { color: 'red' },
  separator: { height: 10 },
});
