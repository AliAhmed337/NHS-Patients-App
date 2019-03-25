import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation
} from 'react-native-popup-dialog';
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
  

export default class Menu extends Component {
    constructor(){
        super()
        this.state={
            clicked: false,
            item: ''
        }
    }


  renderMenuContent(item) {
    if(item !== ''){
    return item.content.map(row =>
      <View style={{ flexDirection: 'row' }}>
          <Text>{'\u2022'}</Text>
          <Text style={{ flex: 1, paddingLeft: 16, fontSize: 16 }}>{row}</Text>
        </View>
      );
    }
  }

  render() {
const items = [ 
  { name: 'Chicken and Bacon Salad', content: ['Chop tomato, cucumber, peppers, spring onions and radishes', 'Wash and pat dry some lettuce', 'In a bowl combine the salad ingredients with pieces of cooled cooked chicken and chopped grilled bacon', 'Mix with home-made salad dressing (2 tablespoons of oil, 1 tablespoon of vinegar, salt and pepper, whisked together).'], code: '#1abc9c', image: 'https://www.simplyrecipes.com/wp-content/uploads/2012/06/chicken-salad-square-a-1800.jpg' },
  { name: 'Fried Mushrooms', content: ['Cook some sliced mushrooms in butter and garlic, frying some tomato quarters on the side', 'Serve with fried eggs and bacon, or a lamb chop. Please remember processed meats including sausages are not allowed.'], code: '#2ecc71', image: 'http://totsfamily.com/wp-content/uploads/2016/10/IMG_0028.jpg' },
  { name: 'Fish And Vegetables in a Herb Cream Sauce', content: ['Wrap up a piece of cod, haddock or tilapia topped with lemon zest, crushed garlic, fresh herbs and olive oil in foil to make a sealed parcel', 'Bake the parcel in an oven dish for 20 minutes at 200° C', 'While the fish is cooking, slice plenty of peppers, leeks, mushrooms and courgettes, and sauté in oil for 5-10 minutes until they are cooked how you like them', 'Add 50ml cream and a handful of chopped fresh herbs, warm through, and serve with the fish.  You cannot thicken the sauce with flour or cornflour as these are not permitted'], code: '#3498db', image: 'https://www.lecremedelacrumb.com/wp-content/uploads/2017/07/lemon-dill-salmon-101.jpg'   },
  { name: 'Vegetable Curry', content: ['Fry chopped spring onions, peppers, okra, aubergine and chilli together with dried curry spices (such as turmeric, cumin, mustard seeds, and fenugreek) in some oil for a few minutes','Add a can of chopped tomatoes or some water, salt and pepper, and cook until the vegetables are tender','If you like, add a large bunch of spinach or other greens and cook for a few minutes more','In a separate pan fry some crushed garlic in butter and then add to the curry before serving.'], code: '#9b59b6', image: 'https://www.recipetineats.com/wp-content/uploads/2017/07/Vegetable-Curry.jpg'  },
  { name: 'African Meat and Spinach Stew', content: ['Fry sliced onions, peppers and chilli together with meat pieces in some oil until the meat is browned','Add a can of chopped tomatoes, salt and pepper, and cook until the meat is tender','Finally add a large bunch of spinach and cook for a few minutes more. You can add extra water to make this dish more like a soup. As flour and cornflour are not permitted, you cannot thicken the soup or stew with these, and you cannot add stock cubes. Instead you can add any herbs and spices, salt and pepper, and can thicken using ground peanuts or pumpkin seeds (egusi)','Serve with some watercress.'], code: '#34495e', image: 'https://i2.wp.com/www.yummymedley.com/wp-content/uploads/2015/01/Nigerian-Spinach-Stew-Ready-and-Served.jpg?resize=747%2C1122&ssl=1'  },
  { name: 'Scrambled Eggs Made With Cream and Butter', content: ['You can make scrambled eggs in a pan or a microwave', 'Whisk two eggs with a tablespoon of cream','Add a knob of butter and stir until cooked','Serve with some chopped tomatoes and cucumber, or tomato quarters fried in a little oil. Note: You MUST NOT add milk. Cream is optional.'], code: '#16a085', image: 'https://www.simplyrecipes.com/wp-content/uploads/2012/06/chicken-salad-square-a-1800.jpg'  },
  { name: 'Feta and Vegetable Frittata', content: ['Sauté aubergines, courgettes and onions with some garlic in olive oil until they are tender','Butter an ovenproof dish. Scatter the vegetables across the dish together with some broccoli florets and cubes of feta cheese','Whisk three eggs with salt and pepper, pour over the vegetables and feta, and bake in the oven at 180 C until set','Allow to cool for 5 minutes before serving.'], code: '#27ae60', image: 'https://www.simplyrecipes.com/wp-content/uploads/2012/06/chicken-salad-square-a-1800.jpg' }
];

    return (
      <View style={{ flex: 1 }}>
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        renderItem={({ item }) => (
            <View style={{flex: 1}}>
            <TouchableOpacity 
                style={[styles.itemContainer, { backgroundColor: item.code }]}
                onPress={() => this.setState({ clicked: true, item })}
            >
                <ImageOverlay 
                  source={{ uri:item.image}} 
                  title={item.name}
                  titleStyle={{fontWeight: 'bold' }}
                  containerStyle={{ width: 173, height: 150, borderRadius: 5}} 
                >
                </ImageOverlay>
            </TouchableOpacity>
            </View>
        )}
      />
       <View>
        <Dialog
          style={{ margin: 50 }}
          onDismiss={() => {
            this.setState({ clicked: false, item: '' });
          }}
          onTouchOutside={() => {
            this.setState({ clicked: false, item: '' });
          }}

          visible={this.state.clicked}
          dialogTitle={<DialogTitle style={styles.dialogTitleStyle} title={this.state.item.name} />}
          dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        >
          <DialogContent style={{ height: 450, flexDirection: 'row' }}>
            <ScrollView>{this.renderMenuContent(this.state.item)}</ScrollView>
          </DialogContent>
        </Dialog>
      </View>
      
      </View>
    );
  }
}
