import React from 'react';
import { shallow } from 'enzyme';
import { GuidanceTopInfo } from '../guidance_elements';

describe('Testing guidance info component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<GuidanceTopInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
