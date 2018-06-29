import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class SafetyRules extends Component {

  render() {
    return (
        <View>
            <Header />
            <SafetyFirst />
            <Text>SafetyRules</Text>
        </View>
    );  
  }
}

export default SafetyRules;