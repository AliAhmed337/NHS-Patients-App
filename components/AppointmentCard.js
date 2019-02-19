import React from 'react';
import { Text, View, Button } from 'react-native';
import moment from "moment";
//TODO: import {AppointmentCardStyle} from StyleSheet path

export const AppointmentCard = ({appointment}) => {
    const {appointmentType, startTime, location} = appointment;
    const appointmentDate = moment(startTime);
    
    return (
        <View>
            <View>
                <Text>Appointment Details</Text>
                <Text>{appointmentType}</Text>
                <Text>{appointmentDate.fromNow()}</Text>
            </View>
            
            <View>
                <Text>{location}</Text>
                <Text>{appointmentDate.format('MMMM Do YYYY, h:mm a')}</Text>
            </View>

            <View>
                <Button title="Preparation checklist" onPress = {}/>
            </View>

            <View>
                <Button title="What to expect" onPress = {}/>
            </View>

            <Text>
                Can't make it to your appointment? It's important to
                let us know so we can offer your slot to somebody else:
            </Text>

            <View>
                <Button title="Cancel or change appointment" onPress = {}/>
            </View>
            
                
            
        </View>
    );
}

