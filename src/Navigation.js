import React from 'react';
import { StackNavigator } from 'react-navigation';
import Splash from './Splash';
import Login from './Components/Login/Login';
import HomePage from './Components/Home/HomePage';

const IntroStack = StackNavigator({ 
    splash:     { screen: Splash },
    login:      { screen: Login },
    home:       { screen: HomePage },

     }, 
    { headerMode: 'none' })

const PrimaryNavigation = StackNavigator(
    { IntroStack: { screen: IntroStack }},
    { headerMode: 'none' })

export default PrimaryNavigation;