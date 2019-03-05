import { createStackNavigator } from 'react-navigation';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import QRAuthenticationScreen from '../screens/QRAuthenticationScreen';

const AuthStack = createStackNavigator({
    AuthMain: AuthenticationScreen,
    QRAuth: QRAuthenticationScreen,
  });

export default AuthStack;
  


