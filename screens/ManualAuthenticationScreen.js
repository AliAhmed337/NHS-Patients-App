import React from 'react';
import {Text,View,TextInput} from 'react-native';
import Button from '../components/common/Button';
import Header from '../components/common/ScreenHeader';


export default class ManualAuthenticationScreen extends React.Component {
    static navigationOptions = {
        title: 'Enter details manually',
    };
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Enter your reference number:</Text>
            <TextInput
                placeholder = "input"
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>
            <Button>Submit</Button>
                <Text>You'll find this on your appointment confirmation {"\n"}
                    letter or text message</Text>
            </View>
        )
    }
}

