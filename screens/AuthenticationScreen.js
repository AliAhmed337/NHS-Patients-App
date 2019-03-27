import React from 'react';
import {View,Image,StatusBar,Text} from 'react-native';
import Button from '../components/common/Button';



export default class AuthenticationScreen extends React.Component  {

    static navigationOptions = {
        header: null
    };

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={{ backgroundColor: '#005EB8', flex: 1}}>
                <View style={{ padding: 20, height: 250 }}>

                    <StatusBar barStyle="light-content"/>

                    <View style={{ paddingTop: 0, paddingBottom: 0, alignItems: 'center'}}>
                        <Image style={{width: 350, height: 250, resizeMode: 'contain'}} source={require("../assets/images/splash.png")} />
                    </View>
                </View>
                <View style={{backgroundColor : '#FFFFFF', flex: 1, alignItems: 'center'}}>
                    <View style={{paddingHorizontal: 20,paddingBottom: 60,paddingTop: 60}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#231f20', paddingBottom: 10}}>
                            Let's get started
                        </Text>
                        <Text style={{fontSize: 18, fontWeight: 'normal', color: '#231f20'}}>
                            To begin, you'll need an appointment code. You'll find this with your appointment confirmation letter.
                        </Text>
                    </View>
                    <View style={{paddingBottom: 30}}>
                        <Button size={20} padding={20} width='90%' style={{marginBottom: 20}} backgroundColor='#005EB8' color='#ffffff' name='md-barcode' onPress={() => navigate('QRAuth')}>Scan your appointment code</Button>
                    </View>
                    <View>
                        <Button padding={20} width='90%' backgroundColor='#E8EDEE' color= '#231f20' onPress={() => navigate('ManualAuth')} noIcon fontSize='small'>Enter your details manually</Button>
                    </View>
                </View>
            </View>
        )
    }
}