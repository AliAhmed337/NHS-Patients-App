import {
    APPOINTMENTS_REQUESTED,
    APPOINTMENTS_RETRIEVED,
    CLEAR_APPOINTMENTS
} from './types';
import { Permissions, Notifications } from 'expo';
import {AsyncStorage} from 'react-native';

// Endpoints
const APPOINTMENTS_ENDPOINT = "https://nhs.hallsy.io/api/v1/appointments";
const PUSH_ENDPOINT = "https://nhs.hallsy.io/api/v1/notifications/subscribe";


/**
 * Requests the appointments of a user from the API
 * and is dependant on the validity of the userToken.
 * @param {string} userToken The token stored in device.
 */
export const requestAppointments = (userToken) => {

  return function action(dispatch) {
    // Reset appointments state and set loading prop as we fetch.
    dispatch({type: CLEAR_APPOINTMENTS});
    dispatch({type: APPOINTMENTS_REQUESTED});
    
    // Make a GET request to the endpoint using the token as credentials.
    console.log('this is what we are sending to the api: ');
    console.log(userToken);
    fetch(APPOINTMENTS_ENDPOINT, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'X-API-KEY': userToken
    }})
    .then((response) => {
      console.log('status code for appointments fetch: ' + response.status);
      response.json().then((responseJson) => {
        dispatch({type: APPOINTMENTS_RETRIEVED, payload: responseJson.appointments});
      })
    })
    .catch((error) => console.error(error));
  }
};

/**
 * Register for push notifications with expo backend.
 */
export async function registerForPushNotificationsAsync() {
  console.log('attempting to get push noti reg');
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
  
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  
    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }
  
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    let userToken = await AsyncStorage.getItem('userToken');
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    return fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'X-API-KEY': userToken
      },
      body: JSON.stringify({
        expo_token: token
      })
    });
  } 