import React from 'react';
import { shallow } from 'enzyme';
import Organisation from './Organisation';
import OrganisationTitle from './OrganisationTitle';
import OrganisationDetail from './OrganisationDetail'
import toJson from 'enzyme-to-json';


function shallowSetup() {

    const props = {
        companyId: 0,
        name: "",
        locations: [],
        workgroups: [],
        employees: []
    }

    const wrapper = shallow(
        <Organisation
            {...props}
        />
    );

    return {
        wrapper, props
    };
}

describe('Shallow rendered Organisation', () => {
    it('should render OrganisationTitle and OrganisationDetail components', () => {

        const { wrapper } = shallowSetup();

        expect(wrapper.find(OrganisationTitle)).toHaveLength(1);
        expect(wrapper.find(OrganisationDetail)).toHaveLength(1);

    });
});

it('Renders correctly', () => {

    const { wrapper } = shallowSetup();
    expect(toJson(wrapper)).toMatchSnapshot();
});
