import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class MapPage extends Component {

  render() {
    return (
        <View>
            <Header />
            <SafetyFirst />
            <Text>MAP PAGE</Text>
        </View>
    );  
  }
}

export default MapPage;