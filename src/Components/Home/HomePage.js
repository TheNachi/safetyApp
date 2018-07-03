import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';



class HomePage extends Component {

  render() {
    return (
        <View style={{ flex: 1, display: 'flex' }}>
          <Header onPress={() => this.props.navigation.navigate('login')} />
          <SafetyFirst />
            <View style={{ backgroundColor: 'red', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', padding: 12 }}>
              <View>
                <Icon name='file-document' size={40} color='white' />
              </View>
              <View>
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }} >
                  3 INCIDENTS
                </Text>
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }} >
                  2 EMERGENCIES
                </Text>
              </View>
            </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1, display: 'flex', flexWrap: 'wrap', marginTop: 50 }}>
            <TouchableOpacity 
              style={{ backgroundColor: '#000', height: 150, width: 150, margin: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('safetyRules')}
              >
              <Icon name='file-document' size={80} color='white' />
              <Text style={{ color: 'white', fontSize: 20 }}>
                Safety Rules
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{ backgroundColor: '#000', height: 150, width: 150, margin: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('hseSymbols')}
              >
              <Icon name='shape-plus' size={80} color='white' />
              <Text style={{ color: 'white', fontSize: 20 }}>
                HSE Symbols
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#000', height: 150, width: 150, margin: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='worker' size={80} color='white' />
              <Text style={{ color: 'white', fontSize: 20 }}>
                PPE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#000', height: 150, width: 150, margin: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='vlc' size={80} color='white' />
              <Text style={{ color: 'white', fontSize: 20 }}>
                Safety Habits
              </Text>
            </TouchableOpacity>
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

// <View style={{ height: '100%', flexDirection: 'column', borderStyle: 'solid', borderColor: 'black', borderWidth: 2, }}>
//               <View style={{ flexDirection: 'row', borderStyle: 'solid', borderColor: 'black', borderWidth: 2, flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
//                 <TouchableOpacity
//                   style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: 2, margin: 7, marginTop: -90 }}
//                   onPress={() => this.props.navigation.navigate('hseSymbols')}
//                 >
//                   <Image 
//                     style={{ height: 130, width: 130, }}
//                     source={require('../../Assets/boss.png')} 
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: 2, margin: 7, marginTop: -90 }}
//                   onPress={() => this.props.navigation.navigate('safetyRules')}
//                 >
//                   <Image 
//                     style={{ height: 130, width: 130, }}
//                     source={require('../../Assets/paper.png')} 
//                   />
//                 </TouchableOpacity>
//                 <Divider style={{ backgroundColor: 'blue' }} />
//               </View>
//             </View>