import React from 'react';
import LanguajeContext from '../contexts/LanguajeContext';

class Field extends React.Component{
    static contextType = LanguajeContext;
    
    render(){
        const text = this.context.languaje === "english" ? "Name: " : "Tu nombre hijo de tu puta madre";

        return (
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>
        );
    }
}

export default Field;