import React from 'react';
import moment from 'moment';
import { columns } from '../../constants'
import './EmployeesTableRow'

export class EmployeesTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderTd = (e, datafield) => {
        // should be refactored if more columns need a different formatter, this will do for now.
        if (datafield === "name")
            return <p className="lw-light-blue">{e.lastName}, {e.firstName}</p>
        else if (datafield === "viewLeaveTaken")
            return <a href="#" className="lw-light-blue">View Leave Taken</a>
        else if (datafield === "leaveYearStartDate")
            return moment(e.leaveYearStartDate).format('DD/MMM');
        else
            return e[datafield];
    }

    render() {
        const { employees } = this.props;
        return (
            <>
                {
                    employees.length === 0 ?
                        <tr><td colSpan={columns.length} className='align-center'>There are no employees to show.</td></tr> :

                        employees.map((e, index) =>
                            <tr key={`tr-${index}`}>
                                {
                                    columns.map((c, index) =>
                                        <td key={c.datafield + index}>
                                            {this.renderTd(e, c.datafield)}
                                        </td>
                                    )
                                }
                            </tr>
                        )
                }
            </>
        );
    }
}