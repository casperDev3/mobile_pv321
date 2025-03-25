import React from 'react';
// import HomeScreen from './src/screens/HomeScreen.tsx';
// import AppNavigation from './src/navigation/AppNavigation.tsx';
// import {NavigationContainer} from '@react-navigation/native';
// import ChatScreen from './src/screens/ChatScreen.tsx';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen.tsx';
import {Provider} from 'react-redux';
import {store} from './src/store';

// import PacmanGame from "./src/screens/PacmanGame.tsx";

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        {/*<NavigationContainer>*/}
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={'#fff'}
        />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/*<AppNavigation />*/}
          <HomeScreen />
        </SafeAreaView>
        {/*</NavigationContainer>*/}
      </Provider>
    </>
  );
}

export default App;
