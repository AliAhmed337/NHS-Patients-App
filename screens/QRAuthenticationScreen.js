import React, { Component } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, Vibration} from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux';
import { verifyUser, cameraPermRequested } from '../actions';

/**
 * The QR Screen allows the user to scan a barcode
 * instead of writing out the passphrase manually. The user
 * will have to opt into using the camera.
 */
class QRAuthenticationScreen extends Component {
    static navigationOptions = {
        title: 'Scan QR Code',

        headerStyle: {
            backgroundColor: '#005EB8',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
        },
        headerTintColor: '#ffffff',
    };

  componentDidMount() {
    this._requestCameraPermission();
  }

  componentDidUpdate(){
    const {user, navigation} = this.props;
    if (user) navigation.navigate('Main');
}

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.props.cameraPermRequested(status === 'granted');
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
  };

  _renderCamera() {
    const camPerm = this.props.hasCameraPermissions;
    return (
      <View style={styles.container}>
        {camPerm === null ?
          <ActivityIndicator/> :
          camPerm ?
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
    return this._renderCamera();
  }
}

const mapStateToProps = ({ authRed }) => {
  const { user, hasCameraPermissions } = authRed;
  return { user, hasCameraPermissions };
}

export default connect(mapStateToProps, { verifyUser, cameraPermRequested })(QRAuthenticationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});