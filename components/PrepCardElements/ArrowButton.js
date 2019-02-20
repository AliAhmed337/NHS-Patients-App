import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ArrowButton = ({ onPress, appointment  }) => {
	//will use the appointment prop to calculate & display time info & prep title
	//const {} = appointment;

	return (
		<TouchableOpacity onPress={onPress} style={styles.arrowButtonStyle}>

		<View style={{ flex: 1 }}>
			<View>
				<Text style={styles.timeTextStyle}>
					begin time.. in 3 hours.....
				</Text>
			</View>

			<View>
				<Text style={styles.titleTextStyle} numberOfLines={1}>
					Super Long Titile of Guidance!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				</Text>
			</View>
		</View>

		<View style={styles.iconStyle}>
			<Ionicons name="ios-arrow-forward" size={40} color="white" />
		</View>

		</TouchableOpacity>
	);
};

const styles = {
	timeTextStyle: {
		color: 'white',
		fontSize: 18,
		paddingTop: 10,
		paddingBottom: 5,
		marginLeft: 10
	},

	titleTextStyle: {
		color:'white',
		fontSize: 25,
		paddingTop: 5,
		paddingBottom: 10,
		marginLeft: 10
	},

	iconStyle: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: 10
	},

	arrowButtonStyle: {
		flex: 1,
		justifyContent: 'space-around',
		flexDirection: 'row',
		alignSelf: 'stretch',
		backgroundColor: '#124127'
	}
};

export { ArrowButton };
