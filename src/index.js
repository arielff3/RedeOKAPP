import React from 'react';

import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/routes';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#005CA9" />
    <Routes />
  </NavigationContainer>
);
export default App;
