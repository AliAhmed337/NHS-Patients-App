import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import { GuidanceTopInfo } from '../components/guidance_elements';
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
          <GuidanceTopInfo />
        </View>
        <View>
          <GuidanceList />
        </View>

      </View>      
    );
  }
}