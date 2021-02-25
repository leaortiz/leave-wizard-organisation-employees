import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import '../../OrganisationEmployees.css';
import Workgroups from '../WorkGroups'
import { filter } from '../../constants'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import './LocationTab.scss';

export class LocationTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,            
        };
    }

    isSelectedStyle = (workgroupId) => workgroupId === this.props.selectedTreeId ? 'lw-panel-group-selected' : '';

    showAllHandler = (value) => this.props.handleFilterChange(filter.LOCATION, value);

    render() {
        const { location, workgroups } = this.props
        return (
            <PanelGroup
                accordion
                className='lw-panel-group-divider'
                key={location.name}
                id={location.name}
            >
                <Panel eventKey={this.props.eventKey}>
                    <Panel.Heading className="noselect tree-location">
                        <Panel.Title
                            collapsible
                            className={`noselect tree-workgroups ${this.isSelectedStyle(this.props.location.id)}`}
                        >
                            <div 
                            className='lw-panel-group-location'
                           
                                onClick={() => {
                                    this.showAllHandler(this.props.location.name);
                                    this.props.filterByWorkgroupHandler(this.props.location.id, filter.LOCATION)
                                }}>
                                {location.name}
                            </div>

                            <Panel.Toggle>
                                <div onClick={() => this.setState({ open: !this.state.open })} className='lw-panel-group-toggle'>

                                    {
                                        this.state.open ?
                                            <RiArrowUpSLine className='color-black'/>
                                            :
                                            <RiArrowDownSLine className='color-black'/>
                                    }
                                </div>
                            </Panel.Toggle>
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
