import React from 'react';
import { View, Text } from 'react-native';

export const FoodMenuTopInfo = () => {
	return (
		<View>
            <Text style={styles.infoStyle}>
				Here is a list of lunch and dinner ideas for today:
            </Text>
        </View>
	);
};

const styles = {
	infoStyle: {
		fontSize: 16,
		fontStyle: 'italic',
		textAlign: 'center',
		padding: 5
	}
};