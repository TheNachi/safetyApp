import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Input from '../Common/Input';
import Button from '../Common/Button1';

class Login extends Component {

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'white' }}>
                <Image 
                    style={{ height: 110, width: 190, }}
                    source={require('../../Assets/logo.png')} 
                />
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'red', padding: 15 }}>SAFETY FIRST</Text>
                <Text style={{ fontSize: 20, paddingTop: 10 }}>Staff E-mail</Text>
                <Input
                        label="Email" 
                        placeholder="user@gmail.com"
                        // value={this.state.email}    
                        // onChangeText={email => this.setState({ email })}
                />
                <Text style={{ fontSize: 20, paddingTop: 10, marginTop: 5 }}>Password</Text>
                <Input
                    secureTextEntry
                    label="Password" 
                    placeholder="password"
                    // value={this.state.password}    
                    // onChangeText={password => this.setState({ password })}
                />
                <Button onPress={() => this.props.navigation.navigate('homeStack')}>
                    LOGIN
                </Button>
            </View>
        )
    }
}

export default Login;
