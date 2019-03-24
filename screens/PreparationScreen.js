import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import GuidanceList from '../components/GuidanceList';

export default class PreparationScreen extends React.Component {

  static navigationOptions = {
    title: 'Preparation',
  };

  render() {
    return (
      <View style={{ margin: 5 }}>
      <StatusBar barStyle="light-content" />
        <View>
          <GuidanceList />
        </View>
      </View>      
    );
  }
}