import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Form, Textarea } from 'native-base';
import PhotoUpload from 'react-native-photo-upload'
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';
import Button1 from '../Common/Button1';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SubmitPage extends Component {

    render() {
        return (
            <View style={{flex: 1 }}>
                <Header onPress={() => this.props.navigation.navigate('report')} />
                <SafetyFirst />
                <ScrollView style={{ paddingLeft: 15, paddingRight: 10, flexGrow: 1 }} scrollEnabled >
                    <View>
                        <Text style={{ fontSize: 22, }}>
                            Report Incident
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: '800'}}>
                            Add photos from the situation
                        </Text>
                        <Text style={{ color: 'red', backgroundColor: 'transparent', marginTop: -10 }}>
                            ________________________________________________
                        </Text>
                        <Text style={{ fontSize: 19, paddingTop: 10 }}>
                            Packaging Hall - Line 6
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{ backgroundColor: '#fff', height: 150, width: 150, margin: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                            >
                            <PhotoUpload>
                                <Image
                                    style={{ paddingVertical: 30, width: 130, height: 130,  }}
                                    resizeMode='cover'
                                    source={{
                                    uri: 'https://png.icons8.com/ios/1600/camera.png'
                                    }}
                                />
                            </PhotoUpload>
                        </View>
                        <View
                            style={{ backgroundColor: '#fff', height: 150, width: 150, margin: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                            >
                            <PhotoUpload>
                                <Image
                                    style={{ paddingVertical: 30, width: 130, height: 130,  }}
                                    resizeMode='cover'
                                    source={{
                                    uri: 'https://png.icons8.com/ios/1600/camera.png'
                                    }}
                                />
                            </PhotoUpload>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, }}>
                        Potential Effect
                    </Text>
                    <View>
                        <CheckBox 
                            title='Injury/Fatality'
                        />
                        <CheckBox 
                            title='Property Damage'
                        />
                        <CheckBox 
                            title='Environment'
                        />
                        <CheckBox 
                            title='Fire/Explosion'
                        />
                        <CheckBox 
                            title='Others(specify)'
                        />
                    </View>
                    <Text style={{ fontSize: 18, }}>
                        Describe Incident
                    </Text>
                    <Form>
                        <Textarea rowSpan={5} bordered placeholder="Start typing here" />
                    </Form>
                    <Button1>
                        Submit 
                    </Button1>
                </ScrollView>
            </View>
        )
    }
}

export default SubmitPage;