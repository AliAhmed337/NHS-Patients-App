import {
    PASSPHRASE_CHANGED,
    VERIFY_USER,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    passphrase: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PASSPHRASE_CHANGED:
        console.log('passphrase is now: ' + state.passphrase);
            return {...state, passphrase: action.payload};
        
        case VERIFY_USER:
            return {...state, loading: true, error: ''};

        case USER_VERIFY_SUCCESS:
            return {
                ...state, 
                ...INITIAL_STATE,
                user: action.payload,
                loading: false
            };

        case USER_VERIFY_FAIL:
            return {
                ...state,
                error: 'Invalid passphrase, please make sure that you are' + 
                '\n following the correct format.',
                loading: false
            };

        default:
            return state;
    }
};