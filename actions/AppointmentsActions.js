import {
    APPOINTMENTS_REQUESTED,
    APPOINTMENTS_RETRIEVED,
    CLEAR_APPOINTMENTS
} from './types';

import { AsyncStorage } from 'react-native';

const url = "https://nhs.hallsy.io/api/v1/appointments";

export const requestAppointments = async () => {

    const userToken = await AsyncStorage.getItem('userToken');

    return (dispatch) => {
        dispatch({type: CLEAR_APPOINTMENTS});
        dispatch({type: APPOINTMENTS_REQUESTED});

        fetch(url, {headers: {
            'Cache-Control': 'no-cache',
            'X-API-KEY': userToken
        }})
        .then((response) => response.json())
            .then((responseJson) => {
                console.log('Appointments retrieved');
                dispatch({type: APPOINTMENTS_RETRIEVED, payload: responseJson.appointments});
        })
        .catch((error) => console.error(error));
    }
};