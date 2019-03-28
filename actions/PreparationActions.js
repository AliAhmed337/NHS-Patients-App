import {
    PREPARATIONS_REQUESTED, PREPARATIONS_RETRIEVED, CLEAR_PREPARATIONS,
    GUIDANCE_CREATED, DIET_CREATED, MENU_CREATED, EXPECT_CREATED
} from './types';
import moment from 'moment';

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
            console.log('the response from appointment/1: '+ JSON.stringify(responseJson.preparatoryTasks));
            const original = responseJson.preparatoryTasks;
            original.map(task => {
                const formatTime = moment(task.time).format("MMM Do");
                task.time = formatTime;
            });
            console.log('preparations retrieved for endpoint: ' + PREPARATION_ENDPOINT);
            dispatch({type: PREPARATIONS_RETRIEVED, payload: original});
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

export const loadExpectInfo = (PREPARATION_ENDPOINT, userToken) => {
    return (dispatch) => {
        console.log('getting what to expect');
        fetch(PREPARATION_ENDPOINT, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'X-API-KEY': userToken

            }})
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('the response from appointment/1: '+ JSON.stringify(responseJson.appointment_profile));
            
            dispatch({type: EXPECT_CREATED, payload: responseJson.appointment_profile});
        })
        .catch((error) => console.error(error));
    }
}