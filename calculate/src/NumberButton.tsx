import React from 'react';

type NumberProps = {
    value: number,
    onClick: Function
}

class NumberButton extends React.Component<NumberProps> {

    sendNumber() {
        return this.props.onClick(this.props.value);
    }

    render() {
        return (
            <button className="btn btn-dark col-3" value="{this.props.value}" onClick={this.sendNumber.bind(this)}>{this.props.value}</button>
        )
    }
}

export default NumberButton;