import React, { Component } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { GuidanceTopInfo, GuidanceContainer } from './guidance_elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class GuidanceList extends Component {
	state = { guidances: [], image: '' };

	componentWillMount() {
		this.setState({ guidances });
		this.setState({ image : (<Image source={require('../images/care.png')} />)});
	}

	renderRows(item) {
		if (item.subarray !== null) {
			return item.subarray.map(row =>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="bullseye-arrow" size={18} color="green" />
					<Text style={{ flex: 1, paddingLeft: 5, fontSize: 18, margin: 3 }}>{row}</Text>
				</View>
			);
		}
	}

	renderHeader() {
		return (
			<View>
				<GuidanceTopInfo />
			</View>
		);
	}

	render() {
		return (
			<View>
				<FlatList

				 style={styles.listStyle}
				 data={this.state.guidances}
				 ListHeaderComponent={this.renderHeader()}
				 ListFooterComponent={this.state.image}
				 renderItem={({item}) =>
				 <View style={{ margin: 5 }}>
				  	<GuidanceContainer title={item.title} content={item.content} />
				  	<View>{this.renderRows(item)}</View>
				  </View>
				}
				/>
			</View>
		);
	}
}

const styles = {
	listStyle: {
		marginBottom: 10
	}
};

const guidances = [
  {
    title: 'Special Diet',
    content: 'The day before your scan you will need to follow a high-fat, high-protein, low-carbohydrate diet.',
  	subarray: null
  },
  {
    title: 'Fasting',
    content: 'You will need to fast for 15 hours prior to your scan appointment time, starting from the EVENING BEFORE the day of your scan:',
    subarray: [
    'We recommend you have an early dinner and skip breakfast the morning of your PET scan.',
    'It is important that you keep well hydrated by drinking plenty of water during this period.',
	'You MUST AVOID ALL SUGAR AND SWEET FOODS AND DRINKS during this period.',
	'If you have any questions or doubts, please contact us.'
	]
  }
];

export default GuidanceList;