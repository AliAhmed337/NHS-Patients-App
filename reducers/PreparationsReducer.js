import {
    PREPARATIONS_REQUESTED, PREPARATIONS_COMPLETE, CLEAR_PREPARATIONS,
    TIMELINE_CREATED, GUIDELINE_CREATED, DIET_CREATED, MENU_CREATED
} from '../actions/types';

const INITIAL_STATE = {
    timelinePrep: [],
    guidelinePrep: [],
    dietPrep: [],
    menuPrep: [],
    loading: false,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PREPARATIONS_REQUESTED:
            console.log('PREPARATIONS are being retrieved');
            return {...state, loading: true};
        
        case TIMELINE_CREATED:
            console.log('timeline has been updated: ' + action.payload);
            return {
                ...state, 
                timelinePrep: action.payload, 
            };

        case GUIDELINE_CREATED:
            console.log('guideline has been updated: ' + action.payload);
            return {
                ...state, 
                guidelinePrep: action.payload, 
            };

        case DIET_CREATED:
            console.log('diet has been updated: ' + action.payload);
            return {
                ...state, 
                dietPrep: action.payload, 
            };

        case MENU_CREATED:
            console.log('diet has been updated: ' + action.payload);
            return {
                ...state, 
                menuPrep: action.payload, 
            };

        case PREPARATIONS_COMPLETE:
            console.log('preparations have completed and all info is split');
            return {...state, loading: false};

        case CLEAR_PREPARATIONS:
            return {...INITIAL_STATE};

        default:
            return state;
    }
};