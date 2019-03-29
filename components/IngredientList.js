import React from 'react';
import {Image, Text, View} from 'react-native';

/**
 * Takes a list of ingredient objects and returns
 * a view that provides info on each ingredient.
 * @param {list} ingredients
 */
const IngredientList = ({ingredients}) => {

    return (
    <View>
      {ingredients.map(ingredient => (
        <View key={ingredient.food_id} style = {{flexDirection: 'row'}}>

            <View style={{flexDirection:'row',position: "relative",padding:10,alignItems:'center',justifyContent: 'flex-start',flex:1}}>
                <View style={{flex: 0,
                    width:32,
                    marginRight:20,}}>
                    <Image style={{height:40,
                        width:40,
                        borderRadius:15,}} source={{uri: ingredient.image}}/>
                </View>
                <View style={{flexDirection:'column',
                    justifyContent:'flex-start',
                    flex:1,}}>
                    <Text style={{fontSize:20}}>{ingredient.name}</Text>

                    <View style={{flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                        <Text style={{color:"#757575",
                            flex:0}}>{ingredient.quantity.measure} {ingredient.quantity.unit}</Text>
                    </View>
                </View>
            </View>
        </View>
      ))}
    </View>
  )};

  export default IngredientList;