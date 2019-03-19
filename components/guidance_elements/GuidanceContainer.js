import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export const GuidanceContainer = (props) => {
	return (
		<View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<FontAwesome name="bullseye" size={22} color="blue" />
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
		fontSize: 22,
		fontWeight: 'bold'

	},
	contentContainerStyle: {
		margin: 6,
		fontSize: 18
	}
};