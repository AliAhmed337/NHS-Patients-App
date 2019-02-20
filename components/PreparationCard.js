import React from 'react';
import { View } from 'react-native';

const PreparationCard = (props) => {
	return (
		<View style={styles.cardStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	cardStyle: {
		borderWidth: 2,
		borderRadius: 5, 
		borderColor: '#13452A',
		//borderBottomWidth: 0,

		shadowColor: '#000',
    	shadowOffset: { width: 0, height: 2 },
   		shadowOpacity: 0.1,
    	shadowRadius: 6,

    	marginLeft: 5,
    	marginRight: 5,
    	marginTop: 10,
		elevation: 4
	}
};

export default PreparationCard;
