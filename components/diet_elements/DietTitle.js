import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export const DietTitle = (props) => {
	return (
		<View style={styles.dietTitleArrangementStyle}>
		    <MaterialCommunityIcons name="chevron-down-circle-outline" size={25} color="blue" />
			<Text style={styles.dietTitleTextStyle}>{props.title}</Text>
		</View>
	);
};

const styles = {
	dietTitleTextStyle: {
		fontSize: 20, 
		fontWeight: '400',
		color: '#005EB8', 
	},
	dietTitleArrangementStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
}