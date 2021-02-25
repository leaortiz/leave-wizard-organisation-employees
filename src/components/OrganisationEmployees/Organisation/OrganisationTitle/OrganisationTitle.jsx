import React from 'react';
import { BsPencil } from "react-icons/bs";
import './OrganisationTitle.scss'


export default class OrganisationTitle extends React.Component {
    render() {
        return (
            <div style={{ display: "inline" }}>
                <h3 className="lw-light-blue lw-title">
                    <BsPencil />
                    {' '}{this.props.name}
                </h3>
                <p className="company-detail-end">
                    company
                    </p>
            </div>
        )
    }
}