import React from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    
    appointmentCardContainer: {
        borderWidth: 2,
        borderColor: '#ffffff',
        // shadowColor: '#000',
        // shadowOffset: {width: 5, height: 10},
        // shadowOpacity: 0.4,
        // shadowRadius: 2,
        elevation: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 10,
    },
    
    appointmentHeaderContainer: {
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        padding: 12,
    },

    appointmentTitleContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    appointmentTimerContainer: {
        justifyContent: 'flex-end',
        paddingBottom: 4,
    },

    appointmentBodyContainer: {
        paddingHorizontal: 10,
    },

    appointmentDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },

    appointmentTitleText: {
        fontSize: 16,
        color: 'black',
    },

    appointmentTypeText: {
        fontSize: 25,
        fontWeight: '700',
        color: 'black',
    },

    appointmentTimerText: {
        fontSize: 14,
        color: 'white',
    }

})