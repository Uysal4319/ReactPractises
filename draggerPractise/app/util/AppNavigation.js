/*
Ekranların ekleneceği sayfa
*/
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import ComponentsExample from '../screens/ComponentsExample';

const AppNavigator = createStackNavigator(
    {
        Home: ComponentsExample,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            header: null
        }
    }
);



export default createAppContainer(AppNavigator);
