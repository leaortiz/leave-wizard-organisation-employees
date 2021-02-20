import React from 'react';
import { Panel } from 'react-bootstrap';
import moment from 'moment';


const settingsPanel = {
    email: "Email: ",
    leaveYearStartDate: 'Leave year starts on (dd/MM): ',
    workPattern: 'Work pattern: ',
    maxStaffOnLeave: 'Max staff leave for the whole company: ',
    overtimeEnabled: 'Overtime enabled: '
}

export class OrganisationSettings extends React.Component {

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
                <Panel.Body style={{ padding: "8px" }}>

                    {this.props.hide ?
                        null
                        : keys.map((k, i) =>
                            <p key={i}>
                                {this.renderDetailField(k)}
                            </p>
                        )}
                    <p
                        className="lw-light-blue company-detail-btn-text"
                        onClick={() => this.props.handleChange("hide", !this.props.hide)}
                    >
                        {this.props.hide ? "show more" : "show less"}
                    </p>
                </Panel.Body>
            </Panel>
        )
    }
}