import React from 'react';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import Splash from './Splash';
import Login from './Components/Login/Login';
import HomePage from './Components/Home/HomePage';
import MapPage from './Components/Map/MapPage';
import ReportPage from './Components/Report/ReportPage';
import ActivityPage from './Components/Activity/ActivityPage';
import ProfilePage from './Components/Profile/ProfilePage';
import HSESymbols from './Components/Home/HSESymbols';
import SafetyRules from './Components/Home/SafetyRules';
import SubmitPage from './Components/Report/SubmitPage';

const homeStack = StackNavigator({
    home: { screen: HomePage },
    hseSymbols: { screen: HSESymbols },
    safetyRules: { screen: SafetyRules },
  
  }, 
  {
    headerMode: 'none',
  }
);

const reportStack = StackNavigator({
  report : { screen: ReportPage },
  submit: { screen: SubmitPage }

}, {
  headerMode: 'none',
})

const tabStack = createBottomTabNavigator({
    HOME: homeStack,
    ACTIVITY: ActivityPage,
    REPORT: reportStack,
    MAP: MapPage ,
    PROFILE: ProfilePage,
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HOME') {
          iconName = 'home';
        } else if (routeName === 'ACTIVITY') {
          iconName = 'warning';
        } else if (routeName === 'REPORT') {
          iconName = 'exclamation-circle';
        } else if (routeName === 'MAP') {
          iconName = 'map';
        } else if (routeName === 'PROFILE') {
            iconName = 'user';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    },
  });
  


const IntroStack = StackNavigator({ 
    splash:     { screen: Splash },
    login:      { screen: Login },
     }, 
    { headerMode: 'none' })

const Navigation = StackNavigator({ 
    IntroStack: { screen: IntroStack },
    tabStack:   { screen: tabStack }
},
    { headerMode: 'none' })

export default Navigation;