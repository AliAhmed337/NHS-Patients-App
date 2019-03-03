import React from 'react';
import { View } from 'react-native';
import styles from '../../StyleSheet';

export const AppointmentHeader = (props) => {
    return (
        <View style = {styles.appointmentHeaderContainer}>
            {props.children}   
        </View>
    );
}