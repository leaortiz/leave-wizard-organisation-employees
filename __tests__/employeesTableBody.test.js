import React from 'react';
import { mount } from 'enzyme';
import EmployeesTableBody from '../components/OrganisationEmployees/OrganisationTable/EmployeesTableBody';
import toJson from 'enzyme-to-json';

import data from '../../public/data.json';

function mountSetup(props) {

    const wrapper = mount(
        <EmployeesTableBody
            {...props}
        />
    );

    return wrapper;
}

describe('Shallow rendered Employee Table Body', () => {

    it('should render three employees when show inactives options is not selected', () => {
        const props = {
            employees: data.employees,
            showInactiveEmployees: true
        }
        const wrapper = mountSetup(props);
        expect(wrapper.find('tr')).toHaveLength(3);

    });

    it('should render four employees when show inactives options is selected', () => {
        const props = {
            employees: data.employees,
            showInactiveEmployees: false
        }
        const wrapper = mountSetup(props);
        expect(wrapper.find('tr')).toHaveLength(4);

    });
});

it('Renders correctly', () => {
    const props = {
        employees: data.employees,
        showInactiveEmployees: false
    }
    const wrapper = mountSetup(props);
    expect(toJson(wrapper)).toMatchSnapshot();
    
});
