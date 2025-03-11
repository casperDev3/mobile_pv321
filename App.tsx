import React from 'react';
// import HomeScreen from './src/screens/HomeScreen.tsx';
// import AppNavigation from './src/navigation/AppNavigation.tsx';
// import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from './src/screens/ChatScreen.tsx';
import {SafeAreaView, StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={'#fff'}
        />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/*  <AppNavigation />*/}
          <ChatScreen />
        </SafeAreaView>
    </>
  );
}

export default App;
