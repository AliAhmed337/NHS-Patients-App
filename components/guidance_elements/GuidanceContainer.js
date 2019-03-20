import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export const GuidanceContainer = (props) => {
	return (
		<View>
			<View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#647CAA', borderBottomWidth: 1 }}>
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
		fontSize: 20,
		fontWeight: 'bold'

	},
	contentContainerStyle: {
		margin: 6,
		fontSize: 17
	}
};