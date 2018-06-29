import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class HSESymbols extends Component {

  render() {
    return (
        <View>
            <Header />
            <SafetyFirst />
            <ScrollView>
              <View>
                <Text>
                  HSE Symbols
                </Text>
              </View>
              <View>
                <Text>
                  Quickly find information about the symbol that you see.
                </Text>
                
              </View>
            </ScrollView>
        </View>
    );  
  }
}

export default HSESymbols;