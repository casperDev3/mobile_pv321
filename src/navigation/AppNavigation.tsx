import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/HomeScreen.tsx';
import AboutScreen from '../screens/AboutScreen.tsx';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="About" component={AboutScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
