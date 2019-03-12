import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { FoodMenuContainer } from './foodmenu_elements';

class FoodMenuList extends Component {
	state = { menus: [] };

	componentWillMount() {
		this.setState({ menus });
	}

	renderMenus() {
		return this.state.menus.map(menu =>
			<FoodMenuContainer key={menu.title} menu={menu} />
		);
	}

	render() {
		return (
				<ScrollView style={styles.listStyle}>
					{this.renderMenus()}
				</ScrollView>
		);
	}
}

const styles = {
	listStyle: {
		marginBottom: 50
	}
};

const menus = [	
	{
		title: 'Chicken and Bacon Salad',
		content: ['Chop tomato, cucumber, peppers, spring onions and radishes',
				 'Wash and pat dry some lettuce', 
				 'In a bowl combine the salad ingredients with pieces of cooled cooked chicken and chopped grilled bacon', 
				 'Mix with home-made salad dressing (2 tablespoons of oil, 1 tablespoon of vinegar, salt and pepper, whisked together).']
	},
	{
		title: 'Fried Mushrooms',
		content: ['Cook some sliced mushrooms in butter and garlic, frying some tomato quarters on the side',
				'Serve with fried eggs and bacon, or a lamb chop. Please remember processed meats including sausages are not allowed.']
	},
	{
		title: 'Fish And Vegetables in a Herb Cream Sauce',
		content: ['Wrap up a piece of cod, haddock or tilapia topped with lemon zest, crushed garlic, fresh herbs and olive oil in foil to make a sealed parcel',
				'Bake the parcel in an oven dish for 20 minutes at 200° C',
				'While the fish is cooking, slice plenty of peppers, leeks, mushrooms and courgettes, and sauté in oil for 5-10 minutes until they are cooked how you like them',
				'Add 50ml cream and a handful of chopped fresh herbs, warm through, and serve with the fish.  You cannot thicken the sauce with flour or cornflour as these are not permitted']
	},
	{
		title: 'Vegetable Curry',
		content: ['Fry chopped spring onions, peppers, okra, aubergine and chilli together with dried curry spices (such as turmeric, cumin, mustard seeds, and fenugreek) in some oil for a few minutes',
				'Add a can of chopped tomatoes or some water, salt and pepper, and cook until the vegetables are tender',
				'If you like, add a large bunch of spinach or other greens and cook for a few minutes more',
				'In a separate pan fry some crushed garlic in butter and then add to the curry before serving.']
	},
	{
		title: 'African Meat and Spinach Stew',
		content: ['Fry sliced onions, peppers and chilli together with meat pieces in some oil until the meat is browned',
					'Add a can of chopped tomatoes, salt and pepper, and cook until the meat is tender',
					'Finally add a large bunch of spinach and cook for a few minutes more. You can add extra water to make this dish more like a soup. As flour and cornflour are not permitted, you cannot thicken the soup or stew with these, and you cannot add stock cubes. Instead you can add any herbs and spices, salt and pepper, and can thicken using ground peanuts or pumpkin seeds (egusi)',
					'Serve with some watercress.']
	},
	{
		title: 'Scrambled Eggs Made With Cream and Butter',
		content: ['You can make scrambled eggs in a pan or a microwave', 
				'Whisk two eggs with a tablespoon of cream',
				'Add a knob of butter and stir until cooked',
				'Serve with some chopped tomatoes and cucumber, or tomato quarters fried in a little oil. Note: You MUST NOT add milk. Cream is optional.']
	},
	{
		title: 'Feta and Vegetable Frittata',
		content: ['Sauté aubergines, courgettes and onions with some garlic in olive oil until they are tender',
				'Butter an ovenproof dish. Scatter the vegetables across the dish together with some broccoli florets and cubes of feta cheese',
				'Whisk three eggs with salt and pepper, pour over the vegetables and feta, and bake in the oven at 180 C until set',
				'Allow to cool for 5 minutes before serving.'] 
	}

];

export default FoodMenuList;