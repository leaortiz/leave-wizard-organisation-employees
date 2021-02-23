import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import OrganisationTree from './OrganisationTree/';
import OrganisationTable from './OrganisationTable';
import Organisation from './Organisation';
import appConfig from '../../config';
import { sort, filter } from './constants'

class OrganisationEmployees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { companyId: 0, name: "", locations: [], workgroups: [], employees: [] },
            filterBy: filter.DEFAULT,
            filterValue: "",
            sortBy: sort.DEFAULT,
        };
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = async () => {
        const onSuccess = (data) => this.setState({ data: data });
        fetch(appConfig.settings.REACT_APP_API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((response) => response.json())
            .then((data) => onSuccess(data));
    }

    handleChange = (name, value) => this.setState({ [name]: value });

    handleFilterChange = (filterBy, filterValue) =>
        this.setState({
            filterBy: filterBy,
            filterValue: filterValue
        });

    handleSortByChange = (sortBy) => this.setState({ sortBy: sortBy, });

    resetFilterValues = () => this.setState({
        filterBy: filter.DEFAULT,
        filterValue: "",
        sortBy: sort.DEFAULT,
    })

    render() {
        const { data, filterBy, filterValue, sortBy } = this.state;
        return (
            <Grid>
                <Row>
                    <Col lg={3} sm={4} md={3}>
                        <OrganisationTree
                            name={data.name}
                            companyId={data.id}
                            locations={data.locations}
                            workgroups={data.workgroups}
                            handleChange={this.handleChange}
                            handleFilterChange={this.handleFilterChange}
                            resetFilterValues={this.resetFilterValues}
                        />
                    </Col>
                    <Col lg={9} sm={12} md={13}>
                        <Organisation {...this.state.data} />
                        <Row>
                            <OrganisationTable
                                filterBy={filterBy}
                                filterValue={filterValue}
                                sortBy={sortBy}
                                {...this.state.data}
                                handleSortByChange={this.handleSortByChange}
                            />
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default OrganisationEmployees;