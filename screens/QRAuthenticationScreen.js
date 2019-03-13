import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, ActivityIndicator, Vibration} from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class QRAuth extends Component {
    static navigationOptions = {
        title: 'Scan QR Code',

        headerStyle: {
            backgroundColor: '#007dff',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
        },
    };

  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = resource => {
    
    const {verifyUser} = this.props;

    try {
      verifyUser(resource.data);
      Vibration.vibrate(100);
    }
    catch (e) {
      console.error(e.message);
    }
    Alert.alert(
      'Scan successful!',
      JSON.stringify(resource)
    );
  };

  _renderCamera() {
    const camPerm = this.state.hasCameraPermission.status;
    return (
      <View style={styles.container}>
        {camPerm === null ?
          <ActivityIndicator/> :
          camPerm === 'granted' ?
          <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={[StyleSheet.absoluteFill]}
          />
          : this.props.navigation.goBack()
        }
      </View>
    );
  }

  render() {
    const {navigate} = this.props.navigation;
        console.log(this.props.user ? true : false);
        return(this.props.user ? navigate('Main') : this._renderCamera());
  }
}

const mapStateToProps = ({ authRed }) => {
  const { user } = authRed;
  return { user };
}

export default connect(mapStateToProps, {verifyUser})(QRAuthenticationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});