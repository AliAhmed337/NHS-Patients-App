import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Button = (props) => {

    return (

        <TouchableOpacity style={[styles.buttonBody, {backgroundColor: props.backgroundColor}, {width: props.width},{height:props.height}, {padding: props.padding}, {flexDirection: 'row',alignItems: 'center',}]} onPress = {props.onPress} >
            <Ionicons name={props.name} size={props.size} color={props.color} style={[styles.buttonImg]}></Ionicons>
            {props.loading ? <ActivityIndicator/> : 
            <Text style={[styles.buttonText,{color: props.color}]}>{props.children}</Text>}
        </TouchableOpacity>
    )

}

const styles = ({
    buttonBody: {


        alignItems: 'center',
        borderRadius: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    buttonImg: {
        marginRight: 17
    }


})
export default Button;