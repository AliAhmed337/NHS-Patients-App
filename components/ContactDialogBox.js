import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
        const { contactNo, email } = this.props;
        return (

            <View style={{alignItems: 'center',}}>
                <View style={[{paddingTop: 15},{paddingBottom: 15}]}>
                    <TouchableOpacity style={[styles.buttonBody, {backgroundColor: '#DA291C'}, {padding:10}, {width:'100%'}, {borderRadius: 5}] }onPress={this.show}>
                        <Text style={[{color:'#ffffff'},styles.buttonText]}>Cancel or change appointment</Text>
                    </TouchableOpacity>
                </View>
                <Dialog.Container visible={this.state.isVisible}>
                    <Dialog.Title>Contact</Dialog.Title>
                    <Dialog.Description>
                        {contactNo ? "Department Telephone: \n" + contactNo : "Department Telephone: \n Not Available"}
                    </Dialog.Description>
                    <Dialog.Description>
                        {email ? "Email Address: \n" + email : "Email Address: \n Not Available"}
                    </Dialog.Description>
                    <Dialog.Button label="Close" onPress={this.hide} />
                </Dialog.Container>
            </View>

        );
    }

}


const styles = ({
    buttonBody: {

        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
    }


})

export default DialogBox;