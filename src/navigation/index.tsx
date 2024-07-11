import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

////Screens
import Screens from '../screens';
import { RootStackParamList } from './types';
import { StyleSheet } from 'react-native';
import { Colors } from '../constants';
import { wp } from '../utils';

///Stack
import BottomTab from './bottom-tab.navigation';
import AddScreen from '../screens/add-screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Loading"
        component={Screens.LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Screens.LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabStack"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        screenOptions={{ headerShown: true }}
        name="AddScreen"
        component={AddScreen}
        options={{ headerShown: true, headerTitle: 'Add a new task', headerTitleStyle: { color: Colors.PRIMARY, fontSize: wp('5%') } }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    borderBottomColor: Colors.WHITE,
  },
  logo: {
    width: wp('11%'),
    height: wp('11%'),
    resizeMode: 'contain',
  },
  settings: {
    width: wp('8%'),
    height: wp('8%'),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: wp('5%'),
    color: Colors.BLACK,
  },
  share: {
    width: wp('6%'),
    height: wp('6%'),
    resizeMode: 'contain',
  },
  headerCustomer: { alignItems: 'center', justifyContent: 'flex-end' },
});
