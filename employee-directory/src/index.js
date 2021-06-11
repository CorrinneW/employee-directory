import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

var ghpages = require('gh-pages')
ghpages.publish('src', function(err) {});

ReactDOM.render(<App />, document.getElementById('root'));