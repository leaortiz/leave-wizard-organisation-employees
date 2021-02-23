import React from 'react';
import { sort, filter } from '../../constants'
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

        let mutatedList = employees;
        sortBy !== sort.DEFAULT ?
            mutatedList.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0)) :
            mutatedList.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
        if (filterBy === filter.LOCATION)
        {
            const filteredWorkGroupsBySelectedLocation = workgroups.filter(w => w.locationId === filterValueId)
            mutatedList = mutatedList.filter(e => filteredWorkGroupsBySelectedLocation.some(w => w.id === e.workgroupId));
        }
          
        if (filterBy === filter.WORKGROUP)
            mutatedList = mutatedList.filter(e => e.workgroupId === filterValueId);

            console.log(mutatedList, 'mutatedList', 'lista');
        
        return showInactiveEmployees ? mutatedList.filter(e => e.isActive) : mutatedList;
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