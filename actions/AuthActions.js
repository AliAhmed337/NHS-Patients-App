import {
    PASSPHRASE_CHANGED,
    CAMERA_PERMISSION_REQUESTED,
    VERIFY_USER,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_FAIL,
    CLEAR_APPOINTMENTS
} from './types';
import { Constants } from 'expo';
import { AsyncStorage } from 'react-native';

const VERIFY_ENDPOINT = "https://nhs.hallsy.io/api/v1/subscribe";
const VALIDATE_ENDPOINT = "https://nhs.hallsy.io/api/v1/validate-patient";

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
    return function action(dispatch) {
        dispatch({type: VERIFY_USER});
        attemptVerify(passphrase, dispatch);
    };
};

export const validateUser = (userToken) => {
    fetch(VALIDATE_ENDPOINT, {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',
            'X-API-KEY': userToken  
        }})
        .then((response) => {
            if (response.status === 401) {
                removeInvalidTokenFromStorage();
                 false;
            }
            else true;
        })
          .catch((error) => console.error(error));
}

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
        console.log('status code: ' + response.status);
        console.log('response body: ');
        response.status === 200 ? response.json().then(json => {
            console.log(json);
            verifySuccess(dispatch, json.accessToken)
        }) : verifyFail(dispatch) 
    })
    .catch((error) => console.error(error));
}

const verifySuccess = (dispatch, user) => {
    console.log('successfully verified apparently, user should be: ' + user);
    dispatch({type: CLEAR_APPOINTMENTS})
    storeData(user);
    dispatch({
        type: USER_VERIFY_SUCCESS,
        payload: user
    });
    
}

const verifyFail = (dispatch) => {
    console.log('this user has failed verification');
    removeInvalidTokenFromStorage();
    dispatch({type: USER_VERIFY_FAIL});
}

const storeData = async (user) => {
    try {
      await AsyncStorage.setItem('userToken', user);
    } catch (error) {
      console.error(error);
    }
  };

const removeInvalidTokenFromStorage = async () => {
    try {
        await AsyncStorage.setItem('userToken', null);
    } catch (error) {
        console.error(error);
    }
}