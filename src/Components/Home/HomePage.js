import React, { Component} from 'react';
import { View, Text } from 'react-native';
import Header from '../Common/Header';

class HomePage extends Component {

    render() {
        return (
            <View>
                <Header />
                <Text>This is Login Page for now</Text>
            </View>
        );
    }
}

export default HomePage;