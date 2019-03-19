import React from 'react';
import { View, Text } from 'react-native';

export const GuidanceTopInfo = () => {
	return (
		<View>
			<View>
				<Text style={styles.headerStyle}> Guidance information </Text>
			</View>


		<View>
            <Text style={styles.infoStyle}>
				Dear Patient, 
            </Text>

            <Text style={styles.infoStyle}>
            	We kindly ask you to follow these important instructions before your appointment:
            </Text>
        </View>
        </View>
	);
};

const styles = {
	headerStyle: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#005EB8',
		textAlign: 'center',
		textDecorationLine: 'underline',
		textDecorationStyle: 'double',
		margin: 10,
	},
	infoStyle: {
		fontSize: 18,
		textAlign: 'center',
		padding: 5
	}
};