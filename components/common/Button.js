import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const Button = (props) => {

    return (

        <TouchableOpacity style={[styles.buttonBody, {backgroundColor: props.backgroundColor},{borderRadius: props.borderRadius }, {width: props.width},{height:props.height}, {padding: props.padding}, {paddingBottom: props.paddingBottom}, {paddingLeft: props.paddingLeft}, {borderColor: props.borderColor}]} onPress = {props.onPress} >

            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent:'space-between', flex: 1}}>
                <Ionicons paddingLeft={props.paddingLeft} name={props.name} size={props.size} color={props.color} style={[styles.buttonImg]}/>
                <Text style={[styles.buttonText,{color: props.color},{fontSize: props.fontSize}]}>{props.children}</Text>
                <View></View>
            </View>

        </TouchableOpacity>

    )

}

const styles = ({
    buttonBody: {


        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        shadowColor: '#000',


    },
    buttonText: {
        fontWeight: '600',
    },
    buttonImg: {


    }


})
export default Button;