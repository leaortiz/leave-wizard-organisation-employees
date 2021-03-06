import React from 'react';
import { shallow } from 'enzyme';
import OrganisationTitle from './OrganisationTitle';
import toJson from 'enzyme-to-json';


function shallowSetup() {

    const props = {
        name: 'LeaveWizard Ltd',
    }

    const wrapper = shallow(
        <OrganisationTitle
            {...props}
        />
    );

    return {
        wrapper, props
    };
}

describe('Shallow rendered CompanyDetail', () => {
    it('should render company name value from props', () => {

        const { wrapper, props } = shallowSetup();
        expect(wrapper.find('h3').text()).toContain(props.name)

    });
});

it('Renders correctly', () => {

    const { wrapper } = shallowSetup();
    expect(toJson(wrapper)).toMatchSnapshot();
    
});
