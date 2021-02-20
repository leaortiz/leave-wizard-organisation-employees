import React from 'react';
import { columns, sortHelper } from '../../constants'
import { FcAlphabeticalSortingAz } from "react-icons/fc";



export class EmployeesTableHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderTh = (column) => {
        // should be refactored if more columns need a different formatter, this will do for now.

        if (column.datafield === "name" || column.datafield === "role" || column.datafield === "workgroupName")
            return <th key={column.datafield}>{column.caption}
                <FcAlphabeticalSortingAz
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={() => this.props.handleSortByChange(sortHelper(column.datafield))}
                />
            </th>
        else
            return <th key={column.datafield}>{column.caption}</th>
    }

    render() {
        return (
            <thead>
                <tr>
                    {columns.map(c => this.renderTh(c))}
                </tr>
            </thead>
        );
    }
}