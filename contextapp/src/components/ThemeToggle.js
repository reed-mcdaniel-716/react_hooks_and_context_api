import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.js';

class ThemeToggle extends Component {
    // this is a component which shows how Context data can be changed
    // another way of consuming Context
    // only works for class components using only a single Context
    
    /* what this does is look up the component tree for the first time it finds a provider for the ThemeContext Context
        it can then use the data in that provider in the value property
        what is does is take the value property data and attach it to a context property within the component
        this can be accessed via this.context
    */
    static contextType = ThemeContext;
    render() {
        const { toggleTheme }= this.context;
        return (
            <button onClick={toggleTheme}>Toggle The Theme</button>
        );
    }

}

export default ThemeToggle;
