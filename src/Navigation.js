import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Splash from './Splash';
import Login from './Components/Login/Login';
import HomePage from './Components/Home/HomePage';

const IntroStack = StackNavigator({ 
    splash:     { screen: Splash },
    login:      { screen: Login },
    home:       { screen: HomePage },
     }, 
    { headerMode: 'none' })

const Navigation = StackNavigator({ 
    IntroStack: { screen: IntroStack }
},
    { headerMode: 'none' })

export default Navigation;