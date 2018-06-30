import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';
import Button from '../Common/Button1'

class ReportPage extends Component {

  render() {
    return (
        <View>
            <Header />
            <SafetyFirst />
            <Text>REPORT PAGE</Text>
            <Button onPress={() => this.props.navigation.navigate('submit')}>
                    GO TO SUBMIT
            </Button>
        </View>
    );  
  }
}

export default ReportPage;