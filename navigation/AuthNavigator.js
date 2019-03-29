import { createStackNavigator } from 'react-navigation';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import QRAuthenticationScreen from '../screens/QRAuthenticationScreen';
import ManualAuthenticationScreen from '../screens/ManualAuthenticationScreen';

/**
 * QR code and Manual input verification processes are 
 * accessable via the Authentication Screen.
 */ 
const AuthStack = createStackNavigator({
    AuthMain: AuthenticationScreen,
    QRAuth: QRAuthenticationScreen,
    ManualAuth: ManualAuthenticationScreen,
  });

export default AuthStack;
  


