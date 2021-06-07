import React, { Component } from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

class Home extends Component {
    state = {
        results: [],
        search: "",
        names: ["Harold"]
    }
    componentDidMount() {
        this.getAllEmployees()
    }

    getAllEmployees = () => {
        API.getRandomUsers()
            .then(res => {
                const results = res.data.results;
                this.setState({ results, names: results.map(employee => employee.name.first + ' ' + employee.name.last) })
            }
            )
            .catch(err => console.log(err))
    }

    filterEmployees = (e) => {
        this.setState({
            search: e.target.value
        }, () => {
            const filterEmployees = this.state.results.filter(employee => employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()))
            console.log(filterEmployees)
        })
    }

    handleFormSubmit = () => {
        console.log('Hello')
    }

    render() {
        // console.log(this.state.names)
        return (
            <Container>
                <SearchForm filterEmployees={this.filterEmployees} search={this.state.search} />
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
                        handleFormSubmit={this.handleFormSubmit}
                    />
                )
                )}
            </Container>
        )
    }
}

export default Home;

