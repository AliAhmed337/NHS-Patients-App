import React from 'react';
import { View, Text } from 'react-native';

export const DietContent = (props) => {
	return (
		<View style={{backgroundColor: '#003087'}}>
		<View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
			<View style={{ flexBasis: '50%' }}>
				<Text style={styles.titleStyle}>Allowed:</Text>
				<Text style={styles.contentStyle}>{props.allowed}</Text>
			</View>
			<View style={{ flexBasis: '50%' }}>
				<Text style={styles.titleStyle}>Not Allowed:</Text>
				<Text style={styles.contentStyle}>{props.notAllowed}</Text>
			</View>
		</View>
		</View>
	);
};

const styles = {
	titleStyle: {
		fontWeight: 'bold',
		fontSize: 17,
		margin: 5,
		color: 'white',
	},
	contentStyle: {
		margin: 5, 
		color: 'white'
	}
};