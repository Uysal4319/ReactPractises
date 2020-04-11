/*
Ekranların ekleneceği sayfa
*/
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MenuScreen from '../screens/MenuScreen';
import GameScreen from '../screens/GameScreen';


const AppNavigator = createStackNavigator(
  {
    Menu: MenuScreen,
    Game: GameScreen,
  },
  {
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
