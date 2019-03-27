import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { AppointmentBody,
		 AppointmentContainer,
		 AppointmentDetail,
		 AppointmentHeader,
		 AppointmentTimer,
		 AppointmentTitle
		} from './index';

describe('Testing appointment components', () => {
	it('renders correctly', () => {
		const bodyWrapper = shallow(
			<AppointmentBody>
				<Text>body</Text>
			</AppointmentBody>
		);
		expect(bodyWrapper).toMatchSnapshot();

		const containerWrapper = shallow(
			<AppointmentContainer>
				<Text>container</Text>
			</AppointmentContainer>
		);
		expect(containerWrapper).toMatchSnapshot();

		const detailWrapper = shallow(
			<AppointmentDetail>
				<Text>detail</Text>
			</AppointmentDetail>
		);
		expect(detailWrapper).toMatchSnapshot();
		
		const headerWrapper = shallow(
			<AppointmentHeader>
				<Text>header</Text>
			</AppointmentHeader>
		);
		expect(headerWrapper).toMatchSnapshot();

		const timerWrapper = shallow(
			<AppointmentTimer>
				<Text>timer</Text>
			</AppointmentTimer>
		);
		expect(timerWrapper).toMatchSnapshot();

		const titleWrapper = shallow(
			<AppointmentTitle>
				<Text>title</Text>
			</AppointmentTitle>
		);
		expect(titleWrapper).toMatchSnapshot();
	});
});