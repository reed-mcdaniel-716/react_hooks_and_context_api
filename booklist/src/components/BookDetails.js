import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext.js';

// takes in destructured props as argument
// Example without reducers
/*const BookDetails = ({book}) => {
    // using BookContext's removeBook function
    const {removeBook} = useContext(BookContext);
    return (
        <li onClick={() => removeBook(book.id)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
};*/

const BookDetails = ({book}) => {
    // using BookContext's removeBook function
    const {dispatch} = useContext(BookContext);
    return (
        <li onClick={() => dispatch({type:'REMOVE_BOOK', id: book.id})}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
};

export default BookDetails;
