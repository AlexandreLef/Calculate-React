import React from 'react';
import './Calculate.css';
import Keyboard from './Keyboard';
import Screen from './Screen';
import Header from './Header';



class Calculate extends React.Component {

    sendNumber(x: number) {
        return console.log(x);
    }

    sendString(x: string) {
        return console.log(x);
    }

    render() {
        return (
            <div className="calculate">
                <div className="header"><Header /></div>
                <div className="container">
                    <div className="row my-2"><Screen /></div>
                    <div className="keyboard my-2"><Keyboard 
                    onNumberButtonClicked={this.sendNumber.bind(this)}
                    onOperatorButtonClicked={this.sendString.bind(this)}
                    onOtherButtonClicked={this.sendString.bind(this)}
                    /></div>
                </div>
            </div>
        )
    }
}

export default Calculate;