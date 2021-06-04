import React, { Component } from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import Card from '../components/Card';

class Home extends Component {
    state = {
        picture: "",
        name: "",
        id: 0,
        location: "",
        email: "",
        phone: "",
        cell: ""
    }
    componentDidMount() {
        this.getAllEmployees()
    }

    getAllEmployees = () => {
        API.getRandomUsers()
            .then(res =>
                res.data.results.map(employee => <Card key={employee}>
                    {this.setState({
                        picture: employee.picture.large,
                        name: employee.name.first + ' ' + employee.name.last,
                        id: employee.id.value,
                        location: employee.location.city + ', ' + employee.location.state,
                        email: employee.email,
                        phone: employee.phone,
                        cell: employee.cell
                    })}
                </Card>)
            )
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                {this.getAllEmployees()}
            </Container>
        )
    }
}

export default Home;

