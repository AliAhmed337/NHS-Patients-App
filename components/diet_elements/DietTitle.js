import React from 'react';
import { View, Text } from 'react-native';

export const DietTitle = (props) => {
	return (
		<View>
			<Text style={{ fontSize:20, color: '#005EB8' }}>{props.title}</Text>
		</View>
	);
};