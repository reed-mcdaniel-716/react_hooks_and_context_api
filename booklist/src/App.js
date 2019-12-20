import React from 'react';
import BookContextProvider from './contexts/BookContext.js';
import Navbar from './components/Navbar.js';
import BookList from './components/BookList.js';
import BookForm from './components/BookForm.js';

function App() {
  return (
    <div className="App">
        <BookContextProvider>
            <Navbar/>
            <BookList/>
            <BookForm/>
        </BookContextProvider>
    </div>
  );
}

export default App;
