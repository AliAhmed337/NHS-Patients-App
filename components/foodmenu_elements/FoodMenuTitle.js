import React from 'react';
import { View, Text } from 'react-native';

export const FoodMenuTitle = (props) => {
	return (
		<View>
			<Text style={styles.titleStyle}>
				{props.title}
			</Text>
		</View>
	);
};

const styles = {
	titleStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#003087',
	}
};