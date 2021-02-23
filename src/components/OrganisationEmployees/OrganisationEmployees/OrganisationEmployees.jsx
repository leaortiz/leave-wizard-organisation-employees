import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import LocationDetail from '../LocationDetail'
import OrganisationTree from '../OrganisationTree';
import OrganisationTable from '../OrganisationTable';
import Organisation from '../Organisation';
import appConfig from '../../../config/';
import { sort, filter } from '../constants'

class OrganisationEmployees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { companyId: 0, name: "", locations: [], workgroups: [], employees: [] },
            filterBy: filter.DEFAULT,
            filterValueId: "",
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

    handleFilterChange = (filterBy, filterValueId) =>
        this.setState({
            filterBy: filterBy,
            filterValueId: filterValueId
        });

    handleSortByChange = (sortBy) => this.setState({ sortBy: sortBy, });

    resetfilterValueIds = () => this.setState({
        filterBy: filter.DEFAULT,
        filterValueId: "",
        sortBy: sort.DEFAULT,
    })

    render() {
        const { data, filterBy, filterValueId, sortBy } = this.state;
        return (
            <Grid>
                <Row>
                    <Col lg={3} sm={4} md={3}>
                        <Row>
                        <OrganisationTree
                            name={data.name}
                            companyId={data.id}
                            locations={data.locations}
                            workgroups={data.workgroups}
                            handleChange={this.handleChange}
                            handleFilterChange={this.handleFilterChange}
                            resetfilterValueIds={this.resetfilterValueIds}
                        />
                        </Row>
                        <Row>
                           <LocationDetail {...this.state}/>
                        </Row>
                    </Col>
                    <Col lg={9} sm={12} md={13}>
                        <Organisation {...this.state.data} />
                        <Row>
                            <OrganisationTable
                                filterBy={filterBy}
                                filterValueId={filterValueId}
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