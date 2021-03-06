import React from 'react';
import {ScrollView, View,Image,StatusBar,Text } from 'react-native';
import Button from '../components/common/Button';


/**
 * The user is presented with this screen if they do not currently 
 * possess a valid token. This will allow them to proceed by scanning
 * a QR generated code on their appointment letter or manually.
 */
export default class AuthenticationScreen extends React.Component  {

    static navigationOptions = {
        header: null
    };

    render(){
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={{ backgroundColor: '#FFFFFF', flex: 1}}>
                <View style={{ padding: 20, height: 200, backgroundColor: '#005EB8' }}>

                    <StatusBar barStyle="light-content"/>

                    <View style={{alignItems: 'center'}}>
                        <Image style={{width: 300, height: 200, resizeMode: 'contain'}} source={require("../assets/images/splash.png")} />
                    </View>
                </View>
                <View style={{backgroundColor : '#FFFFFF', flex: 2, alignItems: 'center'}}>
                    <View style={{paddingHorizontal: 20,paddingTop: 35, paddingBottom: 25}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#231f20', paddingBottom: 10}}>
                            Let's get started
                        </Text>
                        <Text style={{fontSize: 18, fontWeight: 'normal', color: '#231f20', paddingBottom: 10}}>
                        The NHS MyAppointment app is the easiest way to be properly prepared for your appointment. Choose below to begin. 
                        </Text>
                    </View>
                    <View style={{paddingBottom: 30}}>
                        <Button size={20} padding={20} width='90%' style={{marginBottom: 20}} backgroundColor='#005EB8' color='#ffffff' name='md-barcode' onPress={() => navigate('QRAuth')}>Scan your appointment code</Button>
                    </View>
                    <View>
                        <Button padding={20} width='90%' backgroundColor='#E8EDEE' color= '#231f20' onPress={() => navigate('ManualAuth')} noIcon >Enter your details manually</Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}