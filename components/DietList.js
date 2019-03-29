import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { DietTitle, DietContent } from './diet_elements';

class DietList extends Component {

	componentDidMount(){
		console.log('mounting diet' + JSON.stringify(this.props.dietPrep));
	}

	renderDiets() {
		return this.props.dietPrep.map(diet =>
			<View key={diet.categoryName} style={{margin: 10}}>
			<Collapse key={diet.categoryName}>
				<CollapseHeader style={styles.titleStyle}>
					<DietTitle title={diet.categoryName}/>
				</CollapseHeader>

				<CollapseBody style={styles.bodyStyle}>
					<DietContent props = {diet.foods} />
				</CollapseBody>
			</Collapse>
			</View>
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
		borderBottomWidth: 2,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		borderColor: '#004281',
	}
};

const mapStateToProps = ({ prepRed }) => {
	const { dietPrep } = prepRed;
	return { dietPrep };
  }
  
  export default connect(mapStateToProps)(DietList);