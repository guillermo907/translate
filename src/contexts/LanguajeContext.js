import React from 'react';

const Context = React.createContext('english');  //english is used as the default value

export class LanguajeStore extends React.Component {
    state = { languaje : 'english' };

    onLanguajeChange = languaje =>{
        this.setState({ languaje });
    }

    render (){
        return (
            <Context.Provider value = {{ ...this.state, onLanguajeChange: this.onLanguajeChange }} >
                { this.props.children }
            </Context.Provider>
        )
    }
}

export default Context;