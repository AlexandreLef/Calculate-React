import React from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import OtherButton from './OtherButton';

type KeyboardProps = {
    onNumberButtonClicked: Function,
    onOperatorButtonClicked: Function,
    onOtherButtonClicked: Function,
    changeTheme?: Function,
    blackBtn?: string,
    greyBtn?: string,
}

type KeyboardState = {
    theme: boolean
    blackBtn: string
    greyBtn: string
}

class Keyboard extends React.Component<KeyboardProps, KeyboardState> {

    constructor(props: KeyboardProps) {
        super(props);
        this.state = {
            theme: false,
            blackBtn: "btn-dark",
            greyBtn:  "btn-secondary"
        }
    }

    sendNumber() {
        return this.props.onNumberButtonClicked();
    }

    sendOperator() {
        return this.props.onOperatorButtonClicked();
    }

    sendOther() {
        return this.props.onOtherButtonClicked();
    }

    changeTheme() {
        const currentState = this.state.theme;
        if (currentState === true) {
            this.setState({theme: !currentState})
            this.setState({blackBtn: "btn-dark"})
            this.setState({greyBtn: "btn-secondary"})
        } else if (currentState === false) {
            this.setState({theme: !currentState})
            this.setState({blackBtn: "btn-light"})
            this.setState({greyBtn: "btn-lightSecondary"})
        }
        return this.state.blackBtn
    }

    render() {
        return (
            <div id="keyboard">
                <div className="row">
                    <OtherButton value='theme'
                        onClick={() => {
                            this.props.onOtherButtonClicked();
                            this.changeTheme();}} 
                        btnColor={this.state.blackBtn} />
                    <OtherButton value='AC' 
                        onClick={this.props.onOtherButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <OtherButton value='Del' 
                        onClick={this.props.onOtherButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <OperatorButton value='÷' 
                        onClick={this.props.onOperatorButtonClicked.bind(this)} 
                        btnColor={this.state.greyBtn} />
                </div>
                <div className="row">
                    <NumberButton value={1} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <NumberButton value={2} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <NumberButton value={3} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <OperatorButton value='x' 
                        onClick={this.props.onOperatorButtonClicked.bind(this)} 
                        btnColor={this.state.greyBtn} />
                </div>
                <div className="row">
                    <NumberButton value={4} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <NumberButton value={5} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <NumberButton value={6} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <OperatorButton value='-' 
                        onClick={this.props.onOperatorButtonClicked.bind(this)} 
                        btnColor={this.state.greyBtn} />
                    
                </div>
                <div className="row">
                    <NumberButton value={7} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <NumberButton value={8} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <NumberButton value={9} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <OperatorButton value='+' 
                        onClick={this.props.onOperatorButtonClicked.bind(this)} 
                        btnColor={this.state.greyBtn} />
                    
                </div>
                <div className="row">
                    <OtherButton value='.' 
                        onClick={this.props.onOtherButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <NumberButton value={0} 
                        onClick={this.props.onNumberButtonClicked.bind(this)} 
                        btnColor={this.state.blackBtn} />
                    <OperatorButton value='=' 
                        onClick={this.props.onOperatorButtonClicked.bind(this)} 
                        btnColor={this.state.greyBtn} />
                </div>
            </div>
        )
    }
}

export default Keyboard;