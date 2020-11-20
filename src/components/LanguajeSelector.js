import React from 'react';
import LanguajeContext from '../contexts/LanguajeContext';

class LanguajeSelector extends React.Component {
    static contextType = LanguajeContext;

    render() { 
        return ( 
            <div>
                Seleccione un lenguaje 
                <i className="flag us" onClick={ () => this.context.onLanguajeChange("english") }/>
                <i className="flag mx" onClick={ () => this.context.onLanguajeChange("spanish") }/>
            </div>
         );
    }
}
 
export default LanguajeSelector;