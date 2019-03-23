import React from 'react';
import {Text,View,TextInput, ActivityIndicator, Image} from 'react-native';
import { connect } from 'react-redux';
import { passphraseChanged, verifyUser } from '../actions';
import Button from '../components/common/Button';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

export default class NewAppointmentList extends React.Component {

    render(){
        return(
               <View style={styles.card}>
                    <Image 
                    style={styles.stretch}
                    source={{uri: 'https://guysandstthomasprivatehealthcare.co.uk/wp-content/uploads/2018/10/NHS-Private-Patients-894-1.jpg'}}
                    />
               </View>
            
        );
    }
}

const styles = {
    newimg: {
        flex: 1, height: null, 
        width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' },
    newCard: {
        width: 400, height: 200, marginTop: 20, justifyContent: 'center',
    },
    card: {
        flexDirection: "row",
        backgroundColor:"#fff",
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8, //0.1
        shadowRadius: 10, //2
        elevation: 5, //1
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 5,
        overflow: 'hidden',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        borderWidth: 1, 
    },
    stretch: {
        resizeMode: 'stretch',
        width: '100%',
        height: 200, 
    },
    buttonBody: {


        alignItems: 'center',
        borderRadius: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    buttonImg: {
        marginRight: 17
    }
}

