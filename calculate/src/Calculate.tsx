import React from 'react';
import './Calculate.css';
import Keyboard from './Keyboard';
import Screen from './Screen';
import Header from './Header';

class Calculate extends React.Component {

    sendNumber(x: number) {
        return console.log(x);
    }

    render() {
        return (
            <div className="calculate">
                <div className="header"><Header /></div>
                <div className="container">
                    <div className="row"><Screen /></div>
                    <div className="row"><Keyboard onButtonClicked={this.sendNumber.bind(this)}/></div>
                </div>
            </div>
        )
    }
}

export default Calculate;