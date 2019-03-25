import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ImageOverlay from "react-native-image-overlay";

  const styles = StyleSheet.create({
    gridView: {
      marginTop: 0,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'center',
      borderRadius: 5,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    dialogTitleStyle: {
      width: 340
    }
  });
  
  export default class IndividualMenuItem extends Component {

    static navigationOptions = {
      title: 'HEAY',
      color: 'white',
      fontWeight: 'bold',
      headerStyle: {
        backgroundColor: '#005EB8',
        borderBottomWidth: 0,
        elevation:0
      },
      indicatorStyle: {
        backgroundColor: '#ffffff',
    }
    };

    render(){
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <Image 
       style={{width: '100%', height: '35%'}}
       source={{uri: 'https://www.lecremedelacrumb.com/wp-content/uploads/2017/07/lemon-dill-salmon-101.jpg'}} 

      />
        <Text>Hey</Text> 
      </View>
    );
  }
}