import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {AppointmentDetail} from "../appointment_elements";



const Button = (props) => {

    return (

        <TouchableOpacity style={[styles.buttonBody, {backgroundColor: props.backgroundColor}]} onPress = {props.onPress} width = {props.width} height={props.height}>
            <Ionicons name={props.name} size={props.size} color={props.color}></Ionicons>
            <Text style={[styles.buttonText,{color: props.color}]}>{props.children}</Text>
        </TouchableOpacity>

    )

}

const styles = ({
    buttonBody: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
    }


})
export default Button;