import React from 'react';
import { View, Text, Linking } from 'react-native';
import PreparationCard from './PreparationCard';
import PreparationCardSection from './PreparationCardSection';
import Button from './Button';
import ArrowButton from './ArrowButton';

const PreparationDetail = ({ appointment }) => {
	//const {} break down details of the appointment later
	
	//added temporary styling to see if it works
	return (
		// TO DO: top level- leads to the details of the specific prep step
		// TO DO: bottom level - expands for more info on the topic/keywords etc. 
		<View style= {{ flex: 1 }}>

		<PreparationCard>
			<PreparationCardSection>
				<ArrowButton />
			</PreparationCardSection>

			<PreparationCardSection>
				<Button>more info(add link)</Button>
			</PreparationCardSection>
		</PreparationCard>

		</View>
	);

};

styles = {
	topLevelStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
};

export default PreparationDetail;
