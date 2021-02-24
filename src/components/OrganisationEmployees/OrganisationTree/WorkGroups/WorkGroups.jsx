import React from 'react';
import { Panel } from 'react-bootstrap';
import '../../OrganisationEmployees.css';
import { filter } from '../../constants'

export class Workgroups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: "",
        };
    }   

    isSelectedStyle = (workgroupId) => workgroupId === this.props.selectedTreeId ? { backgroundColor: "#00ABD4", color: "white", } : {};

    workgroups = () => {
        let ret = this.props.workgroups
            .filter(w => w.locationId === this.props.location.id && w.isActive)
            .map((w) =>
                <div key={w.name}>                   
                    <Panel.Body
                        collapsible
                        className="noselect tree-workgroups"
                        onClick={() => this.props.filterByWorkgroupHandler(w.id, filter.WORKGROUP, this.props.location)}
                        style={this.isSelectedStyle(w.id)}
                    >
                        {w.name} 
                    </Panel.Body>
                    <hr style={{ margin: 0 }}></hr>
                </div>
            );

        return ret;
    }

    render() {
        return (
            this.workgroups()
        )

    }
}