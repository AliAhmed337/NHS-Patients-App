import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet} from "react-native";
import Modal from "react-native-modal";

export default class ModalScreen extends Component {
    constructor(){
        super()
        this.state={
            showMe: false
        }
    }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() =>{
            this.setState({
                showMe: true
            })
        }}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal visible={this.state.showMe}>
          <View style={styles.modalView}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={() =>{
            this.setState({
                showMe: false
            })
        }}>
              <Text style={styles.closeText}>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity>
            <Text style={styles.openText}>open Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    modalView:{
        backgroundColor: "#ffffff",
        height: 150, 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    closeText:{
        backgroundColor: '#333',
        color: '#bbb',
        padding: 5, 
        margin: 20, 
    },
    openText:{
        backgroundColor: '#333',
        color: '#bbb',
        padding: 5,
        margin: 20
    }
}) 