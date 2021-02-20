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
        const { employees, sortBy, filterBy, filterValue, showInactiveEmployees } = this.props;

        let mutatedList = employees;
       
        sortBy !== sort.DEFAULT ?
            mutatedList.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0)) :
            mutatedList.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
        if (filterBy === filter.LOCATION)
            mutatedList = mutatedList.filter(e => e.workgroupName.includes(filterValue));
        if (filterBy === filter.WORKGROUP)
            mutatedList = mutatedList.filter(e => e.workgroupName === filterValue);

        return showInactiveEmployees ? mutatedList.filter(e => e.isActive) : mutatedList;
    }


    render() {
        const employees = this.getMutatedEmployeeList();
        return (
            <EmployeesTableRow employees={employees}/>
        );
    }
}