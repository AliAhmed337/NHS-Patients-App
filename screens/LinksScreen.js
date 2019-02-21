import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { AppointmentCard } from '../components/AppointmentCard';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links ',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
        <AppointmentCard appointment = {appointments.first}/>
        <AppointmentCard appointment = {appointments.second}/>
        <AppointmentCard appointment = {appointments.third}/>
        <Button title="a VERY SPECIAL THING" onPress={() => this.props.navigation.navigate('Preparation')}/> 
      </ScrollView>
    );
  }
}

const appointments = {
  first: {
    appointmentType: 'Heart CT Scan ',
    startTime: "2019-03-04T16:35:01",
    location: 'St Thomas Hospital',
  },

  second: {
    appointmentType: 'Digital Rectal Exam ',
    startTime: "2019-08-02T10:40",
    location: 'St James Hospital',
  },

  third: {
    appointmentType: 'Appendix CT Scan ',
    startTime: "2021-09-11T18:10",
    location: 'Northwick Park Hospital',
  },
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
