import React, { Component , createContext} from 'react';

// a secondary Context for authentication
// makes sense to have different Contexts for global state that will be used for different reasons or different sets of components
export const AuthContext = createContext();

class AuthContextProvider extends Component {

    state={
        isAuthenticated: false
    };

    toggleAuth = () =>{
        this.setState({isAuthenticated: ! this.state.isAuthenticated});
    }
    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }

}

export default AuthContextProvider;
