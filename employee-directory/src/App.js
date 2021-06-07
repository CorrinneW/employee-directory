import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
    return(
        <Router>
            <div>
                <Header />
                <Wrapper>
                    <Route path='/' component={Home} />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    )
}

export default App;