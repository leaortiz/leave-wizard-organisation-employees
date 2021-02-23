import React from 'react';
import { Panel } from 'react-bootstrap';
import { filter } from '../constants'

export default class LocationDetail extends React.Component {

 

    render() {
        return (
            <> {this.props.filterBy === filter.DEFAULT &&
                <Panel>
                <Panel.Body style={{ padding: "8px" }}>
                   
                </Panel.Body>
            </Panel>}
           </>
        )
    }
}