import {
    PASSPHRASE_CHANGED,
    CAMERA_PERMISSION_REQUESTED,
    VERIFY_USER,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_FAIL,
    CLEAR_APPOINTMENTS
} from './types';

import { AsyncStorage } from 'react-native';

export const passphraseChanged = (text) => {
    console.log('changing passphrase');
    return {
        type: PASSPHRASE_CHANGED,
        payload: text
    };
};

export const cameraPermRequested = (status) => {
    return {
        type: CAMERA_PERMISSION_REQUESTED,
        payload: status
    }
}

export const verifyUser = (passphrase) => {
    console.log('attempting to verify user with passphrase: ' + passphrase);
    return dispatch => {
        dispatch({type: VERIFY_USER});
        attemptVerify(passphrase) ? 
        verifySuccess(dispatch, passphrase) : verifyFail(dispatch);
        // Below is the more likely implementation once Auth
        //.then(verifySuccess(dispatch, passphrase))
        //.catch(verifyFail(dispatch))
    };
};

const attemptVerify = (passphrase) => {
    const verifyURL = "https://nhs.hallsy.io/api/v1/validate-patient";
    fetch(verifyURL, {headers: {
        'Cache-Control': 'no-cache',
        'X-API-KEY': passphrase
    }})
    .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            const status = responseJson.success
            return status === 'success';
        })
        .catch((error) => console.error(error));
}

const verifySuccess = (dispatch, user) => {
    console.log('successfully verified apparently, user should be: ' + user);
    storeData(user);
    dispatch({type: CLEAR_APPOINTMENTS})
    dispatch({
        type: USER_VERIFY_SUCCESS,
        payload: user
    });
    
}

const verifyFail = (dispatch) => {
    dispatch({type: USER_VERIFY_FAIL});
}

const storeData = async (user) => {
    try {
      await AsyncStorage.setItem('userToken', user);
    } catch (error) {
      console.error(error);
    }
  };