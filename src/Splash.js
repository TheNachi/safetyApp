import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class Splash extends Component {

    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate('login')
        }, 3000 );

    }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'white' }}>
                <Image 
                    style={{ height: 110, width: 190, }}
                    source={require('../src/Assets/logo.png')} 
                />
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'red', padding: 15 }}>SAFETY FIRST</Text>
            </View>
        );
    }
}


export default Splash