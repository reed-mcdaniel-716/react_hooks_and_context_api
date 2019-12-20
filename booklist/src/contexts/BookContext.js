import React, { createContext, useState, useReducer, useEffect } from 'react';
import uuid from 'uuid/v1';
import {bookReducer} from '../reducers/bookReducer.js';
// creating the Context
export const BookContext = createContext();

// creating the Context Provider as a functional component

// Example without Reducers
/*const BookContextProvider = (props) => {
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

};*/

const BookContextProvider = (props) => {
    // useReducer has 3 parameters:
        // 1. our bookReducer
        // 2. an initial state for our property, in this case books
        // 3. a function and the default initial value is set to whatever is returned by the function
    // you may use either 2 or 3 (using both defaults to 3?)
    // our books data and dispatch function returned from useReducer
    const starterBooks = [
        {title: "Giovanni's Room", author: "James Baldwin", id: 1},
        {title: "Native Son", author: "Richard Wright", id: 2},
        {title: "Things Fall Apart", author: "Chinua Achebe", id: 3}
    ];
    const [books, dispatch] = useReducer(bookReducer, [], () => {
            const localData = localStorage.getItem('books');
            return localData ? JSON.parse(localData) : starterBooks;
        }
    );

    // will use the useEffect hook to save the books to Local Storage in the browser

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);
    return(
        <BookContext.Provider value={{books:books, dispatch: dispatch}}>
            {props.children}
        </BookContext.Provider>
    );

};

export default BookContextProvider;
