import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../components/common/Button';
import { LinearGradient } from 'expo';

export default class LinearMainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#514A9D', '#24C6DC']} start={[0.5, 0.0]} end={[0.5, 1.0]} locations={[0.0, 1.0]}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <View style={{paddingTop: 40}}>
                <Image style={{width: 250, height: 100,}} source={{uri: 'https://www.chortho.co.uk/wp-content/uploads/2018/11/nhs.png'}} />
                </View>
                    <Text style={{textAlign: 'center',paddingBottom: 30, paddingTop: 30, fontWeight: 'bold'}}>To begin, scan your appointment code {"\n"}
                   which will be included alongside your {"\n"}
                    confirmation letter.</Text>
                <View style={{paddingBottom: 30}} >

                <Button size={30} padding={20} width='80%' backgroundColor='#007dff' color='#ffffff' name='md-qr-scanner' onPress={() => navigate('QRAuth')}>Scan appointment code</Button>
                </View>
                <View>
               <Button  size={30} padding={20} width='80%' name ='ios-paper' backgroundColor='#007dff' color= '#ffffff' onPress={() => navigate('ManualAuth')}>Enter Details Manually</Button>
                </View>
                <View style={{paddingTop: 40}}>

                    <Image style={{width: 300, height: 170,}} source={{uri: 'https://www.silicon.co.uk/wp-content/uploads/2016/09/NHS-Digital.jpg'}} />

                </View>
        </LinearGradient>
      </View>
    );
  }
}