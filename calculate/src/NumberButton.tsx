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
            <div className="col-3 p-1">
                <button className="btn btn-dark col-12" onClick={this.sendNumber.bind(this)}>{this.props.value}</button>
            </div>
        )
    }
}

export default NumberButton;