import React from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    appointmentCardContainer: {
        borderWidth: 0,
        elevation: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,

    },

    appointmentHeaderContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 12,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },

    appointmentTitleContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingRight: 10,


    },

    appointmentTimerContainer: {
        justifyContent: 'flex-end',
        paddingBottom: 4,
    },

    appointmentBodyContainer: {
        paddingHorizontal: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#0768C5'



    },

    appointmentDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 5,
        backgroundColor: '#fff',




    },

    appointmentTitleText: {
        fontSize: 16,
        color: 'white',
        paddingRight: 10,
    },

    appointmentTypeText: {
        fontSize: 25,
        fontWeight: '700',
        color: 'white',
    },

    appointmentTimerText: {
        fontSize: 14,
        color: 'white',
    }

})