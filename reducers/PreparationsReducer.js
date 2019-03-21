import {
    PREPARATIONS_REQUESTED,PREPARATIONS_RETRIEVED,CLEAR_PREPARATIONS
} from '../actions/types';

const INITIAL_STATE = {
    preparations: [],
    loading: false,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PREPARATIONS_REQUESTED:
        console.log('PREPARATIONS are being retrieved');
            return {...state, loading: true};
        
        case PREPARATIONS_RETRIEVED:
        console.log('PREPARATIONS have been retrieved: ' + action.payload);
            return {
                ...state, 
                PREPARATIONS: action.payload, 
                loading: false
            };

        case CLEAR_PREPARATIONS:
            return {...INITIAL_STATE};

        default:
            return state;
    }
};