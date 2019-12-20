import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext.js';
import BookDetails from './BookDetails.js';

const BookList = () => {
    const {books} = useContext(BookContext);
    // want to return JSX depending on if there are books in the list
    return (books.length ? (
        <div className='book-list'>
            <ul>
                {books.map((book) => {
                    return (<BookDetails book={book} key={book.id}/>)
                })}
            </ul>
        </div>
    ) :
    (
        <div className='empty'> No Books to Read. Enjoy your free time!</div>
    ));
};

export default BookList;
