import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
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
			<ScrollView>
					{this.renderDiets()}
			</ScrollView>
		);
	}
}

const styles = {
	titleStyle: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor:'#004D97'
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
		notAllowed: 'Bread, cassava, couscous, cornmeal, crisps, dumplings, millet, noodles, pasta, pastry, pizza, plantain, potatoes, rice, sweet potatoes, yam'
	},
	{
		title: 'Sweet foods',
		allowed: 'None',
		notAllowed: 'Biscuits, cakes, chewing gum, chocolate, desserts, jam, jellies, pastries, popcorn, puddings, sweets'
	},
	{
		title: 'Sweeteners',
		allowed: 'Acesulfame-K, aspartame saccharine stevia, sucralose',
		notAllowed: 'Agave nectar, fructose, glucose, honey, maple syrup, molasses, sucrose, sugar, syrup, treacle'
	},
	{
		title: 'Fruit',
		allowed: 'None',
		notAllowed: 'Avoid all fruit'
	},
	{
		title: 'Drinks',
		allowed: 'Water, mineral or sparkling water, coffee, tea, herbal tea or iced tea - but MUST be made without milk or sugar',
		notAllowed: 'Any fizzy pop, any alcoholic drinks including beers, wines or spirits, drinking chocolate, drinks with sugar added including energy drinks, flavoured water, squash and fruit juice'
	},
	{
		title: 'Condiments & seasonings',
		allowed: 'Salt, pepper, any natural herbs or spices, full-fat or home-made mayonnaise',
		notAllowed: 'Tomato ketchup, barbecue sauce, Worcester sauce, honey mustard, chutneys, any jams or syrups, reduced fat mayonnaise or salad cream, stock cubes'
	},
	{
		title: 'Dairy and alternatives',
		allowed: 'Creme fraiche, double cream, sour cream, butter, eggs, any non-processed cheese e.g. cheddar',
		notAllowed: 'Milk or milk alternatives including soy, oat and almond milk. Any processed cheese (e.g. dairylea, baby belle), condensed milk, yoghurt'
	},
	{
		title: 'Fats/Oils',
		allowed: 'Butter, all vegetable oils (e.g. olive, peanut, sunflower, rapeseed and palm oil), the fat on meat',
		notAllowed: 'Lard, dripping, margarines'
	},
	{
		title: 'Fish/Shellfish',
		allowed: 'All non-processed fish/shellfish are allowed, including fresh salmon, tuna and tilapia, and all fresh white fish such as cod',
		notAllowed: 'Any processed fish or shellfish, including fish fingers, breaded fish, smoked salmon, sushi, tinned fish, pates and spreads'
	},
	{
		title: 'Meat',
		allowed: 'All non-processed meats are allowed, including beef, goat, lamb, pork, and veal',
		notAllowed: 'Processed meats including burgers, pies, sausages and canned meat, salami, chorizo, pepperoni, pates and spreads'
	},
	{
		title: 'Poultry',
		allowed: 'All non-processed poultry along with their eggs are allowed, including chicken, turkey and duck',
		notAllowed: 'Any processed poultry including burgers, nuggets, pies and sausages'
	},
	{
		title: 'Vegetarian Foods',
		allowed: 'Eggs, cheddar and other non-processed cheeses, nuts (except chestnuts). Quorn pieces and Quorn meat free fillets (all other Quorn products are not permitted)',
		notAllowed: 'Beans, chestnuts, lentils, tofu, soya mince and other soy products, processed foods including veggieburgers and vegetarian sausages, peanut butter, milk and milk alternatives, most Quorn products'
	},
	{
		title: 'Vegetables',
		allowed: 'Fresh and frozen vegetables: Avocado, asparagus, artichokes, aubergines, broccoli, bok choy, Brussel sprouts, bean sprouts, celery, cucumber, courgettes, cauliflower, fennel, garlic, lettuce, leeks, mushrooms, okra, peppers, radishes, squash, spring onions, shallots, spinach, tomatoes, turnips, fresh herbs',
		notAllowed: 'Beans, beetroot, carrots, cabbage, dal, lentils, parsnips, peas, plantain, potatoes, pumpkin, swede, sweet potatoes, sweetcorn, turnips, yam. Note: All canned and processed vegetables are NOT allowed, including bottled pasta sauces'
	}
];

export default DietList;