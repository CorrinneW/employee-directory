import React from "react";
import "./style.css";
import SearchFilter from '../SearchFilter';

function SearchForm(props) {

    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor='name'>Search by Employee Name:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="name"
                    list="names"
                    type="text"
                    className="form-control"
                    placeholder="Enter an employee name"
                    id="name"
                />
                <SearchFilter onClick={props.handleFilter} locations={props.locations}/>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm