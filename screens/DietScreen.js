import React from 'react';
import { View } from 'react-native';
import DietList from '../components/DietList';

/**
 * Displays the Diet List providing diet information on a users preparatory task for
 * a specific timeline event.
 */
export default class DietScreen extends React.Component {

  static navigationOptions = {
    title: 'Diet',
  };

  render(){
    return (
      <View style={{ flex: 1, backgroundColor: '#E8EDEE' }}>
        <DietList />
      </View>
    );
  }
}