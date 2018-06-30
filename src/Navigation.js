import React from 'react';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Splash from './Splash';
import Login from './Components/Login/Login';
import HomePage from './Components/Home/HomePage';
import MapPage from './Components/Map/MapPage';
import ReportPage from './Components/Report/ReportPage';
import ActivityPage from './Components/Activity/ActivityPage';
import ProfilePage from './Components/Profile/ProfilePage';
import HSESymbols from './Components/Home/HSESymbols';
import SafetyRules from './Components/Home/SafetyRules';

const homeStack = StackNavigator({
    home: { screen: HomePage },
    hseSymbols: { screen: HSESymbols },
    safetyRules: { screen: SafetyRules },
  
  }, 
  {
    headerMode: 'none',
//     navigationOptions: {
//       headerStyle: { backgroundColor: '#EF8E1F' },
//       title: 'TRIBES!',
//       headerTintColor: 'white',
//       gesturesEnabled: false,
//       headerBackTitle: null,
//       headerTitleStyle: {
//         fontSize: 22,
//         fontWeight: 'bold'
//       }
//     }
  }
);

const tabStack = createBottomTabNavigator({
    homeStack: homeStack,
    activity: ActivityPage,
    report: ReportPage,
    map: MapPage ,
    profile: ProfilePage,
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'activity') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'report') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'map') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'profile') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#EF8E1F',
      inactiveTintColor: 'gray',
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