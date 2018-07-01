import React from 'react';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.backViewStyle}>
                <Icon name='md-arrow-round-back' size={30} style={styles.iconStyle} />
            </View>
            <View style={styles.thumbnailViewStyle}>
                <Image 
                    style={styles.thumbnailStyle}
                    source={require('../../Assets/logo.png')} 
                />
            </View>
            <View style={styles.iconViewStyle}>
                <Icon name='md-notifications' size={25} style={styles.iconStyle} /> 
                <Icon name='md-search' size={25} style={styles.iconStyle} /> 
             
            </View>
        </View>
    );
}

const styles = {
    textStyle: {
        fontSize: 20,
    },
    thumbnailStyle: {
        height: 50,
        width: 86,
    }, 
    thumbnailViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backViewStyle: {
        flex: 1,
    },
    iconStyle: {
        padding: 10
    },
    iconViewStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        flexDirection: 'row',
        padding: 10
    },
    viewStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2 
        },
        shadowOpacity: 0.2, 
        elevation: 2,
        position: 'relative',
        flexDirection: 'row',
    }
};
 
export default Header;
