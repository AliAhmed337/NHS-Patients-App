import {
    APPOINTMENTS_REQUESTED,
    APPOINTMENTS_RETRIEVED,
    CLEAR_APPOINTMENTS
} from './types';
import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

const APPOINTMENTS_ENDPOINT = "https://nhs.hallsy.io/api/v1/appointments";
const PUSH_ENDPOINT = "https://nhs.hallsy.io/api/v1/notifications/subscribe";

export const requestAppointments = async () => {

    const userToken = await AsyncStorage.getItem('userToken');

    return (dispatch) => {
        dispatch({type: CLEAR_APPOINTMENTS});
        dispatch({type: APPOINTMENTS_REQUESTED});

        fetch(APPOINTMENTS_ENDPOINT, {headers: {
            'Cache-Control': 'no-cache',
            'X-API-KEY': userToken
        }})
        .then((response) => response.json())
            .then((responseJson) => {
                console.log('Appointments retrieved');
                dispatch({type: APPOINTMENTS_RETRIEVED, payload: responseJson.appointments});
        })
        .catch((error) => console.error(error));
    }
};

export async function registerForPushNotificationsAsync() {
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
  
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    return fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'expo_token': token
      })
    });
  } 