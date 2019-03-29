import {
    PASSPHRASE_CHANGED,
    CAMERA_PERMISSION_REQUESTED,
    VERIFY_USER,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_FAIL,
    ISVALID_USER
} from '../actions/types';

const INITIAL_STATE = {
    passphrase: '',
    hasCameraPermissions: null,
    user: null,
    error: '',
    loading: false,
    valid: undefined
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PASSPHRASE_CHANGED:
            return {...state, passphrase: action.payload};

        case CAMERA_PERMISSION_REQUESTED:
            return {...state, hasCameraPermissions: action.payload}
        
        case VERIFY_USER:
            return {...state, loading: true, error: ''};

        case USER_VERIFY_SUCCESS:
            return {
                ...state, 
                ...INITIAL_STATE,
                user: action.payload,
                valid: true,
                loading: false
            };

        case USER_VERIFY_FAIL:
            return {
                ...state,
                error: 'Invalid passphrase, please make sure that you are' + 
                '\n following the correct format.',
                loading: false
            };

        case ISVALID_USER:
            return {
                ...state,
                valid: action.payload
            };

        default:
            return state;
    }
};