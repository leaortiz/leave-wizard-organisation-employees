import React from 'react';
import { Panel } from 'react-bootstrap';
import moment from 'moment';
import { FcExpand, FcCollapse } from "react-icons/fc";
import { filter } from '../../constants';


const companyLevelDetail = {
    email: "Email: ",
    leaveYearStartDate: 'Leave year starts on (dd/MM): ',
    workPattern: 'Work pattern: ',
    maxStaffOnLeave: 'Max staff leave for the whole company: ',
    overtimeEnabled: 'Overtime enabled: '
}

const locationDetail = {
    city: 'City: ',
    workPattern: 'Work pattern: ',
    maxStaffOnLeave: "Max staff on leave: "
}

const workgroupDetail = {
    name: 'Workgroup: ',
    leaderName: "Leader: ",
    maxStaffOnLeave: 'Max staff leave for the whole company: ',
}


export default class OrganisationDetail extends React.Component {

    getData = ({ filterBy, filterValueId }, array) => {
        let data = array.slice().filter(l => l.id === filterValueId)[0];
        if (filterBy === filter.LOCATION) {
            return {
                data: {
                    city: data.city,
                    maxStaffOnLeave: data.maxStaffOnLeave ?? 'N/A',
                    workPattern: data.workPattern ?? 'N/A'
                },
                detail: locationDetail,
            };
        }
        else if (filterBy === filter.WORKGROUP) {
            return {
                data: {
                    name: data.name,
                    leaderName: data.leader?.name ?? 'N/A',
                    maxStaffOnLeave: data.maxStaffOnLeave ?? 'N/A'
                },
                detail: workgroupDetail
            }
        }
        else
            return {
                data: {
                    email: this.props.email,
                    leaveYearStartDate: moment(this.props.leaveYearStartDate).format('DD/MMM'),
                    workPattern: this.props.workPattern?.name,
                    maxStaffOnLeave: this.props.maxStaffOnLeave,
                    overtimeEnabled: this.props.overtimeEnabled ? 'yes' : 'no'
                },
                detail: companyLevelDetail
            }
    }

    render() {
        const isLocation = this.props.filterBy === filter.LOCATION;
        const isWorkgroup = this.props.filterBy === filter.WORKGROUP;
        let array = isLocation ? this.props.data.locations : isWorkgroup ? this.props.data.workgroups : [];
        const data = this.getData(this.props, array);
       
        return (
            <Panel>
                <Panel.Body style={{ padding: 0 }}>

                    {this.props.hide ? null :
                        <div style={{ padding: '12px' }} >
                            {
                                Object.keys(data.detail).map((k, i) =>
                                    <p key={i}>
                                        {<strong>{data.detail[k]}</strong>} {data.data[k]}
                                    </p>
                                )}
                        </div>
                    }
                </Panel.Body>
                <div className='lw-show-details' onClick={() => this.props.handleChange("hide", !this.props.hide)} >
                    <h3 style={{ display: 'block', margin: 0, marginLeft: '49%' }} >
                        {this.props.hide ? <FcExpand /> : <FcCollapse />}
                    </h3>
                </div>
            </Panel>
        )
    }
}