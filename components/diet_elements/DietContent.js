import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export const DietContent = (props) => {
	return (
		<View>
		<View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
			<View style={{ flexBasis: '50%' }}>
				<View style={{ flexDirection: 'row', margin: 5 }}>
				<Text style={styles.titleStyle}>Allowed:</Text>
				</View>
				<Text style={styles.contentStyle}>{props.allowed}</Text>
			</View>
			<View style={{ flexBasis: '50%' }}>
				<View style={{ flexDirection: 'row', margin: 5 }}>
				<Text style={styles.titleStyle}>Not Allowed:</Text>
				</View>
				<Text style={styles.contentStyle}>{props.notAllowed}</Text>
			</View>
		</View>
		</View>
	);
};

const styles = {
	titleStyle: {
		color: '#003087',
		fontWeight: 'bold',
		textDecorationColor: '#003087',
		fontSize: 19,
		margin: 5,
	},
	contentStyle: {
		color: 'black',
		fontSize: 16, 
		margin: 10, 
	}
};