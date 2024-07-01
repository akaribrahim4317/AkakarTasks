import React from 'react';
import { StyleSheet , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


// Screens
import AdminScreen from '../screens/AdminScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TasksScreen from '../screens/TasksScreen';
import Notifications from '../screens/Notifications';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ }) => ({
       
         headerShown: false,

        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: () => <Icon name="person-outline" size={25} />}} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Notifications" component={Notifications} options={{tabBarBadge: 3}} />
    </Tab.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
