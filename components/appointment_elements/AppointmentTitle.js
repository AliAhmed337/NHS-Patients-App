import React from 'react';
import { View } from 'react-native';
import styles from '../../StyleSheet';

export const AppointmentTitle = (props) => {
    return (
        <View style = {styles.appointmentTitleContainer}>
            {props.children}   
        </View>
    );
}