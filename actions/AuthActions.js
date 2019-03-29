import {
    PASSPHRASE_CHANGED,
    CAMERA_PERMISSION_REQUESTED,
    VERIFY_USER,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_FAIL,
    CLEAR_APPOINTMENTS,
    ISVALID_USER
} from './types';
import { Constants } from 'expo';
import { AsyncStorage } from 'react-native';

// Endpoints
const VERIFY_ENDPOINT = "https://nhs.hallsy.io/api/v1/subscribe";
const VALIDATE_ENDPOINT = "https://nhs.hallsy.io/api/v1/validate-patient";

/**
 * Sends a dispatch to notify state that passphrase 
 * within input has been modified.
 * @param {string} text Text that was input.
 */
export const passphraseChanged = (text) => {
    return {
        type: PASSPHRASE_CHANGED,
        payload: text
    };
};

/**
 * Sends a dispatch to notify state of our users
 * decision in regards to camera permissions.
 * @param {boolean} status The result of askAsync for camera permissions.
 */
export const cameraPermRequested = (status) => {
    return {
        type: CAMERA_PERMISSION_REQUESTED,
        payload: status
    }
}

/**
 * Verify whether or not the passphrase is legitimate.
 * @param {string} passphrase The passphrase being verified.
 */
export const verifyUser = (passphrase) => {
    return function action(dispatch) {
        dispatch({type: VERIFY_USER}); // Dispatch an update to loading state until we have resolved verification.
        attemptVerify(passphrase, dispatch);
    };
};

/**
 * Handle the validity of an existing token. Used to ensure
 * expired/revoked tokens do not gain uninvited access.
 * @param {string} userToken The token to be validated.
 */
export const validateUser = (userToken) => {
    return (dispatch) => {

        // Make a GET request to the validate endpoint with our token.
        fetch(VALIDATE_ENDPOINT, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'X-API-KEY': userToken  
            }})
            .then((response) => {
                // Will likely experience difference forms of validity,
                // dispatch allows flexibility with handling this.
                if (response.status === 401) {
                    dispatch({type: ISVALID_USER, payload: false})
                    removeInvalidTokenFromStorage();
                }
                if (response.status === 500) {
                    dispatch({type:USER_VERIFY_FAIL});
                }
                else dispatch({type: ISVALID_USER, payload: true});
            })
            .catch((error) => console.error(error));
    }
}

/**
 * Handles the communication with the API for a user signing up.
 * @param {string} passphrase Passphrase passed in verifyUser. 
 * @param {dispatch} dispatch Dispatch passed in verifyUser.
 */
const attemptVerify = (passphrase, dispatch) => {
    fetch(VERIFY_ENDPOINT, {
        method: 'POST',
        headers: {
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            'device' : {
                'id': Constants.deviceId,
                'name': Constants.deviceName
            },
            'passphrase': passphrase
        })
    })
    .then((response) => {
        response.status === 200 ? response.json().then(json => {
            verifySuccess(dispatch, json.accessToken)
        }) : verifyFail(dispatch) 
    })
    .catch((error) => console.error(error));
}

/**
 * Upon successful verification, we need to dispatch to update
 * states and store our users information so that they may log in
 * automatically upon reopening the application.
 * @param {dispatch} dispatch 
 * @param {string} user 
 */
const verifySuccess = (dispatch, user) => {
    dispatch({type: CLEAR_APPOINTMENTS})
    storeData(user);
    dispatch({
        type: USER_VERIFY_SUCCESS,
        payload: user
    });
    
}

/**
 * Upon failed verification, we must reflect this in state and 
 * if it exists, delete the token from storage.
 * @param {dispatch} dispatch 
 */
const verifyFail = (dispatch) => {
    removeInvalidTokenFromStorage();
    dispatch({type: USER_VERIFY_FAIL});
}

/**
 * Wrapped AsyncStorage function to store user token 
 * outside a dispatch
 * @param {string} user 
 */
const storeData = async (user) => {
    try {
      await AsyncStorage.setItem('userToken', user);
    } catch (error) {
      console.error(error);
    }
  };

/**
 * Removes the token deemed to be invalid if it exists in
 * storage, otherwise does nothing.
 */
const removeInvalidTokenFromStorage = async () => {
    try {
        await AsyncStorage.removeItem('userToken');
    } catch (error) {
        console.error(error);
    }
}