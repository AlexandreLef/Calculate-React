import React from 'react';
//import './Keyboard.css';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import OtherButton from './OtherButton';

type KeyboardProps = {
    onButtonClicked: Function,
}

class Keyboard extends React.Component<KeyboardProps> {


    sendNumber() {
        return this.props.onButtonClicked();
    }

    render() {
        return (
            <div id="keyboard">
                <div className="row">
                    <OtherButton value='AC'/>
                    <OperatorButton value='('/>
                    <OperatorButton value=')'/>
                    <OperatorButton value='÷'/>
                </div>
                <div className="row">
                    <NumberButton value={1} onClick={this.onButtonClicked.bind(this)} />
                    <NumberButton value={2} onClick={this.onButtonClicked.bind(this)} />
                    <NumberButton value={3} onClick={this.onButtonClicked.bind(this)} />
                    <OperatorButton value='x'/>
                </div>
                <div className="row">
                    <NumberButton value={4} onClick={this.onButtonClicked.bind(this)} />
                    <NumberButton value={5} onClick={this.onButtonClicked.bind(this)} />
                    <NumberButton value={6} onClick={this.onButtonClicked.bind(this)} />
                    <OperatorButton value='-'/>
                    
                </div>
                <div className="row">
                    <NumberButton value={7} onClick={this.onButtonClicked.bind(this)} />
                    <NumberButton value={8} onClick={this.onButtonClicked.bind(this)} />
                    <NumberButton value={9} onClick={this.onButtonClicked.bind(this)} />
                    <OperatorButton value='+'/>
                    
                </div>
                <div className="row last-row">
                    <OtherButton value='.'/>
                    <NumberButton value={0} onClick={this.onButtonClicked.bind(this)} />
                    <OperatorButton value='='/>
                </div>
            </div>
        )
    }
}

export default Keyboard;