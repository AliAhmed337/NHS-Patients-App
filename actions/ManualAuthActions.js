import {
    PASSPHRASE_CHANGED,
    VERIFY_USER,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_FAIL,
    CLEAR_APPOINTMENTS
} from './types';

export const passphraseChanged = (text) => {
    console.log('changing passphrase');
    return {
        type: PASSPHRASE_CHANGED,
        payload: text
    };
};

export const verifyUser = (passphrase) => {
    console.log('attempting to verify user with passphrase: ' + passphrase);
    return dispatch => {
        dispatch({type: VERIFY_USER});
        tempFakeVerify(passphrase) ? 
        verifySuccess(dispatch, passphrase) : verifyFail(dispatch);
        // Below is the more likely implementation once Auth
        //.then(verifySuccess(dispatch, passphrase))
        //.catch(verifyFail(dispatch))
    };
};

const tempFakeVerify = (passphrase) => {
    // verify passphrase and return true if valid
    return true;
}

const verifySuccess = (dispatch, user) => {
    console.log('successfully verified apparently, user should be: ' + user);
    dispatch({type: CLEAR_APPOINTMENTS})
    dispatch({
        type: USER_VERIFY_SUCCESS,
        payload: user
    });
    
}

const verifyFail = (dispatch) => {
    dispatch({type: USER_VERIFY_FAIL});
}