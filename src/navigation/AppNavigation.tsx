import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './TabNavigation.tsx';

// screens
import HomeScreen from '../screens/HomeScreen.tsx';
import AboutScreen from '../screens/AboutScreen.tsx';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="BottomTav">
      <Stack.Screen
        name="BottomTav"
        component={BottomTab}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
