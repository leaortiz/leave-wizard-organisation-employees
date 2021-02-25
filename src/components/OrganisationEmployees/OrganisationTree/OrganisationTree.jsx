import React from 'react';
import { Label, Panel } from 'react-bootstrap';
import '../OrganisationEmployees.css';
import LocationTab from './LocationTab'
import './OrganisationTree.scss'


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

    isSelectedStyle = () => this.state.selectedTreeId === 0 ? 'lw-panel-group-selected' : 'lw-bg-grey';

    resetFilters = () => {
        this.props.resetfilterValueIds()
        this.setState({ selectedTreeId: 0 })
    }

    render() {
        return (
            <div>
                <h3 className='lw-tree-title'>
                    <Label
                        className="lw-bg-light-blue">
                        {this.props.name}
                    </Label>
                </h3>

                {this.tabs()}
                    <Panel
                        className={`${this.isSelectedStyle()} company-detail-btn-text`}
                        onClick={this.resetFilters}
                    >
                        Show all
                    </Panel>
                    <hr style={{margin:1}}></hr>

            </div>
        );
    }
}
