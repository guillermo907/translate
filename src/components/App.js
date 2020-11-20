import React from 'react';
import UserCreate from './UserCreate';
import {LanguajeStore} from '../contexts/LanguajeContext';
import ColorContext from '../contexts/ColorContext';
import LanguajeSelector from '../components/LanguajeSelector';

class App extends React.Component{
    
    render (){
        return(
        <div className="ui container">
            <LanguajeStore>
                <LanguajeSelector />
                <ColorContext.Provider value="red">
                    <UserCreate />
                </ColorContext.Provider>
            </LanguajeStore>    
        </div>
        );
    }
}

export default App;