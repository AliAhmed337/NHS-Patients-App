import React from 'react';
import {Text,View,TextInput, ActivityIndicator, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { passphraseChanged, verifyUser } from '../actions';
import Button from '../components/common/Button';

class ManualAuthenticationScreen extends React.Component {
    static navigationOptions = {
        title: 'Enter details manually',
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
            <View>
                <Text>Enter your passphrase:</Text>
            <TextInput
                placeholder = "example: gooseberry1034"
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={this._onPassphraseChange.bind(this)}
                value={this.props.passphrase}/>
            <Button onPress = {this._onSubmitPress.bind(this)}>{this.props.loading ? <ActivityIndicator/> : 'Submit'}</Button>
                <Text>You'll find this on your appointment confirmation {"\n"}
                    letter or text message</Text>
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
