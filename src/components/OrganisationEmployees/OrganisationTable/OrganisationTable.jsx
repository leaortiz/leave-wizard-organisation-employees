import React from 'react';
import { Checkbox, Table } from 'react-bootstrap';
import EmployeesTableHeader from './EmployeesTableHeader'
import EmployeesTableBody from './EmployeesTableBody'

export class EmployeesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInactiveEmployees: true
        };
    }

    handleChange = (name, value) => this.setState({ [name]: value });

    render() {
        let showInactiveEmployees = this.state.showInactiveEmployees;
        return (
            <>
                <Table striped bordered condensed hover responsive>
                    <EmployeesTableHeader {...this.props} />
                    <EmployeesTableBody {...this.props} showInactiveEmployees={showInactiveEmployees} />
                </Table>
                <div style={{ float: "right" }}>
                    <Checkbox
                        checked={!showInactiveEmployees}
                        onChange={() => this.handleChange("showInactiveEmployees", !showInactiveEmployees)}
                        style={{ display: "inline" }}
                    /> show inactive employees
                </div>
            </>
        );
    }
}
