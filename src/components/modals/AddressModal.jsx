import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTouchableOpacity from '../custom/CustomTouchableOpacity '

const AddressModal = (
    {showAddressModal ,setShowAddressModal}
) => {
  return (
     <Modal visible={showAddressModal} animationType="slide" transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Add New Address</Text>
                {/* You can replace this with a full form */}
                <CustomTouchableOpacity 
                  style={styles.addButton} 
                  onPress={() => addNewAddress({ label: 'New', address: '789 Pine Street, Anytown, USA' })}
                >
                  <Text style={styles.addButtonText}>Save Address</Text>
                </CustomTouchableOpacity>
                <CustomTouchableOpacity onPress={() => setShowAddressModal(false)}>
                  <Text style={{ textAlign: 'center', color: 'red', marginTop: 10 }}>Cancel</Text>
                </CustomTouchableOpacity>
              </View>
            </View>
          </Modal>
  )
}

export default AddressModal

const styles = StyleSheet.create({
      modalContainer: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.3)' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  addButton: { backgroundColor: '#000', padding: 12, borderRadius: 8, alignItems: 'center' },
  addButtonText: { color: '#fff', fontWeight: '600' },
})