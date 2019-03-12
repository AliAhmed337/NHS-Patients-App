import React from 'react';
import { View, Text } from 'react-native';

export const GuidanceTitle = (props) => {
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
		fontSize: 18,
		fontWeight: 'bold'
	}
};