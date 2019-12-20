import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.js';
import { AuthContext } from '../contexts/AuthContext.js';

// Example using a class component
/*class Navbar extends Component {

    // this method of utilizing the Context is good for functional and class components
    // can also consume multiple Contexts this way
    // note, we want the ThemeContext not the ThemeContextProvider
    render() {
        // dummy application just to have something
        return (
            // This wrapper gives access to the Context's value property and the data or functions is contains
            // nested Consumers to use multiple contexts
            //render JSX as function which takes in a context and returns JSX
            <AuthContext.Consumer>
                {(authContext) => (
                    <ThemeContext.Consumer>
                        {(themeContext) => {
                            // now have access to all the context properties from both contexts
                            const {isAuthenticated, toggleAuth} = authContext;
                            const {isLightTheme, light, dark} = themeContext;
                            //assign theme based on isLightTheme boolean
                            const theme = isLightTheme ? light : dark;
                            return(
                                <nav style={{background: theme.ui, text: theme.syntax}}>
                                    <h1>Context App</h1>
                                    <div onClick={toggleAuth}> {isAuthenticated ? 'Logged in' : 'Logged out'}</div>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                </nav>
                            )
                        }}
                    </ThemeContext.Consumer>)
                }
            </AuthContext.Consumer>
        );
    }

}*/

// Example using a cleaner functional component

const Navbar = ({}) => {
    // accessing information from both contexts
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    // setting theme based in isLightTheme boolean
    const theme = isLightTheme ? light : dark;
    return(
        <nav style={{background: theme.ui, text: theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}> {isAuthenticated ? 'Logged in' : 'Logged out'}</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
