import React from 'react';
import { Row } from 'react-bootstrap';
import OrganisationTitle from './OrganisationTitle'
import OrganisationDetail from './OrganisationDetail'


export default class Organisation extends React.Component {
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
                    <OrganisationTitle {...props} />
                </Row>
                <hr style={{ margin: 0, marginBottom: "1rem", border: "1px solid #00ABD4", background: "#00ABD4" }}></hr>
                <Row>
                    <OrganisationDetail {...props} hide={this.state.hide} handleChange={this.handleChange} />
                </Row>
            </div>
        );
    }
}