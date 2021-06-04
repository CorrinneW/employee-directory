import React from 'react';
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults'

function Home() {
    return (
        <Container>
            <SearchForm />
            <SearchResults />
        </Container>
    )
}

export default Home;