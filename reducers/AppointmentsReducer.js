import {
    APPOINTMENTS_REQUESTED,APPOINTMENTS_RETRIEVED,CLEAR_APPOINTMENTS
} from '../actions/types';

const INITIAL_STATE = {
    appointments: [],
    loading: false,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case APPOINTMENTS_REQUESTED:
        console.log('appointments are being retrieved');
            return {...state, loading: true};
        
        case APPOINTMENTS_RETRIEVED:
        console.log('Appointments have been retrieved: ' + JSON.stringify(action.payload));
            return {
                ...state, 
                appointments: action.payload, 
                loading: false
            };

        case CLEAR_APPOINTMENTS:
            return {...INITIAL_STATE};

        default:
            return state;
    }
};



