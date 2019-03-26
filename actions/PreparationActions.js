import {
    PREPARATIONS_REQUESTED, PREPARATIONS_RETRIEVED, CLEAR_PREPARATIONS,
    GUIDANCE_CREATED, DIET_CREATED, MENU_CREATED
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
            dispatch({type: PREPARATIONS_RETRIEVED, payload: responseJson});
        })
        .catch((error) => console.error(error));
    }
};

export const loadPrepInfo = (preptask) => {
    return (dispatch) => {
       
        console.log('splitting and sending guidance ' + JSON.stringify(preptask.guidance));
        dispatch({type: GUIDANCE_CREATED, payload: preptask.guidance});
    
        console.log('splitting and sending diet ' + JSON.stringify(preptask.diet));
        dispatch({type: DIET_CREATED, payload: preptask.diet});
    
        console.log('splitting and sending menu ' + JSON.stringify(preptask.menu));
        dispatch({type: MENU_CREATED, payload: preptask.menu})

        
    }
};