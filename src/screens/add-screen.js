import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button} from '../components';
import {Colors} from '../constants';
import {wp, hp} from '../utils';
import {Users} from '../constants';

const AddScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm();

  const [modalVisible, setModalVisible] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);

  const submit = data => {
    console.log(data);
    setModalVisible(true);
  };

  const selectUser = user => {
    setValue('user', user);
    setUserModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Controller
        name="title"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Title"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        rules={{required: true}}
        defaultValue=""
      />
      <Controller
        name="description"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        rules={{required: true}}
        defaultValue=""
      />
      <View>
        <Controller
          name="user"
          control={control}
          render={({field: {value}}) => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.selectUserButton}
                onPress={() => setUserModalVisible(true)}>
                <Text style={styles.selectUserButtonText}>
                  {value
                    ? `${value.firstName} ${value.lastName}`
                    : 'Select User'}
                </Text>
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={userModalVisible}
                onRequestClose={() => {
                  setUserModalVisible(!userModalVisible);
                }}>
                <View style={styles.modalView}>
                  <FlatList
                    data={Users}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.userItem}
                        onPress={() => selectUser(item)}>
                        <Text style={styles.userText}>
                          {item.firstName} {item.lastName} - {item.title}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </Modal>
              <Controller
                name="date"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.dateInput}
                    placeholder="GG-AA-YYYY"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    keyboardType="numeric"
                  />
                )}
                rules={{required: true}}
                defaultValue=""
              />
            </View>
          )}
          defaultValue={null}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit(submit)} />
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderRadius: 8,
    marginTop: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.PRIMARY,
    marginBottom: 10,
    width: wp('90%'),
    height: 50,
    fontSize: 20,
    marginHorizontal: wp('5%'),
    padding: 5,
    backgroundColor: 'white',
  },
  modalView: {
    flex: 1,
    marginTop: 22,
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: 50,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  selectUserButton: {
    marginLeft: wp('5%'),
    marginBottom: 20,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.PRIMARY,
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY,
    width: wp('40%'),
  },
  selectUserButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  userItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    margin: 4,
    borderRadius: 10,
  },
  userText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  dateInput: {
    marginHorizontal: wp('5%'),
    marginBottom: 20,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.PRIMARY,
    borderRadius: 8,
    width: wp('45%'),
  },
});
