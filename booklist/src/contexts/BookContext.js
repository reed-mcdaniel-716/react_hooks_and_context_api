import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';
// creating the Context
export const BookContext = createContext();

// creating the Context Provider as a functional component
const BookContextProvider = (props) => {
    // our state data
    const [books, setBooks] = useState([
        {title: "Giovanni's Room", author: "James Baldwin", id: 1},
        {title: "Native Son", author: "Richard Wright", id: 2},
        {title: "Things Fall Apart", author: "Chinua Achebe", id: 3}
    ]);

    // function to add books to the list
    const addBook= (title, author) => {
        setBooks([...books, {title: title, author: author, id: uuid()}]);
    };

    // function to remove books from list
    const removeBook= (id) => {
        // filter is true to keep, false to discard
        setBooks(books.filter((book) => book.id !== id));
    };

    return(
        <BookContext.Provider value={{books:books, addBook: addBook, removeBook: removeBook}}>
            {props.children}
        </BookContext.Provider>
    );

};

export default BookContextProvider;
