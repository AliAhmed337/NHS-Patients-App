import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    const {viewStyle, textStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );

};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        shadowColor: '#000',

    },
    textStyle:{
        fontSize:30
    }

}

export default Header;