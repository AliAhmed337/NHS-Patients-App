import {
    PREPARATIONS_REQUESTED,
    PREPARATIONS_RETRIEVED,
    CLEAR_PREPARATIONS
} from './types';

const PREPARATION_ENDPOINT = "https://nhs.hallsy.io/api/v1/";

export const requestPreparations = () => {

    return (dispatch) => {
        dispatch({type: CLEAR_PREPARATIONS});
        dispatch({type: PREPARATIONS_REQUESTED});

        fetch(PREPARATION_ENDPOINT, {headers: {'Cache-Control': 'no-cache'}})
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('PREPARATIONS retrieved');
            dispatch({type: PREPARATIONS_RETRIEVED, payload: responseJson.PREPARATIONS});
        })
        .catch((error) => console.error(error));
    }
};