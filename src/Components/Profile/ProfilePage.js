import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Common/Header';

class ProfilePage extends Component {

  render() {
    return (
        <View>
            <Header />
            <Text>PROFILE PAGE</Text>
        </View>
    );  
  }
}

export default ProfilePage;