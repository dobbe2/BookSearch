import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar.js";

class BookSearch extends Component {
    constructor(props){
        super(props);
        //creating state as an empty array, and an updating searchField//
        this.state = {
            books: [],
            searchField: ""
        }
    }

    handleSearch = (event) => {
        //set state when we type into the input field//
        this.setState({ searchField: event.target.value})
        console.log(event.target.value)
    }


    render() {
      return (
        <div>
          <SearchBar handleSearch={this.handleSearch}/>
        </div>
      );
    }
  }
  
  export default BookSearch;