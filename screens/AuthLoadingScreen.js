import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { validateUser } from '../actions';

/**
 * This Screen is used predominantly as a preload to determine
 * routing within the application. They will be sent to the Authentication
 * page if they do not possess a token that is valid. Otherwise they will
 * be taken to the Home Screen where they will be shown their appointments.
 */
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
    const { validateUser } = this.props;
    await validateUser(userToken);
  };

  componentDidUpdate () {
    if (this.props.valid !== undefined) {
      this._renderPathway();
    }
  }

  // Need to make sure token is still valid and hasn't expired -
  // This will switch to the App screen or Auth screen and this loading
  // screen will be unmounted and thrown away.
  _renderPathway() {
    const {valid, navigation} = this.props;
    valid ? navigation.navigate('Main') : navigation.navigate('Auth');
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = ({authRed}) => {
  const { valid } = authRed 
  return { valid };
}

export default connect(mapStateToProps, {validateUser})(AuthLoadingScreen);