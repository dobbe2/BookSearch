import React from "react";
import "./style.css";

const BookCard = (props) => {
    return(
        <div className="card-contaier">
          <img className="image" src={props.image} alt="" />
          <div className="desc"></div>
            <h2 className="title">{props.title}</h2>
            <h3 className="author">{props.author}</h3>
            <h4 className="published">Published {props.published}</h4>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default BookCard;