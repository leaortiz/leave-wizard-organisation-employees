import React from 'react';
import { Panel } from 'react-bootstrap';
import moment from 'moment';
import { FcExpand, FcCollapse } from "react-icons/fc";


const settingsPanel = {
    email: "Email: ",
    leaveYearStartDate: 'Leave year starts on (dd/MM): ',
    workPattern: 'Work pattern: ',
    maxStaffOnLeave: 'Max staff leave for the whole company: ',
    overtimeEnabled: 'Overtime enabled: '
}

export default class OrganisationDetail extends React.Component {

    renderDetailField = (key) => {
        if (key === 'leaveYearStartDate') {
            return <><strong>{settingsPanel[key]}</strong> {moment(this.props.leaveYearStartDate).format('DD/MMM')}  </>
        }
        else
            return <>
                <strong>{settingsPanel[key]}</strong>
                {key === 'workPattern' ?
                    this.props[key]?.name :
                    this.props[key]?.toString()}
            </>

    }

    render() {
        const keys = Object.keys(settingsPanel);
        return (
            <Panel>
                <Panel.Body style={{ padding: 0 }}>

                    {this.props.hide ? null :
                        <div style={{ padding: '12px' }} >
                            {
                                keys.map((k, i) =>
                                    <p key={i}>
                                        {this.renderDetailField(k)}
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