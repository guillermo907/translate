import React from 'react';
import Languajecontext from '../contexts/LanguajeContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{

    renderSubmit(languaje){
        return languaje === "english" ? "Submmit" : "Registrar cabron" ;
    }

    renderButton(color){
        return (
            <button className= {`ui button ${color}`} >
                <Languajecontext.Consumer>
                    {( { languaje } ) => this.renderSubmit(languaje)}
                </Languajecontext.Consumer>
            </button>
        );
    }

    render(){
        return(
            <ColorContext.Consumer>
                {(color) => this.renderButton(color) }       
            </ColorContext.Consumer>
        );
    }
}
// Button.contextType = Languajecontext;  Manera alternativa de accdeder al context (after the context tambien puede usarse el static context type)

export default Button; 