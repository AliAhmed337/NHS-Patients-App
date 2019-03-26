import React from 'react';
import { Platform, View } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator, createTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import PreparationScreen from '../screens/PreparationScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Icon } from 'react-native-elements';
import DietScreen from '../screens/DietScreen';
import TimeLineTestScreen from '../screens/TimeLineTestScreen';
import Menu from '../screens/Menu';
import WhatToExpectScreen from '../screens/WhatToExpectScreen';
import DetailScreen from '../screens/DetailScreen';
import IndividualMenuItem from '../screens/IndividualMenuItem';
import LinearMainScreen from '../screens/LinearMainScreen';
import TimeLineExample from '../screens/TimeLineExample';


export default class MainTabNavigator extends React.Component{
  render(){
    return <AppContainer />;
  }
}

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

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator:DashboardTabNavigator,
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <View style={{marginLeft: 10}}>
       <Icon 
        style={{ padding:10 }}
        name='md-arrow-back'
        type='ionicon'
        color='#ffffff'
        size= {35}
        underlayColor='#ffffff'
        onPress={() => navigation.navigate('Timeline')} />
        </View>
      )
    }
  }
})



const AppDrawerNavigator = createStackNavigator({
  Preparation: DashboardStackNavigator,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
)

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Timeline: TimeLineTestScreen,
  Expect: WhatToExpectScreen,
  Menu,
  IndividualMenuItem,
}); 

const AppSwitchNavigator = createSwitchNavigator({
  Home: { screen: HomeStack },
  Settings: {
    screen: AppDrawerNavigator
  }
})

const AppContainer = createAppContainer(AppSwitchNavigator);

AppContainer.navigationOptions ={
  header: {
    shadowColor: 'transparent'
  }
}

const PreparationStack = createStackNavigator({
  Preparation: PreparationScreen,
});

HomeStack.navigationOptions = {
  tabBarVisible: false,
  swipeEnabled: false, 
};

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

PreparationStack.navigationOptions = {
  tabBarLabel: 'Preparation',
  tabBarVisible: true,
  swipeEnabled: true, 
  title: 'Preparation',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
    />
  ),
};


