import React from 'react';
import { View } from 'react-native';
import styles from '../../StyleSheet';

export const AppointmentHeader = (props) => {
    return (
        <View
            style={{ padding: 15, flex: 1,alignItems: 'center',
                justifyContent: 'center', borderTopRightRadius: 5,borderTopLeftRadius: 5, backgroundColor: '#005EB8'}}>
            <View style = {styles.appointmentHeaderContainer}>
                {props.children}
            </View>
        </View>

    );
}