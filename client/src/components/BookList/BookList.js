import React from "react";
import "./style.css";
import BookCard from "../BookCard/BookCard.js"

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                published={book.volumeInfo.publishedDate}
                                link={book.volumeInfo.infoLink}
                                />
                })
            }
        </div>
    )
}

export default BookList;