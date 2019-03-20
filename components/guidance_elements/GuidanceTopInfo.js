import React from 'react';
import { View, Text } from 'react-native';

export const GuidanceTopInfo = () => {
	return (
		<View>
            <Text style={styles.infoStyle}>
				Dear Patient, 
            </Text>

            <Text style={styles.infoStyle}>
            	We kindly ask you to follow these important instructions before your appointment:
            </Text>
        </View>
	);
};

const styles = {
	infoStyle: {
		fontSize: 18,
		textAlign: 'center',
		padding: 5
	}
};