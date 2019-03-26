import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import PreparationScreen from '../screens/PreparationScreen';
import HomeScreen from '../screens/HomeScreen';
import DietScreen from '../screens/DietScreen';
import TimeLineTestScreen from '../screens/TimeLineTestScreen';
import Menu from '../screens/Menu';
import WhatToExpectScreen from '../screens/WhatToExpectScreen';
import IndividualMenuItem from '../screens/IndividualMenuItem';


const DashboardTabNavigator = createMaterialTopTabNavigator({
  PreparationScreen, 
  DietScreen, 
  Menu,
},{
  navigationOptions:({navigation})=>{
    const{routeName} = navigation.state.routes[navigation.state.index]
    return{
      headerTitle: null,
      headerStyle: {
        backgroundColor: '#005EB8',
        borderBottomWidth: 0,
        elevation:0
      }
    }
  }, tabBarOptions: {
    style:{
      backgroundColor: '#005EB8',
      
    },
    indicatorStyle: {
      backgroundColor: '#FAE100',
  }
  }
})

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Timeline: TimeLineTestScreen,
  Preparation: DashboardTabNavigator,
  Expect: WhatToExpectScreen,
  Menu,
  IndividualMenuItem,
}); 


export default HomeStack;


