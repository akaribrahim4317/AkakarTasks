import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';


import Components from '../components'

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
            source={require('../../assets/images/akakarlogo.png')}
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
        <Components.Title title={'Hoşgeldiniz'} />
        <Components.InputBox placeholder={'Kullanıcı Adı'} style={{width: '90%'}} />
        <Components.InputBox  placeholder={'Şifre'} secureTextEntry={true} />

        <Components.CustomButton
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
