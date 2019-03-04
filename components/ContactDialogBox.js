import React, { Component } from "react";
import { Linking,Text, TouchableOpacity, View } from "react-native";
import Dialog from "react-native-dialog";


class DialogBox extends Component {

    state = {
        isVisible: false,
    };

    show = () => {

        this.setState({isVisible: true})
    }
    hide = () => {

        this.setState({isVisible: false})
    }

    render(){
        return (

            <View style={{alignItems: 'center',}}>
                <TouchableOpacity onPress={this.show}>
                    <Text>Cancel or change appointment</Text>
                </TouchableOpacity>
                <Dialog.Container visible={this.state.isVisible}>
                    <Dialog.Title>Contact</Dialog.Title>
                    <Dialog.Description>
                    </Dialog.Description>
                    <Dialog.Description>
                        Email: 123@hotmail.co.uk
                    </Dialog.Description>
                    <Dialog.Button label="Close" onPress={this.hide} />
                </Dialog.Container>
            </View>

        );
    }

}

export default DialogBox;