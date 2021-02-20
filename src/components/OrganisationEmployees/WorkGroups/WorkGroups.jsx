import React from 'react';
import { Panel } from 'react-bootstrap';
import '../OrganisationEmployees.css';
import { filter } from '../constants'


export class Workgroups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: "",
        };
    }

    showAllHandler = (value) => this.props.handleFilterChange(filter.LOCATION, value);

    isSelectedStyle = (workgroupName) => workgroupName === this.props.selectedWorkgroupName ? { backgroundColor: "#00ABD4", color: "white" } : {};

    workgroups = () => {
        let ret = this.props.workgroups
            .filter(w => w.locationId === this.props.location.id && w.isActive)
            .map((w) =>
                <div key={w.name}>
                    <Panel.Body
                        collapsible
                        className="noselect tree-workgroups"
                        onClick={() => this.props.filterByWorkgroupHandler(w.name, filter.WORKGROUP)}
                        style={this.isSelectedStyle(w.name)}
                    >
                        {w.name}
                    </Panel.Body>
                    <hr style={{ margin: 0 }}></hr>
                </div>
            );
        ret.push(
            <div key={ret.length}>
                <Panel.Body
                    onClick={() => {
                        this.showAllHandler(this.props.location.name);
                        this.props.filterByWorkgroupHandler(this.props.location.name, filter.LOCATION)
                    }}
                    collapsible
                    className="noselect tree-workgroups"
                    style={this.isSelectedStyle(this.props.location.name)}
                >
                    {`All workgroups for this location`}
                </Panel.Body>
                <hr style={{ margin: 0 }}></hr>
            </div>);
        return ret;
    }

    render() {
        return (
            this.workgroups()
        )

    }
}