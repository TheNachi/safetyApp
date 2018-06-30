import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../Common/Header';
import Button1 from '../Common/Button1';
import SafetyFirst from '../Common/SafetyFirst';

class HomePage extends Component {

  render() {
    return (
        <View style={{flex: 1 }}>
          <Header />
          <SafetyFirst />
            <View style={{ height: '100%', flexDirection: 'column', borderStyle: 'solid', borderColor: 'black', borderWidth: 2, }}>
              <View style={{ flexDirection: 'row', borderStyle: 'solid', borderColor: 'black', borderWidth: 2, flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
                <TouchableOpacity
                  style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: 2, margin: 7, marginTop: -90 }}
                  onPress={() => this.props.navigation.navigate('hseSymbols')}
                >
                  <Image 
                    style={{ height: 130, width: 130, }}
                    source={require('../../Assets/boss.png')} 
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: 2, margin: 7, marginTop: -90 }}
                  onPress={() => this.props.navigation.navigate('safetyRules')}
                >
                  <Image 
                    style={{ height: 130, width: 130, }}
                    source={require('../../Assets/paper.png')} 
                  />
                </TouchableOpacity>
              </View>
            </View>
        </View>
    );  
  }
}

styles = {
  buttonViewStyle: {
    flexDirection: 'row',
    width: 400,
    height: 200,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  viewButtonStyle: {
    // flex: 1,
    // width: '30%'
  },
  parentViewStyle: {
    justifyContent: 'center',
    // width: '100%',
    // alignItems: 'center',
  }
}


export default HomePage;
