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
import EventBar from "./EventBar"

export default class AppointmentCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { expanded: this.props.expanded || true };
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
                    <View style={{borderTopWidth: 0.5,borderColor: '#d6d7da',paddingTop: 15,paddingBottom:15}}>
                        <EventBar
                            icon_name={'access-time'}
                            primary_text={appointmentDate.format('MMMM Do YYYY, h:mm a')}
                            icons_library={'MaterialIcons'}/>

                        <EventBar icon_name={'place'}
                                  primary_text={location.name}
                                  icons_library={'MaterialIcons'}/>
                    </View>

                    <View style={{paddingBottom: 15, alignItems: 'center'}}>
                        <Button paddingLeft={15} size={30} borderRadius={5}  width='100%' color='white'
                                name="ios-checkbox-outline" backgroundColor='#2481db' onPress={() => this.props.navigation.navigate('Timeline', this.props.prepInfo)}>Preparation checklist</Button>
                    </View>

                    <View style={{paddingBottom: 15,alignItems: 'center'}}>
                        <Button paddingLeft={15} borderRadius={5} size={30} width='100%'  color='white' name="ios-information-circle-outline"
                                backgroundColor='#2481db'
                                onPress={() => this.props.navigation.navigate('Expect', this.props.prepInfo)}>What to Expect </Button>
                    </View>

                    <Text style={{fontWeight: 'bold', color: '#768692'}}>
                        Can't make it to your appointment?
                    </Text>
                    <Text style={{ color: '#768692'}}>
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

