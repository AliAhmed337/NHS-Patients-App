import React from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native';
import GuidanceList from '../components/GuidanceList';
import ReactRender from '../components/common/ReactRender/ReactRender';

export default class PreparationScreen extends React.Component {

  static navigationOptions = {
    title: 'Guide',
  };

  render() {
    return (
      <View style={{ margin: 5 }}>
      <StatusBar barStyle="light-content" />
        <View>
        <ScrollView>
        <Text style={{
                  fontSize: 25, 
                  paddingLeft: 10, 
                  paddingBottom: 5, 
                  paddingTop: 5, 
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
                  paddingTop: 10, 
                  fontWeight: 'bold', 
                  color: 'black'}}
                >How to cook</Text>
                  
              {/* This is where the code for rendering methods is: */}
              <ReactRender 
                style={{height: undefined, width: undefined}}
                data={require('./FoodTESTTemp.json')}
                />
          </ScrollView>
        </View>
      </View>      
    );
  }
}