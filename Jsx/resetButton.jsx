import React from 'react';
import App from './itemsList.jsx'
let read = require('json-loader!../data/data.json');

/** @namespace React.Component */
class Reset extends React.Component{
    render(){
        return(
            <li className="mdl-menu__item" onClick={() => resetItems()}>Reset</li>
        );
    }
}

export default Reset;