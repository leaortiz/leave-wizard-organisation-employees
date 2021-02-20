import React from 'react';
import { BsPencil } from "react-icons/bs";


export class CompanyTitle extends React.Component {
    render() {
        return (
            <div style={{ display: "inline" }}>
                <h3 className="lw-light-blue" style={{ float: "left", display: "inline" }}>
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