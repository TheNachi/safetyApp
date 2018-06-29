import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class ProfilePage extends Component {

  render() {
    return (
        <View>
            <Header />
            <SafetyFirst />
            <Text>PROFILE PAGE</Text>
        </View>
    );  
  }
}

export default ProfilePage;