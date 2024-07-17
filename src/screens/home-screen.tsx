import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../utils';
import { navigate } from '../utils/navigation.util';
import { Colors, Images, Users } from '../constants';


const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5) }} >
        <Text style={styles.title} >Çalışan Listesi</Text>
        <TouchableOpacity onPress={() => navigate('AddScreen')} style={styles.imageContainer} >
          <Image source={Images.ADD} style={styles.image} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={Users}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => { console.log(item.firstName) }} style={styles.userContainer} >
            <Text style={styles.user} >{item.firstName} {item.lastName} </Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.user} >{item.tasksCompleted}/</Text>
            <Text style={styles.user} >{item.tasks}</Text>
            </View>
          </TouchableOpacity>}
      />
    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  title: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: Colors.DARKBLUE,
    alignSelf: 'center',
  },
  image: {
    width: wp('7%'),
    height: wp('7%'),
    tintColor: Colors.PRIMARY,

  },
  imageContainer: {
    padding: 10,
    alignSelf: 'flex-end',
    borderRadius: 30,
    alignItems: 'center'
  },
  user: {
    fontSize: wp('4%'),
    color: Colors.DARKBLUE,
    fontWeight: '400',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginHorizontal: wp(5),
    marginVertical: hp(1),
    width: wp('90%'),
    marginBottom: 5,
    backgroundColor: Colors.WHITE,
    borderWidth:wp(0.2),
    borderColor:Colors.PRIMARY
  },
});
