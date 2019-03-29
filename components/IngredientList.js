import React from 'react';
import { Text, View } from 'react-native';

/**
 * Takes a list of ingredient objects and returns
 * a view that provides info on each ingredient.
 * @param {list} ingredients
 */
const IngredientList = ({ingredients}) => {

    return (
    <View>
      {ingredients.map(ingredient => (
        <View key={ingredient.food_id} style = {{flexDirection: 'row', paddingRight: '40'}}>
            <Text>{ingredient.name}</Text>
            <Text>{ingredient.quantity.measure}</Text>
            <Text>{ingredient.quantity.unit}</Text>
        </View>
      ))}
    </View>
  )};

  export default IngredientList;