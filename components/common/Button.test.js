import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Testing common button component', () => {

	it('renders correcly', () => {
		const wrapper = shallow(
			<Button 
				backgroundColor="black"
				width="100%" 
				height="100%" 
				padding={10}
				name="md-checkbox"
				size={20}
				color="white"
				/>
			);
		wrapper.setProps({ 
				backgroundColor: 'black',
				width: '100%', 
				height: '100%', 
				padding: 10,
				name: 'md-checkbox',
				size: 20,
				color: 'white'
				});
		expect(wrapper).toMatchSnapshot();

	});	

});
