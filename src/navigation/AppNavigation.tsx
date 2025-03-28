import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './TabNavigation.tsx';

// screens
import HomeScreen from '../screens/HomeScreen.tsx';
import AboutScreen from '../screens/AboutScreen.tsx';
import SingleProductScreen from '../screens/SingleProductScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="BottomTav">
      {/* Tabs nav*/}
      <Stack.Screen
        name="BottomTav"
        component={BottomTab}
        options={{headerShown: false}}
      />

      {/* Static nav */}
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

      {/* Dynamic nav */}
      <Stack.Screen
        name="SingleProductScreen"
        component={SingleProductScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
