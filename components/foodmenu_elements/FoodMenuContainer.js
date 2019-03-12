import React from 'react';
import { View } from 'react-native';
import { FoodMenuTitle, FoodMenuContent } from '../foodmenu_elements';

export const FoodMenuContainer = ({ menu }) => {
	const { title, content } = menu;
	return (
		<View>
			<View style={styles.titleContainterStyle}>
				<FoodMenuTitle title={title} />
			</View>

			<View style={styles.contentContainerStyle}>
				<FoodMenuContent content={content} />
			</View>
		</View>
	);
};

const styles = {
	titleContainterStyle: {
		margin: 6,

	},
	contentContainerStyle: {
		margin: 6,
	},
	combinedContainerStyle: {
		
	}
};