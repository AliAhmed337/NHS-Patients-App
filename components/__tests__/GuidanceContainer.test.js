import React from 'react';
import { shallow } from 'enzyme';
import { GuidanceContainer } from '../guidance_elements';

describe('Testing guidance container component', () => {

	it('renders correcly', () => {
		const wrapper = shallow(
			<GuidanceContainer title="title" content="content" />
			);
		wrapper.setProps({ title: 'title', content: 'content' });
		expect(wrapper).toMatchSnapshot();

	});
});
