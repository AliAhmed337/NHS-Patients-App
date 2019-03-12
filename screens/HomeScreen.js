import React from 'react';
import {
  View,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { requestAppointments } from "../actions";
import { WebBrowser } from 'expo';
import AppointmentCard from '../components/AppointmentCard';
import { Button, ThemeProvider } from 'react-native-elements';

class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Upcoming Appointments',

      headerStyle: {
          backgroundColor: '#007dff',
      },
      headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff',
      },
  };

  componentDidMount() {
    const {requestAppointments} = this.props;
    requestAppointments();
  }

  render() {
    const { appointments, loading } = this.props;
    return (
      loading ? <ActivityIndicator/> :
      <View>
          <StatusBar barStyle="light-content"/>
          <FlatList
            data = {appointments}
            keyExtractor = {item => item.id}
            refreshing = {false}
            onRefresh = {() => this._handleRefresh()}
            renderItem = {this._renderAppointment}          
          />
        
          <ThemeProvider>
            <Button title="a VERY SPECIAL THING" type="outline" onPress={() => this.props.navigation.navigate('Expect')}/>
              <Button title="a VERY SPECIAL THING 2" type="outline" onPress={() => this.props.navigation.navigate('Expect')}/>
          </ThemeProvider>
      </View>
    );
  }

  _renderAppointment = ({item}) => (
    <AppointmentCard id = {item.id} appointment = {item}/>
  )
    
  

  _handleRefresh() {
    console.log('we are refreshing');
    const {requestAppointments} = this.props;
    requestAppointments();
  }
}

const styles = StyleSheet.create({
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
