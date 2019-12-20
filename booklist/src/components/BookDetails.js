import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext.js';

// takes in destructured props as argument
const BookDetails = ({book}) => {
    // using BookContext's removeBook function
    const {removeBook} = useContext(BookContext);
    return (
        <li onClick={() => removeBook(book.id)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
};

export default BookDetails;
