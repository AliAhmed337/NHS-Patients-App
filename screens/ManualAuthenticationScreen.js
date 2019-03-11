import React from 'react';
import {Text,View,TextInput} from 'react-native';
import Button from '../components/common/Button';
import Header from '../components/common/ScreenHeader';


export default class ManualAuthenticationScreen extends React.Component {
    static navigationOptions = {
        title: 'Enter details manually',
        headerStyle: {
            backgroundColor: '#007dff',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
        },
    };
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={{alignItems: 'center', paddingTop: 20,}}>
                <Text style={{fontSize: 30, textAlign: 'center', fontFamily: 'sans-serif',paddingBottom: 30, paddingTop: 30, fontWeight: 'bold'}}>Enter your reference number:</Text>
            <TextInput
                placeholder = "Enter reference number here"
                style={{textAlign: 'center',height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>
                <View style={{paddingBottom: 30, paddingTop: 30}}>
            <Button size={30}  padding={20} name = 'md-arrow-dropright-circle' width='80%' backgroundColor='#007dff' color='#ffffff'>Submit</Button>
                </View>
                <Text style={{fontSize: 15, textAlign: 'center', fontFamily: 'sans-serif',paddingBottom: 30, paddingTop: 10, fontWeight: 'bold'}}>You'll find this on your appointment{"\n"}
                    confirmation letter or text message.</Text>
            </View>
        )
    }
}

