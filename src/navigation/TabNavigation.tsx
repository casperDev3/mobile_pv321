import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ChatScreen from '../screens/ChatScreen';
import Pacman from '../components/Pacman.tsx';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#090808',
        headerShown: false,
      }}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'About'} component={AboutScreen} />
      <Tab.Screen name={'Chat'} component={ChatScreen} />
      <Tab.Screen name={'Pacman'} component={Pacman} />
    </Tab.Navigator>
  );
};

export default BottomTab;
