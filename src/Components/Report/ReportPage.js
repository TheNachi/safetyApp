import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class ReportPage extends Component {

  render() {
    return (
        <View>
            <Header />
            <SafetyFirst />
            <Text>REPORT PAGE</Text>
        </View>
    );  
  }
}

export default ReportPage;