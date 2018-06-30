import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';

class ProfilePage extends Component {

  render() {
    return (
        <View>
            <Header />
            <SafetyFirst />
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 30,  }} >
              <Image 
              style={{ height: 120, width: 120, padding: 20, }}
              source={require('../../Assets/user.png')} 
              />
              <Text style={{ paddingTop: 10, fontSize: 20  }}>
                TOFUNMI SAMUEL
              </Text>
              <Text style={{ paddingTop: 10, fontSize: 14 }}>
                Staff ID: 4420  Dept: ICT
              </Text>
            </View>
            <View style={{ paddingTop: 30, paddingLeft: 30 }}>
              <Text style={{ fontSize: 13, marginTop: 10 }}>
                History
              </Text>
              <Text style={{  }}>
                _____________________________________________________
              </Text>
            </View>
            <View style={{ paddingLeft: 30  }}>
              <Text style={{ fontSize: 13, marginTop: 10 }}>
               Packaging Hall - Line 6
              </Text>
              <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ fontSize: 10, marginTop: 10, flex: 1, alignSelf: 'center' }}>
                11/09/2018 - 3:18pm
                </Text>
                <Text style={{ fontSize: 13, paddingLeft: 10, marginTop: 10, flex: 1, alignSelf: 'center'  }}>
                Environment
                </Text>
                <Text style={{ fontSize: 13, marginTop: 10, flex: 1, alignSelf: 'center'  }}>
                Pending
                </Text>
              </View>
            </View>
        </View>
    );  
  }
}

export default ProfilePage;