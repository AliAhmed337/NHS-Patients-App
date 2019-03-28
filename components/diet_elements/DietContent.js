import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export const DietContent = (props) => {

	let allowedString = props.isAllowed.reduce((acc, o) => acc ? `${acc}, ${o.name}` : o.name, null);
	let notAllowedString = props.notAllowed.reduce((acc, o) => acc ? `${acc}, ${o.name}` : o.name, null);

	return (
		<View>
		<View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
			<View style={{ flexBasis: '50%' }}>
				<View style={{ flexDirection: 'row', margin: 5 }}>
				<Text style={styles.titleStyle}>Allowed:</Text>
				</View>
				<Text style={styles.contentStyle}>{allowedString ? allowedString : "None"}</Text>
			</View>
			<View style={{ flexBasis: '50%' }}>
				<View style={{ flexDirection: 'row', margin: 5 }}>
				<Text style={styles.titleStyle}>Not Allowed:</Text>
				</View>
				<Text style={styles.contentStyle}>{notAllowedString ? notAllowedString : "None"}</Text>
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