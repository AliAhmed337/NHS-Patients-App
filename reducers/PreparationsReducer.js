import {
    PREPARATIONS_REQUESTED, PREPARATIONS_RETRIEVED, CLEAR_PREPARATIONS,
    GUIDANCE_CREATED, DIET_CREATED, MENU_CREATED
} from '../actions/types';

const INITIAL_STATE = {
    preparations: null,
    guidancePrep: null,
    dietPrep: null,
    menuPrep: null,
    loading: false,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PREPARATIONS_REQUESTED:
            console.log('PREPARATIONS are being retrieved');
            return {...state, loading: true};

        case GUIDANCE_CREATED:
            console.log('guidance has been updated: ' + action.payload);
            return {
                ...state, 
                guidancePrep: action.payload, 
            };

        case DIET_CREATED:
            console.log('diet has been updated: ' + action.payload);
            return {
                ...state, 
                dietPrep: action.payload, 
            };

        case MENU_CREATED:
            console.log('menu has been updated: ' + action.payload);
            return {
                ...state, 
                menuPrep: action.payload, 
            };

        case PREPARATIONS_RETRIEVED:
            console.log('preparations have completed: ' + action.payload);
            return {...state, loading: false, preparations: action.payload};

        case CLEAR_PREPARATIONS:
            return {...INITIAL_STATE};

        default:
            return state;
    }
};