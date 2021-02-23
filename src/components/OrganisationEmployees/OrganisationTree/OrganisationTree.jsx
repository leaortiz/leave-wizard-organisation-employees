import React from 'react';
import {Label } from 'react-bootstrap';
import '../OrganisationEmployees.css';
import LocationTab from './LocationTab'


export class OrganisationTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWorkgroupId: 36,
            selectedLocation: ''
        };
    }

    filterByWorkgroupHandler = (workgroupId, filter, location) => {
        this.setState({ selectedWorkgroupId: workgroupId, selectedLocation: location });
        this.props.handleFilterChange(filter, workgroupId);
    }

    tabs = () => {
        const { locations, companyId } = this.props;
        return locations.filter(l => l.companyId === companyId && l.isActive)
            .map((location, index) => (
                <LocationTab
                    key={'lt' + index}
                    location={location}
                    filterByWorkgroupHandler={this.filterByWorkgroupHandler}
                    selectedWorkgroupId={this.state.selectedWorkgroupId}
                    {...this.props} />
            ));
    }

    resetFilters = () => 
    {
        this.props.resetfilterValueIds()
        this.setState({selectedWorkgroupId: 0})
    }

    render() {

        return (
            <div>
                <h3 style={{ marginBottom: "2rem", color: "#00ABD4", cursor: "pointer" }}>
                    <Label
                        onClick={this.resetFilters}
                        className="lw-bg-light-blue">
                        {this.props.name}
                    </Label>
                </h3>

                {this.tabs()}
                <div>                <p
                        style={{textAlign:"left"}}
                        className="lw-light-blue company-detail-btn-text"
                        onClick={this.resetFilters}
                    >
                        reset
                    </p></div>
                    
            </div>
        );
    }
}
