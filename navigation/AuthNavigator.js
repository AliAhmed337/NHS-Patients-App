import { createStackNavigator } from 'react-navigation';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import QRAuthenticationScreen from '../screens/QRAuthenticationScreen';
import ManualAuthenticationScreen from '../screens/ManualAuthenticationScreen';

const AuthStack = createStackNavigator({
    AuthMain: AuthenticationScreen,
    QRAuth: QRAuthenticationScreen,
    ManualAuth: ManualAuthenticationScreen,
  });

export default AuthStack;
  


