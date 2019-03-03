import React from 'react';
import { View } from 'react-native';
import styles from '../../StyleSheet';

export const AppointmentDetail = (props) => {
    return (
        <View style = {styles.appointmentDetailContainer}>
            {props.children}   
        </View>
    );
}