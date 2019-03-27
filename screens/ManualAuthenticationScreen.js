import React from 'react';
import {Text,View,TextInput, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { passphraseChanged, verifyUser } from '../actions';
import Button from '../components/common/Button';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class ManualAuthenticationScreen extends React.Component {
    static navigationOptions = {
        title: 'Sign in manually',
        headerStyle: {
            backgroundColor: '#005EB8',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign:"center",
            flex:1
        },
        headerTintColor: '#fff',
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
                style={{ padding: 40, flex: 1, alignItems: 'center'}}>
                <View>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: '#231f20', paddingBottom: 40}}>
                        Sign in manually
                    </Text>
                    <Text style={{fontSize: 18, paddingBottom: 40, color: '#231f20'}}>
                        If you can't scan your appointment confirmation letter, you can enter the code manually.{'\n'}{'\n'}
                        Your hospital can give you a new code over the phone if you've lost it.
                    </Text>

                    <View style={{paddingBottom: 40, flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons style={{paddingRight: 20}}name='ios-arrow-dropright' size={30} color='#6C6C6C'/>
                        <TextInput
                            placeholder = "Enter Code Here"
                            placeholderTextColor = '#C5C2C2'
                            placeholderTextAlign = 'left'
                            style={{textAlign: 'left', textAlignVertical: 'bottom',height: 50, borderBottomColor: '#6C6C6C', borderBottomWidth: 2, width: 250, color: 'black',}}
                            onChangeText={this._onPassphraseChange.bind(this)}
                            value={this.props.passphrase}/>
                    </View>


                    <Button padding={20} noIcon width='100%' backgroundColor='#005EB8' color='#FFFFFF'
                            onPress = {this._onSubmitPress.bind(this)} loading = {this.props.loading}>
                        {'Sign in'}
                    </Button>

                    {this._renderError()}
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

const mapStateToProps = ({ authRed }) => {
    const { passphrase, user, loading, error} = authRed;
    return { passphrase, user,  loading, error };
}

export default connect(mapStateToProps, {passphraseChanged, verifyUser})(ManualAuthenticationScreen);