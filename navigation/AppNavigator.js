import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthNavigator,
  Main: MainTabNavigator,
},
{
  initialRouteName: 'AuthLoading',
}
));