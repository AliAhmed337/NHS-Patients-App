import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator, createTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import PreparationScreen from '../screens/PreparationScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DietScreen from '../screens/DietScreen';
import MenuScreen from '../screens/MenuScreen';
import TimeLineTestScreen from '../screens/TimeLineTestScreen';
import GridMenuTest from '../screens/GridMenuTest';
//import PreparationScreen from '../screens/PreparationScreen';
import WhatToExpectScreen from '../screens/WhatToExpectScreen';

export default class MainTabNavigator extends React.Component{
  render(){
    return <AppContainer />;
  }
}


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  //Preparation: PreparationScreen,
  Expect: WhatToExpectScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const DashboardTabNavigator = createMaterialTopTabNavigator({
  PreparationScreen, 
  DietScreen, 
  MenuScreen,
  TimeLineTestScreen,
  GridMenuTest,
  PopupScreen,
  ModalScreen
},{
  navigationOptions:({navigation})=>{
    const{routeName} = navigation.state.routes[navigation.state.index]
    return{
      headerTitle: routeName
    }
  }, tabBarOptions: {
    style:{
      backgroundColor: '#005EB8',
    }
  },
  headerStyle: {
    backgroundColor: '#005EB8',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
})

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator:DashboardTabNavigator,
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <View style={{marginLeft: 10}}>
        <Icon 
        style={{ padding:10 }}
        name='ios-arrow-dropleft-circle'
        type='ionicon'
        color='#00A499'
        size= {35}
        underlayColor='#ffffff'
        onPress={() => navigation.navigate('Home')}
        />
        </View>
      )
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Preparation: DashboardStackNavigator,
})

const AppSwitchNavigator = createSwitchNavigator({
  Home: { screen: HomeStack },
  Settings: {
    screen: AppDrawerNavigator
  }
})

const AppContainer = createAppContainer(AppSwitchNavigator);



