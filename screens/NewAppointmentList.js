import React from 'react';
import {Text,View,TextInput, ActivityIndicator, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { passphraseChanged, verifyUser } from '../actions';
import Button from '../components/common/Button';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

export default class NewAppointmentList extends React.Component {

    render(){
        return(
            <View style={{flex: 1}}>
               <Card>
                <CardImage 
                    source={{uri: 'https://guysandstthomasprivatehealthcare.co.uk/wp-content/uploads/2018/10/NHS-Private-Patients-894-1.jpg'}} 
                    title="Above all i am here"
                />
                <CardTitle 
                    title="This is a title" 
                    subtitle="This is subtitle"
                />
                <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                    onPress={() => {}}
                    title="Push"
                    color="blue"
                    />
                    <CardButton
                    onPress={() => {}}
                    title="Later"
                    color="blue"
                    />
                </CardAction>
                </Card>
                </View>
        );
    }
}