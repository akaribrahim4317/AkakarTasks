import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../utils';
import { navigate } from '../utils/navigation.util';
import { Colors, Users } from '../constants';


const HomeScreen: React.FC = () => {



  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5) }} >
        <Text style={styles.title} >Çalışan Listesi</Text>
        <TouchableOpacity onPress={() => navigate('AddScreen')} style={styles.imageContainer} >
          <Image source={require('../../assets/images/add.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={Users}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => { console.log(item.firstName) }} style={styles.userContainer} >
            <Text style={styles.user} >{item.firstName} {item.lastName} </Text>
            <Text style={styles.user} > Tamamladı: {item.tasksCompleted} / {item.tasks}</Text>
          </TouchableOpacity>}
      />
    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: Colors.DARKBLUE,
    alignSelf: 'center',
  },
  image: {
    width: wp('10%'),
    height: wp('10%'),
    tintColor: Colors.PRIMARY,

  },
  imageContainer: {
    padding: 10,
    alignSelf: 'flex-end',
    borderRadius: 30,
    alignItems: 'center'
  },
  user: {
    fontSize: 20,
    color: Colors.WHITE
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    alignSelf: 'flex-start',
    borderRadius: 8,
    marginHorizontal: wp(5),
    marginVertical: hp(1),
    width: wp('90%'),
    height: hp(10),
    marginBottom: 5,
    backgroundColor: Colors.PRIMARY,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
