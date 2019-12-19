import React from 'react';
import './index.css';
import Navbar from './components/Navbar.js';
import Booklist from './components/Booklist.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Booklist/>
    </div>
  );
}

export default App;
