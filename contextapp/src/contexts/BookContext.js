import React, { createContext, useState } from 'react';

// This is an example of a Context created with a functional component
// This context will store data about the books in our list

export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Giovanni's Room", id: 1},
        {title: "Native Son", id: 2},
        {title: "Things Fall Apart", id: 3},
        {title: "I Know Why the Caged Bird Sings", id: 4}
    ]);
    return (
        <BookContext.Provider value={{books:books}}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;
