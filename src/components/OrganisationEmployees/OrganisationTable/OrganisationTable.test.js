import React from 'react';
import { shallow  } from 'enzyme';
import OrganisationTable from './OrganisationTable';
import EmployeesTableHeader from './EmployeesTableHeader';
import EmployeesTableBody from './EmployeesTableBody';
import toJson from 'enzyme-to-json';


function shallowSetup(props) {

    const wrapper = shallow(
        <OrganisationTable
            {...props}
        />
    );

    return wrapper;
}

describe('Shallow rendered Organization Table', () => {
    
    let wrapper, props;
    beforeEach(() => {
        props = {}
        wrapper  = shallowSetup(props);
      });

    it('should render Checkbox', () => {

        expect(wrapper.find('Checkbox')).toHaveLength(1);

    });

    it('should render EmployeesTableHeader', () => {

        expect(wrapper.find(EmployeesTableHeader)).toHaveLength(1);

    });

    it('should render EmployeesTableBody', () => {

        expect(wrapper.find(EmployeesTableBody)).toHaveLength(1);

    });

});

it('Renders correctly', () => {
    let props = {}

    let wrapper  = shallowSetup(props);
    expect(toJson(wrapper)).toMatchSnapshot();
    
});
