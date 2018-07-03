import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Form, Picker, Icon } from 'native-base';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';
import Button from '../Common/Button1'

class ReportPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  onSuccess(e) {
    this.props.navigation.navigate('submit')
  }


  render() {
    return (
        <View style={{ flex: 1}}>
            <Header style={{ flex: 1}}/>
            <SafetyFirst style={{ flex: 1}}/>
            <ScrollView>
              <View style={{ padding: 5, flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 10,  marginLeft: 5, marginBottom: 10 }}> SCAN THE QR CODE</Text>
                <QRCodeScanner
                  onRead={this.onSuccess.bind(this)}
                />
              </View>
              <Form>
              <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 10, marginLeft: 5 }}> OR Select desired location below</Text>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  placeholder="Select Incident Location"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  style={{ width: undefined }}
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Packaging Hall" value="key0" />
                  <Picker.Item label="Main Auditorium" value="key1" />
                  <Picker.Item label="Warehouse" value="key2" />
                  <Picker.Item label="Machine Room" value="key3" />
                  <Picker.Item label="Operations Office" value="key4" />
                </Picker>
              </Form>
              <Button style={{ flex: 1}} onPress={() => this.props.navigation.navigate('submit')}>
                      GO TO SUBMIT
              </Button>
            </ScrollView>
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