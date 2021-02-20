import React from 'react';
import { Row } from 'react-bootstrap';
import CompanyTitle from '../CompanyTitle'
import OrganisationSettings from '../OrganisationSettings'


export class CompanyDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
        };
    }

    handleChange = (name, value) => this.setState({ [name]: value });

    render() {
        const props = this.props
        return (
            <div>
                <Row>
                    <CompanyTitle {...props} />
                </Row>
                <hr style={{ margin: 0, marginBottom: "1rem", border: "1px solid #00ABD4", background: "#00ABD4" }}></hr>
                <Row>
                    <OrganisationSettings {...props} hide={this.state.hide} handleChange={this.handleChange} />
                </Row>
            </div>
        );
    }
}
