import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthNavigator from './AuthNavigator';
import HomeStack from './MainTabNavigator';

/**
 * There are three routes, the initial loading screen, the authentication 
 * route and the main route once the user has logged in.
 */
export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthNavigator,
  Main: HomeStack,

},
{
  initialRouteName: 'AuthLoading',
}
));