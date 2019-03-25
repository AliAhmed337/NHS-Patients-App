import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export const DietTitle = (props) => {
	return (
		<View style={styles.dietTitleArrangementStyle}>
			<View style={{ flexBasis: '89%' }}>
			<Text style={styles.dietTitleTextStyle}>{props.title}</Text>
			</View>
			<MaterialCommunityIcons name="information-outline" size={30} color="white" style={{ alignItems: 'flex-end' }} />
		</View>
	);
};

const styles = {
	dietTitleTextStyle: {
		fontSize: 20, 
		color: 'white',
		fontWeight: '500', 
	},
	dietTitleArrangementStyle: {
		flexWrap: 'wrap',
		flexDirection: 'row',
	}
}