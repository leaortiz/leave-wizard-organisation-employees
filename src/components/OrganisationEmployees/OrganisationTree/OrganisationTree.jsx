import React from 'react';
import { Label, Panel } from 'react-bootstrap';
import '../OrganisationEmployees.css';
import LocationTab from './LocationTab'


export class OrganisationTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTreeId: 0,
            selectedLocation: ''
        };
    }

    filterByWorkgroupHandler = (workgroupId, filter, location) => {
        this.setState({ selectedTreeId: workgroupId, selectedLocation: location });
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
                    selectedTreeId={this.state.selectedTreeId}
                    {...this.props} />
            ));
    }

    isSelectedStyle = () => this.state.selectedTreeId === 0 ? { backgroundColor: "#00ABD4", color: "white", } : {backgroundColor: "#f5f5f5" };

    resetFilters = () => {
        this.props.resetfilterValueIds()
        this.setState({ selectedTreeId: 0 })
    }

    render() {
        console.log(this.state.selectedTreeId, 'selectedTreeIdselectedTreeId');
        return (
            <div>
                <h3 style={{ marginBottom: "2rem", color: "#00ABD4", cursor: "pointer" }}>
                    <Label
                        className="lw-bg-light-blue">
                        {this.props.name}
                    </Label>
                </h3>

                {this.tabs()}
                    <Panel
                        className="company-detail-btn-text"
                        onClick={this.resetFilters}
                        style={this.isSelectedStyle()}
                    >
                        Show all
                    </Panel>
                    <hr style={{margin:1}}></hr>

            </div>
        );
    }
}
