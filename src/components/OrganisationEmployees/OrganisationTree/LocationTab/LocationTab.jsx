import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import '../../OrganisationEmployees.css';
import Workgroups from '../WorkGroups'
import { filter } from '../../constants'

export class LocationTab extends React.Component {

    isSelectedStyle = (workgroupId) => workgroupId === this.props.selectedTreeId ? { backgroundColor: "#00ABD4", color: "white", } : {};

    showAllHandler = (value) => this.props.handleFilterChange(filter.LOCATION, value);
    
    render() {
        const { location, workgroups } = this.props
        return (
            <PanelGroup
                accordion
                key={location.name}
                id={location.name}
                style={{ marginBottom: "0.5rem", cursor:'pointer' }}
            >
                <Panel eventKey={this.props.eventKey}>
                    <Panel.Heading className="noselect tree-location">
                   
                            <Panel.Title 
                           
                            onClick={() => {
                                this.showAllHandler(this.props.location.name);
                                this.props.filterByWorkgroupHandler(this.props.location.id, filter.LOCATION)
                            }}
                            collapsible
                            className="noselect tree-workgroups"
                            style={this.isSelectedStyle(this.props.location.id)}
                            >
                                {location.name} 
                            </Panel.Title>                            

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

/**
          
 ret.push(
            <div key={ret.length}>
                <Panel.Body
                    onClick={() => {
                        this.showAllHandler(this.props.location.name);
                        this.props.filterByWorkgroupHandler(this.props.location.id, filter.LOCATION)
                    }}
                    collapsible
                    className="noselect tree-workgroups"
                    style={this.isSelectedStyle(this.props.location.id)}
                >
                    {this.props.location.name}
                </Panel.Body>
                <hr style={{ margin: 0 }}></hr>
            </div>);
 */