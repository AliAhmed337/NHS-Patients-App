import React from 'react';
import { View } from 'react-native';
import { GuidanceSubtitle, GuidanceContent } from '../guidance_elements';

export const GuidanceContainer = ({ menu }) => {
	const { title, content } = menu;
	return (
		<View>
			<View style={styles.titleContainterStyle}>
				<GuidanceSubtitle title={title} />
			</View>

			<View style={styles.contentContainerStyle}>
				<GuidanceContent content={content} />
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