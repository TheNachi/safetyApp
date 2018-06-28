import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button1 = ({ onPress, children }) => {

    const { buttonStyle, testStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={testStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        backgroundColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 30,
        width: '35%'
        
    },
    testStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }

};

export default Button1;
