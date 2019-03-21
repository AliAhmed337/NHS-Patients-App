import React from 'react';
import { View, Text, Platform } from 'react-native';

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
		fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif',
		fontSize: 16,
		color: '#00315F',
		padding: 5
	}
};