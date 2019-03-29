import React from 'react';
import { Text, View } from 'react-native';

const Test = ({ingredients}) => {

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