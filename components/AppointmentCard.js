import React from 'react';
import { Text, View, TouchableOpacity, Platform} from 'react-native';
import moment from 'moment';
import styles from '../StyleSheet';
import { Ionicons } from '@expo/vector-icons';
import {
    AppointmentHeader,AppointmentBody, AppointmentDetail,
    AppointmentTimer,AppointmentTitle, AppointmentContainer
} from './appointment_elements';
import DialogBox from './ContactDialogBox'
import Button from "./common/Button"

export default class AppointmentCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { expanded: this.props.expanded || false };
    }

    _toggleExpand(){
        this.setState((state) => ({
            expanded: !state.expanded
        }));
    }

    _renderCollapsed() {
        console.log('rendering the collapsed version');
        const {appointmentType, startTime} = this.props.appointment;
        console.log(appointmentType.name + ' ' + startTime);
        const appointmentDate = moment(startTime);
        const {appointmentTypeText, appointmentTitleText} = styles;

        return (
            <AppointmentContainer>
                <TouchableOpacity onPress={() => this._toggleExpand()}>
                    <AppointmentHeader>
                        <AppointmentTitle>
                            <Text style={appointmentTitleText}>{appointmentDate.format('MMMM Do YYYY, h:mm a')}</Text>
                            <Text style={appointmentTypeText}>{appointmentType.name}</Text>
                        </AppointmentTitle>
                        <Ionicons name= {Platform.OS === 'ios' ? 'ios-arrow-down' : 'md-arrow-dropdown'} size={30} color="white"></Ionicons>
                    </AppointmentHeader>
                </TouchableOpacity>
            </AppointmentContainer>
        );
    }

    _renderExpanded() {
        console.log('Rendering expanded version');
        const {appointmentType, startTime, location, contactPoint} = this.props.appointment;
        const appointmentDate = moment(startTime);
        const {appointmentTypeText, appointmentTitleText, appointmentTimerText} = styles;

        return (
            <AppointmentContainer>
                <TouchableOpacity onPress={() => this._toggleExpand()}>
                    <AppointmentHeader>
                        <AppointmentTitle>
                            <Text style={appointmentTitleText}>Appointment details:</Text>
                            <Text style={appointmentTypeText}>{appointmentType.name}</Text>
                        </AppointmentTitle>
                        <AppointmentTimer>
                            <Text style={appointmentTimerText}>{appointmentDate.fromNow()}</Text>
                        </AppointmentTimer>
                    </AppointmentHeader>
                </TouchableOpacity>

                    <AppointmentBody>
                        <AppointmentDetail>
                            <Ionicons name="md-pin" size={15} color="black"></Ionicons>
                            <Text style={{paddingLeft: 30}} onPress={() => Linking.openURL(
                                Platform === 'ios' ? location.maps.appleMapsURL : location.maps.googleMapsURL
                                )}>{location.name}</Text>
                        </AppointmentDetail>
                        <AppointmentDetail>
                            <Ionicons name="ios-clock" size={15} color="black"></Ionicons>
                            <Text style={{paddingLeft: 30}}>{appointmentDate.format('MMMM Do YYYY, h:mm a')}</Text>
                        </AppointmentDetail>

                        <View style={{paddingBottom: 10}}>
                            <Button style={{paddingBottom: 20}} size={30} padding={10} width='100%' color='#ffffff'
                            onPress={() => this.props.navigation.navigate('Timeline', this.props.prepInfo)} name="md-checkbox" 
                            backgroundColor='#41557B'>Preparation checklist</Button>
                        </View>

                        <View style={{paddingBottom: 10}}>
                            <Button padding={10} size={30} width='100%' color='#ffffff'
                            onPress={() => this.props.navigation.navigate('Expect')} name="md-information-circle" 
                            backgroundColor='#C4A1C1'>
                                What to Expect
                            </Button>
                        </View>

                        <Text style={{fontWeight: 'bold'}}>
                            Can't make it to your appointment?
                        </Text>
                        <Text>
                            It's important to
                            let us know so we can offer your slot to somebody else:
                        </Text>

                        <View>
                            <DialogBox contactNo = {contactPoint.telephone} email = {contactPoint.email} />
                        </View>
                    </AppointmentBody>
            </AppointmentContainer>
        );
    }

    render() {
        console.log('are we expanded: ' + this.state.expanded);
        return this.state.expanded ? this._renderExpanded() : this._renderCollapsed();
  }
}
