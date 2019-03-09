import {
    PASSPHRASE_CHANGED,
    VERIFY_USER,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_FAIL,
    CLEAR_APPOINTMENTS
} from './types';

export const passphraseChanged = (text) => {
    return {
        type: PASSPHRASE_CHANGED,
        payload: text
    };
};

export const verifyUser = (passphrase) => {
    return dispatch => {
        dispatch({type: VERIFY_USER});
        tempFakeVerify(passphrase)
        .then(verifySuccess(dispatch, user))
        .catch(verifyFail(dispatch))
    };
};

const tempFakeVerify = (passphrase) => {
    // verify passphrase and return true if valid
    return true;
}

const verifySuccess = (dispatch, user) => {
    dispatch({type: CLEAR_APPOINTMENTS})
    dispatch({
        type: USER_VERIFY_SUCCESS,
        payload: user
    });
    
}

const verifyFail = (dispatch) => {
    dispatch({type: USER_VERIFY_FAIL});
}