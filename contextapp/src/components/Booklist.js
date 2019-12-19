import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.js';

class Booklist extends Component {
    // another way of consuming Context
    // only works for class components using only a single Context

    /* what this does is look up the component tree for the first time it finds a provider for the ThemeContext Context
        it can then use the data in that provider in the value property
        what is does is take the value property data and attach it to a context property within the component
        this can be accessed via this.context
    */

    static contextType= ThemeContext;
    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>Giovanni's Room</li>
                    <li style={{background: theme.ui}}>Native Son</li>
                    <li style={{background: theme.ui}}>Things Fall Apart</li>
                </ul>
            </div>
        );
    }

}

export default Booklist;
