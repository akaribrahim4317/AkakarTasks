import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native';
import CustomButton from '../components/CustomButton';
import NewTask from './NewTask';


const AdminScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Admin Screen</Text>
        <CustomButton title={'Add a new task'} onPress={openModal} />
        <Modal
        presentationStyle = 'formSheet'
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <NewTask onClose={closeModal} />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
});
