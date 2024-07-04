import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Images} from '../constants';
import {navigationUtil, wp} from '../utils';

const LoadingScreen: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      navigationUtil.reset({index: 0, routes: [{name: 'Login'}]});
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.LOGO} style={styles.image} />
      <ActivityIndicator size="small" color={Colors.PRIMARY} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: wp('70%'),
    height: wp('40%'),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default LoadingScreen;
