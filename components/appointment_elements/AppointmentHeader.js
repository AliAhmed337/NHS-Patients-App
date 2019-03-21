import React from 'react';
import { View } from 'react-native';
import styles from '../../StyleSheet';
import { LinearGradient } from 'expo';

export const AppointmentHeader = (props) => {
    return (
    	 <LinearGradient
          colors={['#3F4EAC', '#06C4FF']} start={[0.0, 0.75]} end={[1.0, 0.5]} locations={[0.1, 1.0]}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
        <View style = {styles.appointmentHeaderContainer}>
            {props.children}   
        </View>
        </LinearGradient>
    );
}