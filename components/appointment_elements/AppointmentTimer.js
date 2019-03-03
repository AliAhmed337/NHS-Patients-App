import React from 'react';
import { View } from 'react-native';
import styles from '../../StyleSheet';

export const AppointmentTimer = (props) => {
    return (
        <View style = {styles.appointmentTimerContainer}>
            {props.children}   
        </View>
    );
}