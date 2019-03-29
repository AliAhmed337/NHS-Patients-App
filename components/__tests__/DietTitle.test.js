import React from 'react';
import { shallow } from 'enzyme';
import { DietTitle } from '../diet_elements';

describe('Testing diet title component', () => {

	it('renders correcly', () => {
		const wrapper = shallow(
			<DietTitle title="title" />
			);
		wrapper.setProps({ title: 'title' });
		expect(wrapper).toMatchSnapshot();

	});	

});
