import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Home from '../Home';
import Profile from '../Profile';
import { createAppContainer } from 'react-navigation';

const routeConfigs = {
  HomeTab: {
    screen: Home,
    navigationOption: ({navigation}) =>({
      title: 'Trang chủ',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon style={{ color: 'white' }} name="home" size={20} />
    }),
    ProfileTab: {
      screen: Profile,
      navigationOption: ({navigation}) => ({
        title: 'Cá nhân',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon style={{ color: 'white' }} name="home" size={20} />
      })
    }
  }
  };
const TabNavigatorConfig = {
  initialRouteName: 'HomeTab',
  lazy: 'true',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' }
};

const TabMateriaNavigator = createMaterialBottomTabNavigator (routeConfigs, TabNavigatorConfig);

export default createAppContainer(TabMateriaNavigator);

