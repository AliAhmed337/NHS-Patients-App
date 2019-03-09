import {
    APPOINTMENTS_REQUESTED,
    APPOINTMENTS_RETRIEVED,
    CLEAR_APPOINTMENTS
} from './types';

const url = "https://static.dominicswaine.com/nhs-app/appointments.json";

export const requestAppointments = () => {

    return (dispatch) => {
        dispatch({type: CLEAR_APPOINTMENTS});
        dispatch({type: APPOINTMENTS_REQUESTED});

        fetch(url, {headers: {'Cache-Control': 'no-cache'}})
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch({type: APPOINTMENTS_RETRIEVED, payload: responseJson});
        })
        .catch((error) => console.error(error));
    }
};