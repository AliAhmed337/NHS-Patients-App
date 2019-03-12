import React from 'react';
import { View, Text } from 'react-native';

export const GuidanceContent = (props) => {
		return (
			<View>
				<Text style={styles.contentStyle}>
					{props.content}
				</Text>
			</View>
		);
};

const styles = {
	contentStyle: {
		fontSize: 16,
	}
};