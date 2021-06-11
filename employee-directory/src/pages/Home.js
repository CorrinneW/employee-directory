import React, { Component } from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';
import SearchFilter from '../components/SearchFilter';
import SortResults from '../components/SortResults';

class Home extends Component {
    state = {
        results: [],
        search: "",
        names: [],
        locations: [],
    };

    componentDidMount() {
        this.getAllEmployees()
    };

    getAllEmployees = () => {
        API.getRandomUsers()
            .then(res => {
                const results = res.data.results
                //get only unique locations for state.locations
                const allLocations = results.map(employee => employee.location.state)
                const uniqueLocations = [...new Set(allLocations)]
                const sortedLocations = uniqueLocations.sort()
                this.setState({
                    results,
                    names: results.map(employee => employee.name.first + ' ' + employee.name.last),
                    locations: sortedLocations
                })
            })
            .catch(err => console.log(err))
    };

    //search functions
    handleInputChange = (event) => { this.setState({ search: event.target.value }) };

    handleFormSubmit = event => {
        event.preventDefault();
        const searchResults = this.state.results.filter(employee =>
            employee.name.first.toLowerCase().includes(this.state.search.toLowerCase())
            || employee.name.last.toLowerCase().includes(this.state.search.toLowerCase())
        )
        this.setState({ results: searchResults })
    };

    //filter function
    handleFilter = event => {
        event.preventDefault();
        const filterResults = this.state.results.filter(employee =>
            employee.location.state === event.target.innerHTML
        );
        this.setState({ results: filterResults });
    };

    //sort function
    handleSort = event => {
        event.preventDefault();
        const sortSelection = event.target.value;

        const sortResult = this.state.results;

        if(sortSelection === "firstname") {
           sortResult.sort((a, b) => (a.name.first > b.name.first) ? 1: -1)
        } else{
            sortResult.sort((a, b) => (a.name.last > b.name.last) ? 1: -1)
        }

        this.setState({ results: sortResult })
    };


    render() {
        return (
            <Container>
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <SearchFilter handleFilter={this.handleFilter} locations={this.state.locations} />

                <SortResults handleSort={this.handleSort} results={this.state.results} />

                {this.state.results.map(employee => (
                    <Card
                        picture={employee.picture.large}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        id={employee.id.value}
                        city={employee.location.city}
                        state={employee.location.state}
                        email={employee.email}
                        phone={employee.phone}
                        cell={employee.cell}
                        names={this.state.names}
                    />
                )
                )}

            </Container>
        )
    }
}

export default Home;

