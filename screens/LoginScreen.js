import {Image, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';
import Title from '../components/Title';

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#000000', justifyContent: 'center'}}>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 100,
          }}>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: '#ed1e24',
              flex: 1,
              padding: 4,
              margin: 4,
            }}></View>
          <Image
            source={require('../assets/images/akakarlogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: 'red',
              flex: 1,
            }}></View>
        </View>
        <Title title={'Hoşgeldiniz'} />
        <InputBox placeholder={'Kullanıcı Adı'} style={{width: '90%'}} />
        <InputBox placeholder={'Şifre'} secureTextEntry={true} />

        <CustomButton
          title={'Giriş Yap'}
          style={{width: '90%', backgroundColor: 'red'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 150,
  },
});
