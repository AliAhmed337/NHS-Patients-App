import React from 'react';
import { View, Text } from 'react-native';

export const GuidanceContainer = (props) => {
	return (
		<View>
			<View >
				<Text style={styles.titleContainterStyle}>{props.title}</Text>
			</View>

			<View >
				<Text style={styles.contentContainerStyle}>{props.content}</Text>
			</View>
		</View>
	);
};

const styles = {
	titleContainterStyle: {
		margin: 6,
		fontSize: 17,
		fontWeight: 'bold'

	},
	contentContainerStyle: {
		margin: 6,
		fontSize: 16
	}
};