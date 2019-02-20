import React from 'react';
import { View } from 'react-native';
import { PreparationCardContainer, PreparationCardSection, Button, ArrowButton } from './PrepCardElements';

const PreparationCard = ({ appointment }) => {
	//const {} break down details of the appointment later
	
	//added temporary styling to see if it works
	return (
		// TO DO: top level- leads to the details of the specific prep step
		// TO DO: bottom level - expands for more info on the topic/keywords etc. 
		<View style= {{ flex: 1 }}>

		<PreparationCardContainer>
			<PreparationCardSection>
				<ArrowButton />
			</PreparationCardSection>

			<PreparationCardSection>
				<Button>more info(add link?)</Button>
			</PreparationCardSection>
		</PreparationCardContainer>

		</View>
	);

};

styles = {
	topLevelStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
};

export default PreparationCard;
