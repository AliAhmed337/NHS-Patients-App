import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {AppointmentDetail} from "../appointment_elements";



const Button = (props) => {

    return (

        <TouchableOpacity style={[styles.buttonBody, {backgroundColor: props.backgroundColor}, {width: props.width},{height:props.height}, {padding: props.padding}]} onPress = {props.onPress} >
            <Ionicons name={props.name} size={props.size} color={props.color}></Ionicons>
            <Text style={[styles.buttonText,{color: props.color}]}>{props.children}</Text>
        </TouchableOpacity>

    )

}

const styles = ({
    buttonBody: {


        alignItems: 'center',
        borderRadius: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
    }


})
export default Button;