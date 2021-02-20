import React from 'react';
import {Label } from 'react-bootstrap';
import '../OrganisationEmployees.css';
import LocationTab from '../LocationTab'


export class OrganisationTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWorkgroupName: ''
        };
    }

    filterByWorkgroupHandler = (value, filter) => {
        this.setState({ selectedWorkgroupName: value });
        this.props.handleFilterChange(filter, value);
    }

    tabs = () => {
        const { locations, companyId } = this.props;
        return locations.filter(l => l.companyId === companyId && l.isActive)
            .map((location, index) => (
                <LocationTab
                    key={'lt' + index}
                    location={location}
                    filterByWorkgroupHandler={this.filterByWorkgroupHandler}
                    selectedWorkgroupName={this.state.selectedWorkgroupName}
                    {...this.props} />
            ));
    }

    render() {

        return (
            <div>
                <h3 style={{ marginBottom: "2rem", color: "#00ABD4", cursor: "pointer" }}>
                    <Label
                        onClick={() => {
                            this.props.resetFilterValues()
                            this.setState({selectedWorkgroupName: ''})
                        }}
                        className="lw-bg-light-blue">
                        {this.props.name}
                    </Label>
                </h3>
                {this.tabs()}
            </div>
        );
    }
}
