import React from 'react';

type NumberProps = {
    value: number,
    onClick: Function
    btnColor: string
}

class NumberButton extends React.Component<NumberProps> {

    sendNumber() {
        return this.props.onClick(this.props.value);
    }

    render() {
        var classColor = this.props.btnColor;
        
        return (
            <div className="col-3 p-1">
                <button className={"btn " + classColor + " col-12"} onClick={this.sendNumber.bind(this)}>{this.props.value}</button>
            </div>
        )
    }
}

export default NumberButton;