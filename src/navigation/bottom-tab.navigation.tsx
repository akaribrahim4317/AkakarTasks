/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '../screens';
import { BottomTabStack } from './types';
import { Image, StyleSheet } from 'react-native';
import { Colors, Images } from '../constants';
import { wp } from '../utils';
import Icon from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator<BottomTabStack>();

const BottomTab = () => {
  const notifications = 0;
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerShadowVisible: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.DARKBLUE,
      }}>
      <Tab.Screen
        name="Home"
        component={Screens.HomeScreen}
        options={{
          headerTitle: () => <Image source={Images.LOGO} style={styles.logo} />,
          tabBarIcon: ({ focused }) => (
            <Icon
              size={wp('6.11%')}
              name="home"
              color={focused ? Colors.PRIMARY : Colors.DARKBLUE}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Screens.ProfileScreen}
        options={{
          headerTitle: () => <Image source={Images.LOGO} style={styles.logo} />,
          tabBarIcon: ({ focused }) => (
            <Icon
              size={wp('6.11%')}
              name="person"
              color={focused ? Colors.PRIMARY : Colors.DARKBLUE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Screens.NotificationScreen}
        options={{
          tabBarBadge: notifications,
          headerTitle: () => <Image source={Images.LOGO} style={styles.logo} />,
          tabBarIcon: ({ focused }) => (
            <Icon
              size={wp('6.11%')}
              name="bell"
              color={focused ? Colors.PRIMARY : Colors.DARKBLUE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Screens.tasksScreen}
        options={{
          tabBarBadge: notifications,
          headerTitle: () =>

            <Image source={Images.LOGO} style={styles.logo} />,
          tabBarIcon: ({ focused }) => (
            <Icon
              size={wp('6.11%')}
              name="person"
              color={focused ? Colors.PRIMARY : Colors.DARKBLUE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
  },
  logo: {
    width: wp('30%'),
    height: wp('30%'),
    resizeMode: 'contain',
  },
  settings: {
    width: wp('8%'),
    height: wp('8%'),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: wp('5%'),
    color: Colors.DARKBLUE,
  },
  share: {
    width: wp('6%'),
    height: wp('6%'),
    resizeMode: 'contain',
  },
  headerCustomer: { alignItems: 'center', justifyContent: 'flex-end' },
});
export default BottomTab;
