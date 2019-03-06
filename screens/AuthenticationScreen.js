import React from 'react';
import {Text,View,} from 'react-native';
import Button from '../components/common/Button';
import Header from '../components/common/ScreenHeader';


export default class AuthenticationScreen extends React.Component {
    static navigationOptions = {
        title: 'NHS My Appointments',
    };

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>To begin, scan your appointment code {"\n"}
                    will be included alongside your {"\n"}
                    confirmation letter</Text>
                <Button onPress={() => navigate('QRAuth')} name='md-qr-scanner'> Scan QR </Button>
               <Button onPress={() => navigate('ManualAuth')}>Enter Details Manually</Button>
            </View>
        )
    }
}