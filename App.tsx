import React from 'react';
import HomeScreen from './src/screens/HomeScreen.tsx';
import AppNavigation from './src/navigation/AppNavigation.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      {/*<NavigationContainer>*/}
        <HomeScreen />
        {/*<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>*/}
        {/*  <AppNavigation />*/}
        {/*</SafeAreaView>*/}
      {/*</NavigationContainer>*/}
    </>
  );
}

export default App;
