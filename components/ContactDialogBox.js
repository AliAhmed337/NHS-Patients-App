import React, { Component } from "react";
import { Linking,Text, TouchableOpacity, View } from "react-native";
import Dialog from "react-native-dialog";
import Button from "./common/Button";


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
                <View style={[{paddingTop: 10},{paddingBottom: 10}]}>
                <TouchableOpacity style={[styles.buttonBody, {backgroundColor: '#97372E'}, {padding:10}, {width:'100%'}] }onPress={this.show}>
                    <Text style={[{color:'#ffffff'},styles.buttonText]}>Cancel or change appointment</Text>
                </TouchableOpacity>
                </View>
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


const styles = ({
    buttonBody: {


        alignItems: 'center',
        borderRadius: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
    }


})

export default DialogBox;