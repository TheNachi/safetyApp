import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class ActivityPage extends Component {

  render() {
    return (
        <View>
            <Header />
            <SafetyFirst />
            <Text>ACTIVITY PAGE</Text>
        </View>
    );  
  }
}

export default ActivityPage;