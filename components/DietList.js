import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { DietTitle, DietContent } from './diet_elements';

class DietList extends Component {
	state = { diets: [] };

	componentWillMount() {
		this.setState({ diets });
	}

	renderDiets() {
		return this.state.diets.map(diet =>
			<Collapse key={diet.title}>
				<CollapseHeader style={styles.titleStyle}>
				<Image style={{width: '25%', height: '100%', resizeMode: 'cover', borderRadius: 5, paddingRight: 5}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Muhammad_Ali_NYWTS.jpg'}}/>
					<DietTitle title={diet.title} />
				</CollapseHeader>

				<CollapseBody style={styles.bodyStyle}>
					<DietContent allowed={diet.allowed} notAllowed={diet.notAllowed} />
				</CollapseBody>
			</Collapse>
		);
	}

	render() {
		return (
			<ScrollView style={{paddingBottom: 5}}>
					{this.renderDiets()}
			</ScrollView>
		);
	}
}

const styles = {
	titleStyle: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor:'#004D97',
	},
	bodyStyle: {
		fontSize: 17,
		backgroundColor: '#E8EDEE',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		borderTopWidth: 2,
		borderTopColor: 'white',
		borderBottomWidth: 2,
		borderBottomColor: 'white',
	}
};

const diets = [
	{
		title: 'Starchy Foods',
		allowed: 'None',
		notAllowed: 'Bread, cassava, couscous, cornmeal, crisps, dumplings, millet, noodles, pasta, pastry, pizza, plantain, potatoes, rice, sweet potatoes, yam',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Sweet foods',
		allowed: 'None',
		notAllowed: 'Biscuits, cakes, chewing gum, chocolate, desserts, jam, jellies, pastries, popcorn, puddings, sweets',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Sweeteners',
		allowed: 'Acesulfame-K, aspartame saccharine stevia, sucralose',
		notAllowed: 'Agave nectar, fructose, glucose, honey, maple syrup, molasses, sucrose, sugar, syrup, treacle',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Fruit',
		allowed: 'None',
		notAllowed: 'Avoid all fruit',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Drinks',
		allowed: 'Water, mineral or sparkling water, coffee, tea, herbal tea or iced tea - but MUST be made without milk or sugar',
		notAllowed: 'Any fizzy pop, any alcoholic drinks including beers, wines or spirits, drinking chocolate, drinks with sugar added including energy drinks, flavoured water, squash and fruit juice',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Condiments & seasonings',
		allowed: 'Salt, pepper, any natural herbs or spices, full-fat or home-made mayonnaise',
		notAllowed: 'Tomato ketchup, barbecue sauce, Worcester sauce, honey mustard, chutneys, any jams or syrups, reduced fat mayonnaise or salad cream, stock cubes',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Dairy and alternatives',
		allowed: 'Creme fraiche, double cream, sour cream, butter, eggs, any non-processed cheese e.g. cheddar',
		notAllowed: 'Milk or milk alternatives including soy, oat and almond milk. Any processed cheese (e.g. dairylea, baby belle), condensed milk, yoghurt',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Fats/Oils',
		allowed: 'Butter, all vegetable oils (e.g. olive, peanut, sunflower, rapeseed and palm oil), the fat on meat',
		notAllowed: 'Lard, dripping, margarines',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Fish/Shellfish',
		allowed: 'All non-processed fish/shellfish are allowed, including fresh salmon, tuna and tilapia, and all fresh white fish such as cod',
		notAllowed: 'Any processed fish or shellfish, including fish fingers, breaded fish, smoked salmon, sushi, tinned fish, pates and spreads',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Meat',
		allowed: 'All non-processed meats are allowed, including beef, goat, lamb, pork, and veal',
		notAllowed: 'Processed meats including burgers, pies, sausages and canned meat, salami, chorizo, pepperoni, pates and spreads',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Poultry',
		allowed: 'All non-processed poultry along with their eggs are allowed, including chicken, turkey and duck',
		notAllowed: 'Any processed poultry including burgers, nuggets, pies and sausages',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Vegetarian Foods',
		allowed: 'Eggs, cheddar and other non-processed cheeses, nuts (except chestnuts). Quorn pieces and Quorn meat free fillets (all other Quorn products are not permitted)',
		notAllowed: 'Beans, chestnuts, lentils, tofu, soya mince and other soy products, processed foods including veggieburgers and vegetarian sausages, peanut butter, milk and milk alternatives, most Quorn products',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	},
	{
		title: 'Vegetables',
		allowed: 'Fresh and frozen vegetables: Avocado, asparagus, artichokes, aubergines, broccoli, bok choy, Brussel sprouts, bean sprouts, celery, cucumber, courgettes, cauliflower, fennel, garlic, lettuce, leeks, mushrooms, okra, peppers, radishes, squash, spring onions, shallots, spinach, tomatoes, turnips, fresh herbs',
		notAllowed: 'Beans, beetroot, carrots, cabbage, dal, lentils, parsnips, peas, plantain, potatoes, pumpkin, swede, sweet potatoes, sweetcorn, turnips, yam. Note: All canned and processed vegetables are NOT allowed, including bottled pasta sauces',
		image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2-696x696.jpg'
	}
];

export default DietList;