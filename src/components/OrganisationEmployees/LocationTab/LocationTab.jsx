import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import '../OrganisationEmployees.css';
import Workgroups from '../WorkGroups'

export class LocationTab extends React.Component {
    render() {
        const { location, workgroups } = this.props
        return (
            <PanelGroup
                accordion
                key={location.name}
                id={location.name}
                style={{ marginBottom: "0.5rem" }}
            >
                <Panel eventKey={this.props.eventKey}>
                    <Panel.Heading className="noselect tree-location">
                        <div>
                            <Panel.Title style={{ display: "inline" }} toggle>{location.name} </Panel.Title>
                            <p className="company-detail-btn-text lw-light-blue" style={{ display: "inline", float: "right", marginRight: "0.5rem" }}>detail</p>
                        </div>
                    </Panel.Heading>
                    <Workgroups
                        location={location}
                        workgroups={workgroups}
                        {...this.props}
                    />

                </Panel>
            </PanelGroup>
        );
    }
}