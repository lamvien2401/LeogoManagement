import React, { Component } from 'react';
import Login from '../Authenication/Login';
import Home from '../Home';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
    LoginScreen: {
        screen: Login
    },
    HomeScreen: {
        screen: Home
    }
},
    {
        initialRouteName: 'LoginScreen'
    }
)

export default createAppContainer(AppNavigator);
