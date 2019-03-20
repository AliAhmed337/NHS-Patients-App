import React from 'react';
import {Text,View,TextInput, ActivityIndicator, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { passphraseChanged, verifyUser } from '../actions';
import Button from '../components/common/Button';
import { LinearGradient } from 'expo';

class ManualAuthenticationScreen extends React.Component {
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

    _onPassphraseChange(text) {
        this.props.passphraseChanged(text);
    }

    _onSubmitPress(){
        const {passphrase, verifyUser} = this.props;
        Keyboard.dismiss();
        verifyUser(passphrase);
    }

    _renderForm(){
        return (
            <View
            style={{ padding: 20, flex: 1, alignSelf: 'flex-start',}}>

            <View >
                <Text style={{fontSize: 30, paddingBottom: 30, 
                paddingTop: 30, fontWeight: 'bold', color: 'black'}}>
                Enter your passphrase:
                </Text>

                <Text style={{fontSize: 17, paddingBottom: 30, color: 'black'}}>
                You'll find this on your appointment confirmation letter or text message.
                </Text>

            <TextInput
                placeholder = "example: gooseberry1034"
                style={{textAlign: 'center',height: 50, borderColor: 'gray', borderWidth: 1}}
                onChangeText={this._onPassphraseChange.bind(this)}
                value={this.props.passphrase}/>

            <View style={{paddingBottom: 30, paddingTop: 30}}>
                <Button size={30}  padding={20} name = 'md-arrow-dropright-circle' backgroundColor='#007dff' color='#ffffff' 
                    onPress = {this._onSubmitPress.bind(this)}>
                        {this.props.loading ? <ActivityIndicator/> : 'Submit'}
                </Button>
                </View>      
            </View>
            </View>
        );
    }

    render(){
        const {navigate} = this.props.navigation;
        console.log(this.props.user ? true : false);
        return(this.props.user ? navigate('Main') : this._renderForm());        
    }
}

const mapStateToProps = ({ manRed }) => {
  const { passphrase, user, loading } = manRed;
  return { passphrase, user,  loading };
}

export default connect(mapStateToProps, {passphraseChanged, verifyUser})(ManualAuthenticationScreen);
