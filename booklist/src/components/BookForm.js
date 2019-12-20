import React, {useState, useContext} from 'react';
import { BookContext } from '../contexts/BookContext.js';

// Example without reducers

/*const BookForm = () => {
    // using addBook funtion of BookContext
    const {addBook} = useContext(BookContext);
    // adding state properties for the new book's title and author
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    // funtion for handling the submission of the form

    const handleSubmit= (e) => {
        // prevents default form submission behavior of refreshing the page
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title}
                onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Book Author" value={author}
                onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add Book" />
        </form>
    );
};*/

const BookForm = () => {
    // using addBook funtion of BookContext
    const {dispatch} = useContext(BookContext);
    // adding state properties for the new book's title and author
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    // funtion for handling the submission of the form

    const handleSubmit= (e) => {
        // prevents default form submission behavior of refreshing the page
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title: title, author: author}});
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title}
                onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Book Author" value={author}
                onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add Book" />
        </form>
    );
};

export default BookForm;
