import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import 'react-native-gesture-handler';

import Router from './src/navigation/Router';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
