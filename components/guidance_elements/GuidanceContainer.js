import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, Platform } from 'react-native';

export const GuidanceContainer = (props) => {
	return (
		<View>
			<View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#647CAA', borderBottomWidth: 1 }}>
				<FontAwesome name="bullseye" size={18} color="#00315F" />
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
		fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif',
		margin: 6,
		fontSize: 18,
		color: '#00315F',
		fontWeight: 'bold'

	},
	contentContainerStyle: {
		fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif',
		margin: 6,
		color: '#00315F',
		fontSize: 16
	}
};