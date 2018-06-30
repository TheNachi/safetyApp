import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { List, ListItem, Left, Thumbnail, Body, Text } from 'native-base';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class SafetyRules extends Component {

  render() {
    return (
      <View>
      <Header />
      <SafetyFirst />
      <ScrollView>
        <View style={{ alignItems: 'center', }}>
          <Text style={{ fontSize: 24 }}>
            Safety Rules
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 13, marginTop: 10 }}>
            Select one of the topics below to read more.
          </Text>
          <Text style={{ color: 'red', }}>
            _________________________________________________________
          </Text>
        </View>
        <List style={{ paddingTop: 10, }}>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../../Assets/logo.png')} />
            </Left>
            <Body>
              <Text>Stopping unsafe work</Text>
            </Body>
          </ListItem>
        </List>

      </ScrollView>
  </View>
    );  
  }
}

export default SafetyRules;