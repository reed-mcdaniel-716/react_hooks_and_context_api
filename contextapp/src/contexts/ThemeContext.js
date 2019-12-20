import React , { createContext } from 'react';

// This is an example of a Context created with a class component
// context creation
export const ThemeContext = createContext();

// provider class for the theme context
class ThemeContextProvider extends React.Component {
    state={
        isLightTheme: true,
        light: {
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            syntax: '#ddd',
            ui: '#333',
            bg: '#555'
        }
    };

    // a function that allows the Context's data i.e. the state to be updated
    // toggleing isLightTheme
    toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme});
    }
    render() {
        return (
            // this is what will wrap our different components
            // will always be called ContextName.Provider
            // value will be whatever data or functions we want to "provide" to our components
            // this.props.children refers to the tags wrapped by that tag anywhere it is invoked
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
