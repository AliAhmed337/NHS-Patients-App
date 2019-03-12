import React from 'react';
import { View } from 'react-native';
import styles from '../../StyleSheet';

export const AppointmentBody = (props) => {
    return (
        <View style = {styles.appointmentBodyContainer}>
            {props.children}   
        </View>
    );
}