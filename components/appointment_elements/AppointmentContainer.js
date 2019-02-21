import React from 'react';
import { View } from 'react-native';
import styles from '../../StyleSheet';

export const AppointmentContainer = (props) => {
    return (
        <View style = {styles.appointmentCardContainer}>
            {props.children}   
        </View>
    );
}