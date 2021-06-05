import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wrapper from './components/Wrapper';

function App() {
    return(
        <Router>
            <div className='container'>
                <Wrapper>
                    <Route path='/' component={Home} />
                </Wrapper>
            </div>
        </Router>
    )
}

export default App;