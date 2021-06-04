import React from "react";
import "./style.css";
import Card from '../Card';
import Container from '../Container';

function SearchResults(props) {
  return (
    <Container>
      <ul className="list-group search-results">
        <li>
          {props.results.map(result => (
            <Card key={result} />
          ))}
        </li>
      </ul>
    </Container>
  );
}

export default SearchResults;
