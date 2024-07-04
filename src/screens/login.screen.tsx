import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Colors, Images} from '../constants';
import {wp} from '../utils';
import {Input, Button} from '../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={Images.LOGO} style={styles.image} />
        <Input
          text={'Lütfen kullanıcı adınızı giriniz'}
          value={userName}
          setValue={setUserName}
          placeholder={'Kullanıcı Adı'}
        />
        <Input
          text={'Lütfen sifrenizi giriniz'}
          value={password}
          setValue={setPassword}
          placeholder={'Şifre'}
        />
        <Button
          title={'Giriş Yap'}
          onPress={() => navigation.navigate('TabStack')}
          disabled={!userName || !password}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: wp('50%'),
    height: wp('50%'),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
export default LoginScreen;
