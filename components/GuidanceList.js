import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { GuidanceContainer } from './guidance_elements';

class GuidanceList extends Component {
	state = { guidances: [] };

	componentWillMount() {
		this.setState({ guidances });
	}

	render() {
		return (
			<View>
				<FlatList
				 style={styles.listStyle}
				 data={[
				 	{content: '1'},
				 	{content: '2'},
				 ]}
				 renderItem={({item}) => <Text>{item.content}</Text>}
				/>
			</View>
		);
	}
}

const styles = {
	listStyle: {
		marginBottom: 50
	}
};

const guidances = [
  {
    title: 'Special Diet',
    content: ': The day before your scan you will need to follow a high-fat, high-protein, low-carbohydrate diet'
  },
  {
    title: 'Fasting',
    content: 'You will need to fast for 15 hours prior to your scan appointment time, starting from the EVENING BEFORE the day of your scan:'
  }
];

export default GuidanceList;