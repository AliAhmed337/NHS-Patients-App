import React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  StatusBar,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { requestAppointments, registerForPushNotificationsAsync } from "../actions";
import AppointmentCard from '../components/AppointmentCard';

/**
 * The main screen that the user will come across. It will house all their appointments,
 * showing it to them in the form of appointment cards. There is intended future functionality
 * for instant chat and this will go at the bottom of the screen.
 */
class HomeScreen extends React.Component {
  
  static navigationOptions = {
      title: 'Upcoming Appointments',
    
      headerStyle: {
          backgroundColor: '#005EB8',
          borderBottomWidth: 0,
          elevation: 0,
      },
      headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff',
          textAlign:"center", 
          flex:1 
        },
  };

  // The user will be asked to opt into push notifications
  // if they have not already decided.
  componentDidMount(){
    this._handleAppointmentRequest();
    registerForPushNotificationsAsync();
  }

  render() {
    const { appointments, loading } = this.props;
    return (
      loading ? <ActivityIndicator/> :
      <View style={styles.backgroundStyle}>
          <StatusBar barStyle="light-content"/>
          <FlatList
            data = {appointments}
            keyExtractor = {item => item.id.toString()}
            refreshing = {false}
            onRefresh = {() => this._handleRefresh()}
            renderItem = {this._renderAppointment}    
            ListEmptyComponent = {this._renderEmpty}      
          />
      </View>
    );
  }

  _renderAppointment = ({item, index}) => (
    <AppointmentCard id = {item.id} appointment = {item} navigation={this.props.navigation} 
    prepInfo={item.detailedInformation} expanded = {index === 0}/>
  )
    
  _renderEmpty = () => <Text>There are no appointments to be displayed.</Text>
    
  
  _handleAppointmentRequest = async () => {
    const {requestAppointments} = this.props;
    const userToken = await AsyncStorage.getItem('userToken');
    requestAppointments(userToken);
  }

  _handleRefresh() {
    this._handleAppointmentRequest();
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#E8EDEE',
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const mapStateToProps = ({ appointmentsRed }) => {
  const { appointments, loading } = appointmentsRed;
  return { appointments, loading };
}

export default connect(mapStateToProps, {requestAppointments})(HomeScreen);
