import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { wp } from '../utils';
import { navigate } from '../utils/navigation.util';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('AddScreen')} style={styles.imageContainer} >
        <Image source={require('../../assets/images/add.png')} style={styles.image} />
      </TouchableOpacity>
    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: wp('10%'),
    height: wp('10%'),
    tintColor: 'black',

  },
  imageContainer: {
    padding: 10,
    alignSelf: 'flex-end',
    borderRadius: 30,
    marginHorizontal: wp(5),
  }
});
