import React from 'react';
import {Text,View,TextInput, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { passphraseChanged, verifyUser } from '../actions';
import Button from '../components/common/Button';
import { LinearGradient } from 'expo';

class ManualAuthenticationScreen extends React.Component {
    static navigationOptions = {
        title: 'Enter details manually',
        headerStyle: {
            backgroundColor: '#005EB8',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign:"center", 
            flex:1 
        },
        headerTintColor: '#ffffff',
    };

    _onPassphraseChange(text) {
        this.props.passphraseChanged(text);
    }

    _onSubmitPress(){
        const {passphrase, verifyUser} = this.props;
        Keyboard.dismiss();
        verifyUser(passphrase);
    }

    _renderError(){
        const {error} = this.props;
        return <Text>{error}</Text>
    }

    _renderForm(){
        return (
            <View
            style={{ padding: 20, flex: 1, alignSelf: 'flex-start',}}>

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
                <Button size={30} padding={20} name = 'md-arrow-dropright-circle' width='80%' backgroundColor='#007dff' color='#ffffff' 
                    onPress = {this._onSubmitPress.bind(this)} loading = {this.props.loading}>
                {'Submit'}
                </Button>      
            </View>
                <Text style={{fontSize: 15, textAlign: 'center',
                    paddingBottom: 30, paddingTop: 10, fontWeight: 'bold'}}>
                        You'll find this on your appointment confirmation {"\n"}
                        letter or text message
                </Text>
                {this._renderError()}
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
  const { passphrase, user, loading, error} = authRed;
  return { passphrase, user,  loading, error };
}

export default connect(mapStateToProps, {passphraseChanged, verifyUser})(ManualAuthenticationScreen);
