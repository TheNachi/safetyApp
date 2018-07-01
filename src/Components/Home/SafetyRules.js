import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { List, ListItem, Left, Thumbnail, Body, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class SafetyRules extends Component {

  render() {
    return (
      <View>
        <Header />
        <SafetyFirst />
        <ScrollView>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='file-document' size={40} color='black' style={{ marginTop: 5 }} />
            <Text style={{ fontSize: 22, marginTop: 5, paddingLeft: 5 }}>
              Safety Rules
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 13, marginTop: 10 }}>
              Select one of the topics below to read more.
            </Text>
            <Text style={{ color: 'red', marginTop: -10, backgroundColor: 'transparent'}}>
              ___________________________________________________
            </Text>
          </View>
          <List style={{ paddingTop: 10, marginRight: 5 }}>
            <ListItem avatar>
              <Left>
                <Icon name='checkbox-marked' size={40} color='black' style={{ marginTop: 5 }} />
              </Left>
              <Body>
                <Text>Permit to Work</Text>
              </Body>
            </ListItem>
          </List>
        </ScrollView>
      </View>
    );  
  }
}

export default SafetyRules;