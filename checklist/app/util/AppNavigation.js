/*
Ekranların ekleneceği sayfa
*/
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ListScreen from '../screens/ListScreen';
import LoginPage from '../screens/LoginPage';
import MyLoveScreen from '../screens/MyLoveScreen';


const AppNavigator = createStackNavigator(
  {
    List: ListScreen,
    Login: LoginPage,
    MyLove: MyLoveScreen,
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
