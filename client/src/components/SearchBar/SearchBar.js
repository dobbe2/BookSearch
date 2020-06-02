import React from "react";
import "./style.css";

const SearchBar = (props) => {
    return(
        <div className="search-bar">
            <form action="">
                <input onChange={props.handleSearch} type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;