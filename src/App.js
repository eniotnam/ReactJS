import React, {Component} from 'react';
import './css/App.css';

import Word ,{WordToFind} from './Components/Word';
import Letter from './Components/Letters';
import Score from './Components/Score';

class App extends Component {
    
    
    render(){

        return ( 
         <div className="App">
             <Score score={0} />
           
            <Word word={WordToFind}/>
           
            <Letter />
            </div>
        )
    }

}


export default App;
