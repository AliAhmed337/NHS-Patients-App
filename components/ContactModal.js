import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

class ContactModal extends Component  {
    state = {
        isVisible: false,
    };

    toggleModal = () =>
        this.setState({ isVisible: !this.state.isVisible });


    render() {
        return (
            <View style={{  flex: 1,
                }}>
                <TouchableOpacity onPress={this.toggleModal}>
                    <Text>Cancel or change appointment</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isVisible} animationType='slide' transparent={true}>
                    <View style={{flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',

                        }}>
                        <View style={{
                            width: 300,
                            height: 300,
                            backgroundColor: '#ffffff',}}>
                        <Text>Contacts</Text>
                        <TouchableOpacity onPress={this.toggleModal}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
            </View>
        );
    }

}

export default ContactModal;