import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { orders } from './OrderListScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrderDetailScreen = () => {
  return (

    <ScrollView style={styles.container}>
      {/* Order Summary */}
      <Text style={styles.heading}>Order Summary</Text>
      <Text style={styles.label}>Placed on July 20, 2024</Text>
      <Text style={styles.subLabel}>Order #1234567890</Text>

      <Text style={[styles.label, { marginTop: 10 }]}>Delivered</Text>
      <Text style={styles.subLabel}>Delivered on July 22, 2024</Text>

      <Text style={[styles.label, { marginTop: 10 }]}>Total: $49.99</Text>
      <Text style={styles.subLabel}>1 item</Text>

      {/* Tracking */}
      <Text style={styles.heading}>Tracking</Text>

      <View style={styles.timelineItem}>
        <Ionicons name="checkmark-done" size={24} color="green" style={styles.icon} />
        <View>
          <Text style={styles.timelineLabel}>Delivered</Text>
          <Text style={styles.subLabel}>July 22, 2024</Text>
        </View>
      </View>

      <View style={styles.timelineItem}>
        <FontAwesome5 name="truck" size={20} color="#000" style={styles.icon} />
        <View>
          <Text style={styles.timelineLabel}>Out for Delivery</Text>
          <Text style={styles.subLabel}>July 22, 2024</Text>
        </View>
      </View>

      <View style={styles.timelineItem}>
        <MaterialIcons name="local-shipping" size={24} color="#000" style={styles.icon} />
        <View>
          <Text style={styles.timelineLabel}>Shipped</Text>
          <Text style={styles.subLabel}>July 21, 2024</Text>
        </View>
      </View>

      {/* Items */}
      <Text style={styles.heading}>Items</Text>
     {orders?.map((item) => (
        <View key={item.id} style={styles.itemRow}>
          <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>Iphone 16</Text>
            <Text style={styles.subLabel}>Quantity: 2</Text>
          </View>
        </View>
      ))}

     
    </ScrollView>

  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom : 30,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
  },
 
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  timelineLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    marginRight: 12,
  },
 

   itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 2,
  },
  subLabel: {
    fontSize: 14,
    color: '#555',
  },
 
});
