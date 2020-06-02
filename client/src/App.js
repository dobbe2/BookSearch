import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.js"
import Body from "./components/Body/Body.js";
import BookSearch from "./components/BookSearch/BookSearch.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BookSearch />
      </div>
    );
  }
}

export default App;
