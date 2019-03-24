import {
    PREPARATIONS_REQUESTED, PREPARATIONS_COMPLETE, CLEAR_PREPARATIONS,
    TIMELINE_CREATED, GUIDELINE_CREATED, DIET_CREATED, MENU_CREATED
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
            const prep = responseJson.preparatoryTasks;

            // grab the data, split them, and reformat them to display in their relevant sections.


            dispatch({type: PREPARATIONS_COMPLETE});
        })
        .catch((error) => console.error(error));
    }
};