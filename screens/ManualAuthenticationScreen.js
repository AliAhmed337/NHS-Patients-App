import React from 'react';
import {Text,View,TextInput, ActivityIndicator, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { passphraseChanged, verifyUser } from '../actions';
import Button from '../components/common/Button';

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
            <View style={{alignItems: 'center', paddingTop: 20,}}>
                <Text style={{fontSize: 30, textAlign: 'center',paddingBottom: 30, 
                paddingTop: 30, fontWeight: 'bold'}}>
                    Enter your passphrase:
                </Text>
            <TextInput
                placeholder = "example: gooseberry1034"
                style={{textAlign: 'center',height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                onChangeText={this._onPassphraseChange.bind(this)}
                value={this.props.passphrase}/>
            <View style={{paddingBottom: 30, paddingTop: 30}}>
                <Button size={30}  padding={20} name = 'md-arrow-dropright-circle' width='80%' backgroundColor='#007dff' color='#ffffff' 
                    onPress = {this._onSubmitPress.bind(this)}>
                        {this.props.loading ? <ActivityIndicator/> : 'Submit'}
                </Button>        
            </View>
                <Text style={{fontSize: 15, textAlign: 'center',
                    paddingBottom: 30, paddingTop: 10, fontWeight: 'bold'}}>
                        You'll find this on your appointment confirmation {"\n"}
                        letter or text message
                </Text>
            </View>
        );
    }

    render(){
        const {navigate} = this.props.navigation;
        console.log(this.props.user ? true : false);
        return(this.props.user ? navigate('Main') : this._renderForm());        
    }
}

const mapStateToProps = ({ authRed }) => {
  const { passphrase, user, loading } = authRed;
  return { passphrase, user,  loading };
}

export default connect(mapStateToProps, {passphraseChanged, verifyUser})(ManualAuthenticationScreen);
