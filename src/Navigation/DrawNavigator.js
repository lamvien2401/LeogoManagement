import React, { Component } from 'react';
import {DrawerNavigator} from 'react-navigation';



const Menu = DrawerNavigator({
    Home: {Screen : Home},
    Profile: {Screen: Profile}   
  })

export default DrawerNavigator;