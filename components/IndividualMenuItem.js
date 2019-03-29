import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import IngredientList from './IngredientList';
import * as Animatable from 'react-native-animatable';

  /**
   * A menu item that is desgined to be displayed once a user
   * clicks on it from the menu tab. It contains information like
   * ingredients, prep time, and methods on making it.
   */
  export default class IndividualMenuItem extends Component {

    static navigationOptions = {
      title: 'Recipe',
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
      const recipe = this.props.navigation.state.params;
      return (
        <View style={{flexGrow: 1, flexDirection: 'column'}}>
          <View
            style={{width: '100%', height: '25%', position:'relative'}}
            >
              <Animatable.Image 
                source={{uri:recipe.image}} 
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
                    flexDirection: 'column',
                    height: '300%'
                  }}
                >
                <ScrollView 
                  style={{margin: 10}}
                >
                  <Text style={{
                    fontSize: 25,
                    paddingLeft: 10,
                    paddingRight: 10,
                    padding: 0,
                    fontWeight: 'bold',
                    color: 'black'}}
                    >{recipe.name}</Text> 
                    {/* ^PUT the title of the dish there */}

                    <View style = {{flexDirection: 'row'}}>

                      {recipe.preparation_time.value &&
                      <Text style={{
                        fontSize: 12,
                        padding: 10,
                        color: 'black'
                      }}
                      >Prepare: {recipe.preparation_time.value} {recipe.preparation_time.interval}</Text>
                      }

                      {recipe.cooking_time.value &&
                        <Text style={{
                          fontSize: 12,
                          padding: 10,
                          color: 'black'
                        }}>Cook: {recipe.cooking_time.value} {recipe.cooking_time.interval}</Text>
                      }

                  </View>

                  <Text style={{
                    fontSize: 20,
                    padding: 10,
                    paddingBottom: 2,
                    fontWeight: 'bold', 
                    color: 'black'}}
                  >Ingredients</Text>
        
                  {/* THIS IS WHERE WE BULLET POINT INGREDIENTS IN A FLATLIST */}
                  <IngredientList ingredients = {recipe.ingredients}/>

                  <Text style={{
                    fontSize: 20,
                    padding: 10,
                    paddingBottom: 2,
                    fontWeight: 'bold',
                    color: 'black'}}
                  >How to cook</Text>
                    
                  {/* This is where the code for rendering methods is: */}
                  <Text style={{padding:10}}>{recipe.method.content}</Text>

                  </ScrollView>
                </Animatable.View>
            </View>
          </View>
      );
  }
}


