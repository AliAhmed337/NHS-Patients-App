import React from 'react';
import { Text, View, Button } from 'react-native';
import moment from 'moment';
import styles from '../StyleSheet';
import { Ionicons } from '@expo/vector-icons';
import {
    AppointmentHeader,AppointmentBody, AppointmentDetail,
    AppointmentTimer,AppointmentTitle, AppointmentContainer
} from './appointment_elements';

export const AppointmentCard = ({appointment}) => {
    const {appointmentType, startTime, location} = appointment;
    const appointmentDate = moment(startTime);
    const {appointmentTypeText, appointmentTitleText, appointmentTimerText} = styles;
    
    const doNothing = () => {

    };

    return (
        <AppointmentContainer>
            <AppointmentHeader>
                <AppointmentTitle>
                    <Text style = { appointmentTitleText }>Appointment details:</Text>
                    <Text style = { appointmentTypeText }>{appointmentType}</Text>
                </AppointmentTitle>
                <AppointmentTimer>
                    <Text style = { appointmentTimerText }>{appointmentDate.fromNow()}</Text>
                </AppointmentTimer>
            </AppointmentHeader>

            <AppointmentBody>
                <AppointmentDetail>
                    <Ionicons name = "md-pin" size = {30} color = "black"></Ionicons>
                    <Text onPress={() => Linking.openURL('http://google.com')}>{location}</Text>
                </AppointmentDetail>
                <AppointmentDetail>
                <Ionicons name = "ios-clock" size = {30} color = "black"></Ionicons>
                    <Text>{appointmentDate.format('MMMM Do YYYY, h:mm a')}</Text>
                </AppointmentDetail>

                <View>
                    <Button title='Preparation checklist' onPress = {doNothing}/>
                </View>

                <View>
                    <Button title='What to expect' onPress = {doNothing}/>
                </View>

                <Text>
                    Can't make it to your appointment? It's important to
                    let us know so we can offer your slot to somebody else:
                </Text>

                <View>
                    <Button title='Cancel or change appointment' onPress = {doNothing}/>
                </View>
            </AppointmentBody>
        </AppointmentContainer>
    );
}

