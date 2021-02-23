import React from 'react';
import { shallow } from 'enzyme';
import CompanyDetail from '../components/OrganisationEmployees/CompanyDetail';
import CompanyTitle from '../components/OrganisationEmployees/CompanyTitle';
import OrganisationSettings from '../components/OrganisationEmployees/OrganisationSettings'
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
        <CompanyDetail
            {...props}
        />
    );

    return {
        wrapper, props
    };
}

describe('Shallow rendered CompanyDetail', () => {
    it('should render CompanyTitle and OrganisationSettings components', () => {

        const { wrapper } = shallowSetup();

        expect(wrapper.find(CompanyTitle)).toHaveLength(1);
        expect(wrapper.find(OrganisationSettings)).toHaveLength(1);

    });
});

it('Renders correctly', () => {

    const { wrapper } = shallowSetup();
    expect(toJson(wrapper)).toMatchSnapshot();
});
