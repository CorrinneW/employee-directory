import React, { Component } from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';

class Home extends Component {
    state = {
        results: [],
        search: "",
        names: []
    }
    componentDidMount() {
        this.getAllEmployees()
    }

    getAllEmployees = () => {
        API.getRandomUsers()
            .then(res => {
                const results = res.data.results;
                this.setState({ results, names: results.map(employee => employee.name.first + ' ' + employee.name.last) });
            }
            )
            .catch(err => console.log(err))
    }

    handleInputChange = (event) => { this.setState({ search: event.target.value })}

    handleFormSubmit = event => {
        event.preventDefault();
        const searchResults = this.state.results.filter(employee => 
            employee.name.first.toLowerCase().includes(this.state.search.toLowerCase())
            || employee.name.last.toLowerCase().includes(this.state.search.toLowerCase())
        )
        this.setState({results: searchResults})
    }
    

    render() {
        return (
            <Container>
                <SearchForm 
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                search={this.state.search}
                />

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

