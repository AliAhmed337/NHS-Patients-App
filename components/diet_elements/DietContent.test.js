import React from 'react';
import { shallow } from 'enzyme';
import { DietContent } from './index';

describe('Testing diet content component', () => {

	it('renders correcly', () => {
		const wrapper = shallow(
			<DietContent allowed="allowed" notAllowed="notAllowed" />
			);
		wrapper.setProps({ allowed: 'allowed', notAllowed: 'notAllowed' });
		expect(wrapper).toMatchSnapshot();

	});	

});
