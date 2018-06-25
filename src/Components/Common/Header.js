import React from 'react';
import { Image, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <Image 
                style={styles.thumbnailStyle}
                source={require('../../Assets/logo.png')} 
            />
        </View>
    );
}

const styles = {
    textStyle: {
        fontSize: 20,
    },
    thumbnailStyle: {
        height: 40,
        width: 70
    }, 
    viewStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2 
        },
        shadowOpacity: 0.2, 
        elevation: 2,
        position: 'relative'
    }
};
 
export default Header;
