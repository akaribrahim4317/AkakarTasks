import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Button, Modal, FlatList, Image } from 'react-native';
import DatePicker from 'react-native-date-picker';
import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';

const USERS = [
  {
    id: 1,
    name: 'Ahmet',
    title: 'Developer',
  },
  {
    id: 2,
    name: 'Mehmet',
    title: 'Seller',
  },
  {
    id: 3,
    name: 'Ali',
    title: 'Manager',
  },
];

const NewTask = ({ onClose }) => {
  const [date, setDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
    onClose(); 
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>Enter new task</Text>
        <InputBox placeholder={'New Task'} />

        <Text style={styles.title}>Description</Text>
        <InputBox placeholder={'Description'} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity onPress={() => setOpenModal(true)} style={styles.selectUserButton}>
            <Text style={styles.dateButtonText}>Select User</Text>
          </TouchableOpacity>

          <Modal
            visible={openModal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setOpenModal(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <FlatList
                  data={USERS}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setOpenModal(false)}>
                      <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={styles.userItem}>{item.name}</Text>
                        <Text
                          style={{
                            marginRight: 10,
                            color: 'gray',
                            alignSelf: 'center',
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.id.toString()}
                />
                <Button title="Close" onPress={closeModal} />
              </View>
            </View>
          </Modal>
          <View>
            <TouchableOpacity onPress={() => setOpenDatePicker(true)} style={styles.dateButton}>
              <Text style={styles.dateButtonText}>{date.toDateString()}</Text>
            </TouchableOpacity>

            <DatePicker
              modal
              open={openDatePicker}
              date={date}
              onConfirm={(selectedDate) => {
                setOpenDatePicker(false);
                setDate(selectedDate);
              }}
              onCancel={() => {
                setOpenDatePicker(false);
              }}
            />
          </View>
        </View>
      </View>
      <CustomButton title={'Submit'} onPress={closeModal} />
    </SafeAreaView>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  dateButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dateButtonText: {
    color: 'black',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    marginVertical: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  selectUserButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  userItem: {
    padding: 10,
    fontSize: 18,
    color: 'black',
  },
});
