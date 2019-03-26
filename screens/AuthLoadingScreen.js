import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { validateUser } from '../actions';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    console.log('going to fetch our user from async');
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('In our storage, our user is: ' + userToken);

    // Need to make sure token is still valid and hasn't expired -
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log(validateUser(userToken));
    this.props.navigation.navigate(validateUser(userToken) ? 'Main' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default connect(null, {validateUser})(AuthLoadingScreen);