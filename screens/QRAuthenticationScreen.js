import React, { Component } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, Vibration} from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux';
import { verifyUser, cameraPermRequested } from '../actions';

class QRAuthenticationScreen extends Component {
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

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.props.cameraPermRequested(status === 'granted');
  };

  _handleBarCodeRead = resource => {
    
    const {verifyUser} = this.props;

    try {
      console.log(resource.data);
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
    const {navigate} = this.props.navigation;
        console.log(this.props.user ? true : false);
        return(this.props.user ? navigate('Main') : this._renderCamera());
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