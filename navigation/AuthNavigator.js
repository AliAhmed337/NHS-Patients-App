import AuthenticationScreen from '../screens/AuthenticationScreen';
import QRAuthenticationScreen from '../screens/QRAuthenticationScreen';

export default AuthStack = createStackNavigator({
    AuthMain: AuthenticationScreen,
    QRAuth: QRAuthenticationScreen,
  }); 

  


