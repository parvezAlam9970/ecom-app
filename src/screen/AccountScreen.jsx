import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const AccountScreen = ({ navigation }) => {
  const menuItems = [
    { title: 'Profile', screen: 'Profile' },
    { title: 'Orders', screen: 'Orders' },
    { title: 'Contact Us', screen: 'Contact' },
    { title: 'Help & Support', screen: 'HelpSupport' },
    { title: 'Terms & Conditions', screen: 'Terms' },
    { title: 'Privacy Policy', screen: 'Privacy' },
    { title: 'Chat', screen: 'Chat' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        {menuItems.slice(0, 2).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.menuText}>{item.title}</Text>
            <Icon name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        {menuItems.slice(2).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.menuText}>{item.title}</Text>
            <Icon name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#000' },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#000' },
  menuItem: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  menuText: { fontSize: 15, color: '#000' },
  logoutButton: {
    backgroundColor: '#eee',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: { color: '#000', fontSize: 16, fontWeight: 'bold' },
});
