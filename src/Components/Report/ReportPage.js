import React, { Component } from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';
import Button from '../Common/Button1'

class ReportPage extends Component {

  onSuccess(e) {
    this.props.navigation.navigate('submit')
  }


  render() {
    return (
        <View style={{ flex: 1}}>
            <Header style={{ flex: 1}}/>
            <SafetyFirst style={{ flex: 1}}/>
            <View style={{ marginTop: 0, flex: 1 }}>
              <QRCodeScanner
                onRead={this.onSuccess.bind(this)}
                topContent={
                  <Text style={styles.centerText}>
                    Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                  </Text>
                }
                bottomContent={
                  <TouchableOpacity style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                  </TouchableOpacity>
                }
              />
            </View>
            <Button style={{ flex: 1}} onPress={() => this.props.navigation.navigate('submit')}>
                    GO TO SUBMIT
            </Button>
        </View>
    );  
  }
}

const styles = {
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
};


export default ReportPage;