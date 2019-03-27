import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import * as Animatable from 'react-native-animatable';
import { ReactRender } from '../components/common/ReactRender/ReactRender';
import FoodTESTTemp from './FoodTESTTemp.json';

  export default class IndividualMenuItem extends Component {

    static navigationOptions = {
      title: 'Food Dish',
      fontWeight: 'bold',

      headerStyle: {
        backgroundColor: '#005EB8',
        borderBottomWidth: 0,
        elevation:0
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign:"center", 
        flex:1 
      },
      indicatorStyle: {
        backgroundColor: '#ffffff',
    },
    headerTintColor: '#ffffff'
    };

    render(){
    return (
      <View style={{flexGrow: 1, flexDirection: 'column'}}>
        <View
          style={{width: '100%', height: '25%', position:'relative'}}
          >
            <Animatable.Image 
              source={{uri:'http://totsfamily.com/wp-content/uploads/2016/10/IMG_0028.jpg'}} 
              style={{'flex':1}} animation="fadeInDown"
            />
              <Animatable.View 
                animation="fadeInUp"
                style={{
                  position:'absolute',
                  position:'absolute',
                  top: '85%',
                  left: 20,
                  right: 20,
                  borderRadius: 10,
                  backgroundColor: '#E8EDEE',
                  flexDirection: 'column'
                }}
              >
                <Text style={{
                  fontSize: 25, 
                  paddingLeft: 10, 
                  paddingBottom: 30, 
                  paddingTop: 30, 
                  fontWeight: 'bold', 
                  color: 'black'}}
                  >Title of Dish</Text> 
                  {/* ^PUT the title of the dish there */}

                <Text style={{
                  fontSize: 25, 
                  paddingLeft: 10, 
                  paddingBottom: 20, 
                  paddingTop: 30, 
                  fontWeight: 'bold', 
                  color: 'black'}}
                >Ingredients</Text>
      
                {/* THIS IS WHERE WE BULLET POINT INGREDIENTS IN A FLATLIST */}
                <ReactRender 
                style={{height: undefined, width: undefined}}
                data={require('./IngredientsTESTTemp.json')}
                />

                <Text style={{
                  fontSize: 25, 
                  paddingLeft: 10, 
                  paddingBottom: 20, 
                  paddingTop: 30, 
                  fontWeight: 'bold', 
                  color: 'black'}}
                >How to cook</Text>
                  
              {/* This is where the code for rendering methods is: */}
              <ReactRender 
                style={{height: undefined, width: undefined}}
                data={require('./FoodTESTTemp.json')}
                />

              </Animatable.View>
          </View>
        </View>
    );
  }
}

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


