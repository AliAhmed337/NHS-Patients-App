import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export const DietContent = (props) => {
	return (
		<View>
		<View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
			<View style={{ flexBasis: '50%' }}>
				<View style={{ flexDirection: 'row', margin: 5 }}>
				<Ionicons name="ios-checkmark" size={30} color="#00FF46" />
				<Text style={styles.titleStyle}>Allowed:</Text>
				</View>
				<Text style={styles.contentStyle}>{props.allowed}</Text>
			</View>
			<View style={{ flexBasis: '50%' }}>
				<View style={{ flexDirection: 'row', margin: 5 }}>
				<Ionicons name="ios-close" size={30} color="#FF3535" />
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
		color: '#FFB14A',
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		textDecorationColor: '#FFB14A',
		fontSize: 19,
		margin: 5,
	},
	contentStyle: {
		color: 'white',
		fontSize: 16, 
		margin: 10, 
	}
};