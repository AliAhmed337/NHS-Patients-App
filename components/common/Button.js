import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {AppointmentDetail} from "../appointment_elements";



const Button = (props) => {

    return (

        <TouchableOpacity style={[styles.buttonBody, {backgroundColor: props.backgroundColor}, {width: props.width},{height:props.height}, {padding: props.padding}]} onPress = {props.onPress} >
            
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
                <Ionicons name={props.name} size={props.size} color={props.color} style={[styles.buttonImg]}></Ionicons>
                <Text style={[styles.buttonText,{color: props.color}]}>{props.children}</Text>
            </View>
            
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