import React from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import OtherButton from './OtherButton';

type KeyboardProps = {
    onNumberButtonClicked: Function,
    onOperatorButtonClicked: Function,
    onOtherButtonClicked: Function,
}

class Keyboard extends React.Component<KeyboardProps> {


    sendNumber() {
        return this.props.onNumberButtonClicked();
    }

    sendOperator() {
        return this.props.onOperatorButtonClicked();
    }

    sendOther() {
        return this.props.onOtherButtonClicked();
    }

    render() {
        return (
            <div id="keyboard">
                <div className="row">
                    <OtherButton value='AC' onClick={this.props.onOtherButtonClicked.bind(this)} />
                    <OperatorButton value='(' onClick={this.props.onOperatorButtonClicked.bind(this)} />
                    <OperatorButton value=')' onClick={this.props.onOperatorButtonClicked.bind(this)} />
                    <OperatorButton value='÷' onClick={this.props.onOperatorButtonClicked.bind(this)} />
                </div>
                <div className="row">
                    <NumberButton value={1} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <NumberButton value={2} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <NumberButton value={3} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <OperatorButton value='x' onClick={this.props.onOperatorButtonClicked.bind(this)} />
                </div>
                <div className="row">
                    <NumberButton value={4} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <NumberButton value={5} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <NumberButton value={6} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <OperatorButton value='-' onClick={this.props.onOperatorButtonClicked.bind(this)} />
                    
                </div>
                <div className="row">
                    <NumberButton value={7} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <NumberButton value={8} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <NumberButton value={9} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <OperatorButton value='+' onClick={this.props.onOperatorButtonClicked.bind(this)} />
                    
                </div>
                <div className="row">
                    <OtherButton value='.' onClick={this.props.onOtherButtonClicked.bind(this)} />
                    <NumberButton value={0} onClick={this.props.onNumberButtonClicked.bind(this)} />
                    <OperatorButton value='=' onClick={this.props.onOperatorButtonClicked.bind(this)} />
                </div>
            </div>
        )
    }
}

export default Keyboard;