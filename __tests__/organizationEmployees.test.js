import React from 'react';
import { shallow } from 'enzyme';
import OrganisationEmployees from '../components/OrganisationEmployees/index';
import OrganisationTree from '../components/OrganisationEmployees/OrganisationTree';
import CompanyDetail from '../components/OrganisationEmployees/CompanyDetail';
import EmployeesTable from '../components/OrganisationEmployees/OrganisationTable/';
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
        <OrganisationEmployees
            {...props}
        />
    );

    return {
        wrapper, props
    };
}

describe('Shallow rendered Organization Employees', () => {
    it('should render CompanyTitle and OrganisationSettings components', () => {

        const { wrapper } = shallowSetup();

        expect(wrapper.find(OrganisationTree)).toHaveLength(1);
        expect(wrapper.find(CompanyDetail)).toHaveLength(1);
        expect(wrapper.find(EmployeesTable)).toHaveLength(1);

    });
});

it('Renders correctly', () => {

    const { wrapper } = shallowSetup();
    expect(toJson(wrapper)).toMatchSnapshot();
});
