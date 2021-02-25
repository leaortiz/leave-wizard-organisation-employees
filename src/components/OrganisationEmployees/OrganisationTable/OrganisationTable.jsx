import React from 'react';
import { Checkbox, Table } from 'react-bootstrap';
import EmployeesTableHeader from './EmployeesTableHeader'
import EmployeesTableBody from './EmployeesTableBody'

export default class OrganisationTable extends React.Component {
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
                   <div style={{ float: "inline", marginBottom:'1rem', marginLeft:'78%' }}>
                  
                    <Checkbox
                        checked={!showInactiveEmployees}
                        onChange={() => this.handleChange("showInactiveEmployees", !showInactiveEmployees)}
                        style={{ display: "inline" }}
                    /> show inactive employees
                    
                </div>
                
                <Table striped bordered condensed hover responsive>
                    <EmployeesTableHeader {...this.props} />
                    <EmployeesTableBody {...this.props} showInactiveEmployees={showInactiveEmployees} />
                </Table>

            </>
        );
    }
}
