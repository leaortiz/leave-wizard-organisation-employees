import React from 'react';
import { shallow } from 'enzyme';
import OrganisationDetail from './OrganisationDetail';
import toJson from 'enzyme-to-json';
import moment from 'moment';

import data from '../../../../../public/data.json';

const mockCallBack = jest.fn();

function shallowSetup(props) {

    const wrapper = shallow(
        <OrganisationDetail
            {...props}
        />
    );

    return wrapper;
}

describe('Shallow rendered Organization Settings when hide prop is set to false', () => {
    
    let wrapper, props;
    beforeEach(() => {
        props = {
            name: data.name,
            email: data.email,
            leaveYearStartDate: data.leaveYearStartDate,
            workPattern: data.workPattern,
            maxStaffOnLeave: data.maxStaffOnLeave,
            overtimeEnabled: data.overtimeEnabled,
            hide: false,
            handleChange: mockCallBack
        }
        wrapper  = shallowSetup(props);
      });

    it('should render company email value from props', () => {

        expect(wrapper.findWhere(node => node.key() === '0').text()).toContain(props.email)

    });

    it('should render company leave year start date value from props', () => {

        expect(wrapper.findWhere(node => node.key() === '1').text()).toContain(moment(props.leaveYearStartDate).format('DD/MMM'))

    });

    it('should render company work pattern value from props', () => {

        expect(wrapper.findWhere(node => node.key() === '2').text()).toContain(props.workPattern.name)

    });

    it('should render company max staff leave value from props', () => {

        expect(wrapper.findWhere(node => node.key() === '3').text()).toContain(props.maxStaffOnLeave)

    });

    it('should render show less button', () => {

        expect(wrapper.find('p').last().text()).toContain('show less')

    });

    it('should call handle change when show less button is clicked', () => {

        expect(wrapper.instance().props.hide).toBe(false);
        wrapper.find('p').last().simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);

    });

});

describe('Shallow rendered Organization Settings when hide prop is set to true', () => {
    
    let wrapper, props;
    beforeEach(() => {
        props = {
            name: data.name,
            email: data.email,
            leaveYearStartDate: data.leaveYearStartDate,
            workPattern: data.workPattern,
            maxStaffOnLeave: data.maxStaffOnLeave,
            overtimeEnabled: data.overtimeEnabled,
            hide: true,
            handleChange: mockCallBack
        }
        wrapper  = shallowSetup(props);
      });

    it('should not render company email value from props', () => {

        expect(wrapper.find('p').length).toBe(1)

    });

    it('should render show more button', () => {

        expect(wrapper.find('p').last().text()).toContain('show more')

    });

    it('should call handle change when show more button is clicked', () => {

        expect(wrapper.instance().props.hide).toBe(true);
        wrapper.find('p').last().simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);

    });

});

it('Renders correctly', () => {
    let props = {
        name: data.name,
        email: data.email,
        leaveYearStartDate: data.leaveYearStartDate,
        workPattern: data.workPattern,
        maxStaffOnLeave: data.maxStaffOnLeave,
        overtimeEnabled: data.overtimeEnabled,
        hide: false,
        handleChange: mockCallBack
    }
    let wrapper  = shallowSetup(props);
    expect(toJson(wrapper)).toMatchSnapshot();
    
});
