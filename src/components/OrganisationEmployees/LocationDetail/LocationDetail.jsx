import React from 'react';
import { Panel } from 'react-bootstrap';
import { filter } from '../constants';

export class LocationDetail extends React.Component {

    render() {
        return (
            <>
                <h4 className="lw-light-blue">{this.props.city}:</h4>
                <p><strong>Max staff on leave:</strong> {this.props.maxStaffOnLeave ?? 'N/A'}</p>
                <p><strong>Work pattern:</strong> {this.props.workPattern ?? 'N/A'}</p>              
            </>
        )
    }
}

export class WorkgroupDetail extends React.Component {

    render() {
        return (
            <>
                <h4 className="lw-light-blue">{this.props.name}:</h4>
                <p><strong>Max staff on leave:</strong> {this.props.maxStaffOnLeave ?? 'N/A'}</p>
                <p><strong>Leader:</strong> {this.props.leaderName ?? 'N/A'}</p>
               
            </>
        )
    }
}

export default class CompanyDetail extends React.Component {

    buildData = ({ filterBy, filterValueId }, array) => {
        let data = array.filter(l => l.id === filterValueId)[0];
        if (filterBy === filter.LOCATION) {
            const props = {
                city: data.city,
                maxStaffOnLeave: data.maxStaffOnLeave ?? 'N/A',
                workPattern: data.workPattern ?? 'N/A'
            };
            return <LocationDetail {...props} />
        }
        if (filterBy === filter.WORKGROUP) {
            const props = {
                name: data.name,
                leaderName: data.leader?.name ?? 'N/A',
                maxStaffOnLeave: data.maxStaffOnLeave ?? 'N/A'
            }
            return <WorkgroupDetail {...props} />
        }
    }

    render() {
        const isLocation = this.props.filterBy === filter.LOCATION;
        const isWorkgroup = this.props.filterBy === filter.WORKGROUP;

        let array = isLocation ? this.props.data.locations : isWorkgroup ? this.props.data.workgroups : [];
        const component = this.buildData(this.props, array);

        return (
            <> {this.props.filterBy !== filter.DEFAULT &&
                <div>
                    <h3 style={{ marginBottom: "2rem", color: "#00ABD4", cursor: "pointer" }}>
                        {isLocation && "Location Detail"}
                        {isWorkgroup && "Workgroup Detail"}
                    </h3>

                    <Panel>
                        <Panel.Body style={{ padding: "8px" }}>
                            {component}
                        </Panel.Body>
                    </Panel>

                </div>}
            </>
        )
    }
}