import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-listview';


export default class TimeLineTestScreen extends React.Component {
    constructor(){
        super()
        this.data = [
          {time: '12/Mar', title: 'Preparing for CBT Appointment', description: "Welcome! This is a preparation guide to help you get ready for your CBT appointment. Please click here to read the preparation steps and the mandatory diet guide.", 
          circleColor: '#009688',lineColor:'#009688'},
          {time: '27/Mar', title: 'Fasting at night', description: "Please now follow this card. The main change now is that you aren't allowed to eat after 7pm." },
          {time: '05/Apr', title: 'Strict new Diet', description: "With only 3 days left until your appointment, a strict new diet is required. Please now consult only this card." },
          {time: '06/Apr', title: 'Day Before Appointment', description: "No eating allowed 24 hours before your appointment so please remember to follow that." },
          {time: '07/Apr', title: 'Day of Appointment', description: "Only water and certain juices allowed. Consult this card for your diet today."}
        ]
      } 
    
      static navigationOptions = {
        title: 'Time Line',
  
        headerStyle: {
            backgroundColor: '#005EB8',
            borderBottomWidth: 0,
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
        },
        headerTintColor: '#ffffff',
    };

      render() {
        //'rgb(45,156,219)'
        return (
          <View style={styles.container}>
            <Timeline 
              style={styles.list}
              data={this.data}
              circleSize={20}
              circleColor='rgb(45,156,219)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{minWidth:52, marginTop: -5}}
              timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
              descriptionStyle={{color:'gray'}}
              options={{
                style:{paddingTop:5}
              }}
              onEventPress={() => this.props.navigation.navigate('Preparation')} //this is where navigation happens
            />
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 5,
        backgroundColor:'white'
      },
      list: {
        flex: 1,
      },
    });