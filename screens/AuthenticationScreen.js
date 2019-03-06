import React from 'react';
import {Text,View,Image} from 'react-native';
import Button from '../components/common/Button';
import Header from '../components/common/ScreenHeader';


export default class AuthenticationScreen extends React.Component {
    static navigationOptions = {
        title: 'NHS My Appointments',

        headerStyle: {
            backgroundColor: '#007dff',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
        },
    };

    render(){
        const {navigate} = this.props.navigation;
        return (

            <View style={{backgroundColor: '#ffffff', alignItems: 'center', flex: 1,}}>
                <View style={{paddingTop: 40}}>
                <Image style={{width: 250, height: 100,}} source={{uri: 'https://www.chortho.co.uk/wp-content/uploads/2018/11/nhs.png'}} />
                </View>
                <Text style={{textAlign: 'center', fontFamily: 'sans-serif',paddingBottom: 30, paddingTop: 30, fontWeight: 'bold'}}>To begin, scan your appointment code {"\n"}
                   which will be included alongside your {"\n"}
                    confirmation letter.</Text>
                <View style={{paddingBottom: 30}} >
                <Button  width='80%' backgroundColor='#007dff' color='#ffffff' name='md-qr-scanner'>Scan your appointment code</Button>
                </View>
                <View>
               <Button  width='80%' name ='ios-paper' backgroundColor='#007dff' color= '#ffffff' onPress={() => navigate('ManualAuth')}>Enter Details Manually</Button>
                </View>
                <View style={{paddingTop: 40}}>
                    <Image style={{width: 300, height: 170,}} source={{uri: 'https://www.silicon.co.uk/wp-content/uploads/2016/09/NHS-Digital.jpg'}} />
                </View>
            </View>

        )
    }
}