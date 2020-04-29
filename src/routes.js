import * as React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Logo from '~/assets/Imgs/Logo_checkok.png';

// Login
import Login from '~/pages/Login';
import Forgot from '~/pages/Forgot';
import Logged from '~/pages/Logged';
import Credit from '~/pages/Credit';
import CreditoLight from '~/pages/CreditPages/CreditoLight';

const LogoTitle = () => (
  <Image style={{width: 230, height: 50}} source={Logo} />
);

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStatusBarHeight: 10,
            headerTintColor: '#005CA9',
            headerTitleContainerStyle: {
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 10,
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#005CA9',
            },
            headerRightContainerStyle: {
              paddingBottom: 7,
              paddingRight: 20,
            },
          }}
        />
        <Stack.Screen
          name="Logged"
          component={Logged}
          options={{
            headerStatusBarHeight: 10,
            headerLeft: null,
            headerTitleContainerStyle: {
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 10,
            },
            title: 'Logged',
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#005CA9',
            },
            headerRightContainerStyle: {
              paddingBottom: 7,
              paddingRight: 20,
            },
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{
            headerStatusBarHeight: 10,
            headerTintColor: '#005CA9',
            headerLeft: null,
            headerTitleContainerStyle: {
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 10,
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#005CA9',
            },
            headerRightContainerStyle: {
              paddingBottom: 7,
              paddingRight: 20,
            },
          }}
        />
        <Stack.Screen
          name="Credit"
          component={Credit}
          options={{
            headerStatusBarHeight: 10,
            headerTitleContainerStyle: {
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 10,
            },
            headerLeft: null,
            title: 'Crédito',
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#005CA9',
            },
            headerRightContainerStyle: {
              paddingBottom: 7,
              paddingRight: 20,
            },
          }}
        />
        <Stack.Screen
          name="CreditoLight"
          component={CreditoLight}
          options={{
            headerStatusBarHeight: 10,
            headerTitleContainerStyle: {
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 10,
            },
            headerLeft: null,
            title: 'Crédito Light',
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#005CA9',
            },
            headerRightContainerStyle: {
              paddingBottom: 7,
              paddingRight: 20,
            },
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
