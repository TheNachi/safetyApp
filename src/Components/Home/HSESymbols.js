import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { List, ListItem, Left, Thumbnail, Body, Text } from 'native-base';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class HSESymbols extends Component {

  render() {
    return (
        <View>
            <Header />
            <SafetyFirst />
            <ScrollView>
              <View style={{ alignItems: 'center', }}>
                <Text style={{ fontSize: 24 }}>
                  HSE Symbols
                </Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 13, marginTop: 10 }}>
                  Quickly find information about the symbol that you see.
                </Text>
                <Text style={{ color: 'red', }}>
                  ____________________________________________________
                </Text>
              </View>
              <List style={{ paddingTop: 10, }}>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('../../Assets/logo.png')} />
                  </Left>
                  <Body>
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                  </Body>
                </ListItem>
              </List>

            </ScrollView>
        </View>
    );  
  }
}



export default HSESymbols;