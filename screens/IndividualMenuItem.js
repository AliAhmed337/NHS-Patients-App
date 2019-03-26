import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import * as Animatable from 'react-native-animatable';

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
        <View
          style={{width: '100%', height: '25%', position:'relative'}}
          >
            <Animatable.Image source={{uri:'http://totsfamily.com/wp-content/uploads/2016/10/IMG_0028.jpg'}} style={{'flex':1}} animation="fadeIn"/>
              <Animatable.View 
                animation="fadeInUp"
                style={{
                  position:'absolute',
                  position:'absolute',
                  top: '85%',
                  left: 20,
                  right: 20,
                  height: 100,
                  borderRadius: 10,
                  backgroundColor: '#E8EDEE',
                  flexDirection: 'column'
                }}
              >
              <Text style={{fontSize: 25, paddingLeft: 10, paddingBottom: 30, 
                paddingTop: 30, fontWeight: 'bold', color: 'black'}}>Ingredients</Text>
              </Animatable.View>
          </View>
        </View>

    );
  }
}