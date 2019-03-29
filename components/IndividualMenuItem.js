import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
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

    componentDidMount() {
      console.log(this.props.navigation);
    }
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
                    paddingBottom: 5, 
                    paddingTop: 5, 
                    fontWeight: 'bold', 
                    color: 'black'}}
                    >{recipe.name}</Text> 
                    {/* ^PUT the title of the dish there */}

                    <View style = {{flexDirection: 'row'}}>
                    <Text style={{
                    fontSize: 10, 
                    padding: 10, 
                    paddingRight: 40,
                    paddingBottom: 15, 
                    paddingTop: 10, 
                    color: 'black'}}
                  >{recipe.preparation_time.value}</Text>
                  <Text style={{
                    fontSize: 10, 
                    padding: 10, 
                    paddingBottom: 15, 
                    paddingTop: 10, 
                    color: 'black'}}
                  >{recipe.preparation_time.interval}</Text>
                  </View>

                  <View style = {{flexDirection: 'row'}}>
                    <Text style={{
                    fontSize: 10, 
                    padding: 10, 
                    paddingRight: 40,
                    paddingBottom: 15, 
                    paddingTop: 10, 
                    color: 'black'}}
                  >{recipe.cooking_time.value}</Text>
                  <Text style={{
                    fontSize: 10, 
                    padding: 10, 
                    paddingBottom: 15, 
                    paddingTop: 10, 
                    color: 'black'}}
                  >{recipe.cooking_time.interval}</Text>
                  </View>

                  <Text style={{
                    fontSize: 25, 
                    padding: 10, 
                    paddingBottom: 15, 
                    paddingTop: 10, 
                    fontWeight: 'bold', 
                    color: 'black'}}
                  >Ingredients</Text>
        
                  {/* THIS IS WHERE WE BULLET POINT INGREDIENTS IN A FLATLIST */}
                  <IngredientList ingredients = {recipe.ingredients}/>

                  <Text style={{
                    fontSize: 25, 
                    padding: 10, 
                    paddingBottom: 20, 
                    paddingTop: 10, 
                    fontWeight: 'bold', 
                    color: 'black'}}
                  >How to cook</Text>
                    
                {/* This is where the code for rendering methods is: */}
                <Text>{recipe.method.content}</Text>
              </ScrollView>
                </Animatable.View>
            </View>
          </View>
      );
  }
}


