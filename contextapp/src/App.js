import React from 'react';
import './index.css';
import Navbar from './components/Navbar.js';
import Booklist from './components/Booklist.js';
import ThemeToggle from './components/ThemeToggle.js';
import ThemeContextProvider from './contexts/ThemeContext.js';
import AuthContextProvider from './contexts/AuthContext.js';
import BookContextProvider from './contexts/BookContext.js';

function App() {
    // will be using Context API to hold data about the app's theme
    // when one tag surounds another, the internal tags become props of the external tags
    // i.e. we are able to use <Navbar/> and <Booklist/> as props of <ThemeContextProvider/>

    // order of nested Context Providers doesn't matter if they're applied to the same children
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar/>
                    <BookContextProvider>
                        <Booklist/>
                    </BookContextProvider>
                    <ThemeToggle />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
