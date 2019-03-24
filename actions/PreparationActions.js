import {
    PREPARATIONS_REQUESTED,
    PREPARATIONS_RETRIEVED,
    CLEAR_PREPARATIONS
} from './types';


export const requestPreparations = (PREPARATION_ENDPOINT, userToken) => {

    return (dispatch) => {
        console.log('getting preparations');
        dispatch({type: CLEAR_PREPARATIONS});
        dispatch({type: PREPARATIONS_REQUESTED});

        fetch(PREPARATION_ENDPOINT, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'X-API-KEY': userToken

            }})
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('preparations retrieved for endpoint: ' + PREPARATION_ENDPOINT);
            dispatch({type: PREPARATIONS_RETRIEVED, payload: responseJson.preparations});
        })
        .catch((error) => console.error(error));
    }
};