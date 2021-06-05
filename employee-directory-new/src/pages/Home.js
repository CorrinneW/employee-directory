import axios from 'axios';
import React, { Component } from 'react';
import Card from '../components/Card'

class Home extends Component {
    //template state
    constructor() {
        super();
        this.state = {
            picture: "",
            firstname: "",
            lastname: "",
            id: "",
            city: "",
            state: "",
            email: "",
            phone: "",
            cell: ""
        }
    }
    //populate with random employees
    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=10")
            .then(res => res.data.results)
            .then(res => res.map((val) => {
                return (
                    this.setState({
                        picture: val.picture.large,
                        firstname: val.name.first,
                        lastname: val.name.last,
                        id: val.id.value,
                        city: val.location.city,
                        state: val.location.state,
                        email: val.email,
                        phone: val.phone,
                        cell: val.cell
                    })
                )
            })
            )
    }
    //render data
    render() {
        return (
            <div className="container">
                <Card 
                    picture={this.state.picture}
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    id={this.state.id}
                    city={this.state.city}
                    state={this.state.state}
                    email={this.state.email}
                    phone={this.state.phone}
                    cell={this.state.cell}
                />
            </div>
        )
    }
}

export default Home;