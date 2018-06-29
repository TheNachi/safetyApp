import React from 'react';
import { View, Text } from 'react-native';

const SafetyFirst = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                SAFETY FIRST
            </Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: 'red',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
    }
}

export default SafetyFirst;

