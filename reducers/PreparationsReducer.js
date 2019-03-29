import {
    PREPARATIONS_REQUESTED, PREPARATIONS_RETRIEVED, CLEAR_PREPARATIONS,
    GUIDANCE_CREATED, DIET_CREATED, MENU_CREATED, EXPECT_CREATED
} from '../actions/types';

const INITIAL_STATE = {
    preparations: null,
    expectPrep: null,
    guidancePrep: null,
    dietPrep: null,
    menuPrep: null,
    loading: false,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PREPARATIONS_REQUESTED:
            return {...state, loading: true};

        case GUIDANCE_CREATED:
            return {
                ...state, 
                guidancePrep: action.payload, 
            };

        case DIET_CREATED:
            return {
                ...state, 
                dietPrep: action.payload, 
            };

        case MENU_CREATED:
            return {
                ...state, 
                menuPrep: action.payload, 
            };

        case EXPECT_CREATED:
        return {
            ...state, 
            expectPrep: action.payload, 
        };

        case PREPARATIONS_RETRIEVED:
            return {...state, loading: false, preparations: action.payload};

        case CLEAR_PREPARATIONS:
            return {...INITIAL_STATE};

        default:
            return state;
    }
};