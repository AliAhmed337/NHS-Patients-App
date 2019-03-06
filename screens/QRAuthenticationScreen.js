import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class QRAuth extends Component {
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

  _handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <ActivityIndicator/> :
          this.state.hasCameraPermission === false ?
            this.props.navigation.navigate('Auth') :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});