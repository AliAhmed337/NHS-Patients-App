import React from 'react';
import { Text, View} from 'react-native';
import moment from 'moment';
import styles from '../StyleSheet';
import { Ionicons } from '@expo/vector-icons';
import {
    AppointmentHeader,AppointmentBody, AppointmentDetail,
    AppointmentTimer,AppointmentTitle, AppointmentContainer
} from './appointment_elements';
import ContactModal from "./ContactModal";
import DialogBox from './ContactDialogBox'
import Button from "./common/Button"

export const AppointmentCard = ({appointment},{navigation}) => {

    const {appointmentType, startTime, location} = appointment;
    const appointmentDate = moment(startTime);
    const {appointmentTypeText, appointmentTitleText, appointmentTimerText} = styles;

    const doNothing = () => {

    }

        return (
            <AppointmentContainer>
                <AppointmentHeader>
                    <AppointmentTitle>
                        <Text style={appointmentTitleText}>Appointment details:</Text>
                        <Text style={appointmentTypeText}>{appointmentType}</Text>
                    </AppointmentTitle>
                    <AppointmentTimer>
                        <Text style={appointmentTimerText}>{appointmentDate.fromNow()}</Text>
                    </AppointmentTimer>
                </AppointmentHeader>

                <AppointmentBody>
                    <View style={[{paddingBottom: 10}, {paddingTop: 10}]}>
                        <AppointmentDetail>
                            <Ionicons name="md-pin" size={15} color="black"></Ionicons>
                            <Text style={{paddingLeft: 30}}
                                  onPress={() => Linking.openURL('http://google.com')}>{location}</Text>
                        </AppointmentDetail>
                    </View>
                    <View style={[{paddingBottom: 10}, {paddingTop: 10}]}>
                        <AppointmentDetail>
                            <Ionicons name="ios-clock" size={15} color="black"></Ionicons>
                            <Text style={{paddingLeft: 30}}>{appointmentDate.format('MMMM Do YYYY, h:mm a')}</Text>
                        </AppointmentDetail>
                    </View>
                    <View style={{paddingBottom: 10}}>
                        <Button style={{paddingBottom: 20}} size={30} padding={10} width='100%' color='#ffffff'
                                onPress={doNothing} name="md-checkbox" backgroundColor='#00a753'>Preparation
                            checklist</Button>
                    </View>
                    <View style={{paddingBottom: 10}}>
                        <Button padding={10} size={30} width='100%' color='#000000'
                                onPress={() => navigation.navigate('Expect')} name="md-information-circle"
                                backgroundColor='#d3d3d3'>What to Expect</Button>
                    </View>

                    <Text style={{fontWeight: 'bold'}}>
                        Can't make it to your appointment?
                    </Text>
                    <Text>
                        It's important to
                        let us know so we can offer your slot to somebody else:
                    </Text>

                    <View>
                        <DialogBox/>
                    </View>
                </AppointmentBody>
            </AppointmentContainer>
        );


}

export default AppointmentCard;

