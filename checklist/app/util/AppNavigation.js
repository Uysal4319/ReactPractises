/*
Ekranların ekleneceği sayfa
*/
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ListScreen from '../screens/ListScreen';
import LoginPage from '../screens/LoginPage';


const AppNavigator = createStackNavigator(
  {
    List: ListScreen,
    Login: LoginPage,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
