import React from "react";
import TitleImage from "../../assets/GoogleBooksSearch.jpg";
import "./style.css";

const Header = () => {
    return(
        <header>
        <img id="header_image" src={TitleImage} />
        {/* <h1>Google Books Search</h1>
        <i className="fas fa-book fa-3x"></i> */}
        </header>
    )
}

export default Header;