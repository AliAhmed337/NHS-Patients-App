import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import PreparationScreen from '../screens/PreparationScreen';
import HomeScreen from '../screens/HomeScreen';
import DietScreen from '../screens/DietScreen';
import TimeLineTestScreen from '../screens/TimeLineTestScreen';
import MenuScreen from '../screens/MenuScreen';
import WhatToExpectScreen from '../screens/WhatToExpectScreen';
import IndividualMenuItem from '../components/IndividualMenuItem';

/**
 * The top tabbar for the prepatory tasks: guidance, diet, menu.
 */
const DashboardTabNavigator = createMaterialTopTabNavigator({
  PreparationScreen, 
  DietScreen, 
  MenuScreen,
},{
  navigationOptions:({navigation})=>{
    const{routeName} = navigation.state.routes[navigation.state.index]
    return{
      headerTitle: null,
      headerStyle: {
        backgroundColor: '#005EB8',
        headerBackTitleStyle: '#ffffff',
        borderBottomWidth: 0,
        elevation:0,      },
        headerBackTitleStyle: 'Back',
        headerTintColor: '#ffffff',
    }
  }, tabBarOptions: {
    style:{
      backgroundColor: '#005EB8',
      
    },
    indicatorStyle: {
      backgroundColor: '#FAE100',
  },
  }
})

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Timeline: TimeLineTestScreen,
  Preparation: DashboardTabNavigator,
  Expect: WhatToExpectScreen,
  MenuScreen,
  IndividualMenuItem,
}); 

export default HomeStack;


