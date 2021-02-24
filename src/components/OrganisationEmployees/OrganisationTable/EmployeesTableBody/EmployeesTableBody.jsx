import React from 'react';
import { filter } from '../../constants'
import EmployeesTableRow from '../EmployeesTableRow'


export class EmployeesTableBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getMutatedEmployeeList = () => {
        //next step refactor to redux
        const { employees, sortBy, filterBy, filterValueId, showInactiveEmployees, workgroups } = this.props;

        let clonedList = employees.slice();
        sortBy !== sortBy.DEFAULT ?
            clonedList.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0)) :
            clonedList.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
        if (filterBy === filter.LOCATION)
        {
            const filteredWorkGroupsBySelectedLocation = workgroups.filter(w => w.locationId === filterValueId)
            clonedList = clonedList.filter(e => filteredWorkGroupsBySelectedLocation.some(w => w.id === e.workgroupId));
        }
          
        if (filterBy === filter.WORKGROUP)
            clonedList = clonedList.filter(e => e.workgroupId === filterValueId);
        
        return showInactiveEmployees ? clonedList.filter(e => e.isActive) : clonedList;
    }


    render() {
        const employees = this.getMutatedEmployeeList();
        return (
            <tbody>
                <EmployeesTableRow employees={employees}/>
            </tbody>
        );
    }
}