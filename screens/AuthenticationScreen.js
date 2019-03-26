import React from 'react';
import {View,Image, StatusBar, Text} from 'react-native';
import Button from '../components/common/Button';
import {ThemeProvider} from "react-native-elements";
import { LinearGradient } from 'expo';


export default class AuthenticationScreen extends React.Component  {

    static navigationOptions = {
        header: null
    };

    render(){
        const {navigate} = this.props.navigation;
        return (
            <LinearGradient
          colors={['#005EB8', '#005EB8', '#00A499']}
          style={{ padding: 15, alignItems: 'center', flex: 1,alignItems: 'center',
          justifyContent: 'center'}}>
                  <StatusBar barStyle="light-content"/>

                <View style={{paddingTop: 40, paddingBottom: 100}}>
                <Image style={{width: 250, height: 100, paddingTop: 5}} source={{uri: 'https://blog.sense.org.uk/wp-content/uploads/NHS-Logo.png'}} />
                </View>
                <View style={{paddingBottom: 30}}>

                <Button size={30} padding={20} width='80%' backgroundColor='#00A499' color='#ffffff' name='md-qr-scanner' onPress={() => navigate('QRAuth')}>Scan appointment code</Button>
                </View>
             
               <Button  size={30} padding={20} width='80%' name ='ios-paper' backgroundColor='#00A499' color= '#ffffff' onPress={() => navigate('ManualAuth')}>Enter Details Manually</Button>
               
                <View style={{paddingTop: 40}}>
                </View>

                </LinearGradient>

        )
    }
}
