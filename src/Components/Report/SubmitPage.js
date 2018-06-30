import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Form, Textarea } from 'native-base';
import Header from '../Common/Header';
import SafetyFirst from '../Common/SafetyFirst';
import Button1 from '../Common/Button1';
import { CheckBox } from 'react-native-elements';

class SubmitPage extends Component {

    render() {
        return (
            <View style={{flex: 1 }}>
                <Header />
                <SafetyFirst />
                <ScrollView style={{ paddingLeft: 15, paddingRight: 10, flexGrow: 1 }} scrollEnabled >
                    <View>
                        <Text style={{ fontSize: 21, }}>
                            Report Incident
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            Add photos from the situation
                        </Text>
                        <Text style={{ color: 'red', }}>
                            ________________________________________________
                        </Text>
                        <Text style={{ fontSize: 19, }}>
                            Packaging Hall - Line 6
                        </Text>
                    </View>
                    <View>
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