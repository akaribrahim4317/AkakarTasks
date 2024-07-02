import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import Screens from '../screens';

const Tab = createBottomTabNavigator();

const UserTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Profile" component={Screens.ProfileScreen} options={{ tabBarIcon: () => <Icon name="person-outline" size={25} /> }} />
      <Tab.Screen name="Tasks" component={Screens.TasksScreen} />
      <Tab.Screen name="Notifications" component={Screens.NotificationsScreen} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  );
};

const AdminTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Admin" component={Screens.AdminScreen} options={{ tabBarIcon: () => <Icon name="shield-outline" size={25} /> }} />
      <Tab.Screen name="Profile" component={Screens.ProfileScreen} options={{ tabBarIcon: () => <Icon name="person-outline" size={25} /> }} />
      <Tab.Screen name="Notifications" component={Screens.NotificationsScreen} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  );
};

const MainNavigation = () => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      // Simulate fetching user role
      const role = await getUserRoleFromAPI(); // Replace with your API call
      setIsAdmin(role === 'admin');
    };

    fetchUserRole();
  }, []);

  if (isAdmin === null) {
  
    return null
  }

  return (
    <NavigationContainer>
      {isAdmin ? <AdminTabs /> : <UserTabs />}
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});


const getUserRoleFromAPI = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('user');
    }, 1000);
  });
};
