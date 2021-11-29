import React from 'react';

type OperatorProps = {
    value: string
}

class OperatorButton extends React.Component<OperatorProps> {


    render() {

        if (this.props.value == "x") {
            return (
                <button className="btn btn-secondary col-3" value="*">{this.props.value}</button>
            )
        } else if (this.props.value == "÷") {
            return (
                <button className="btn btn-secondary col-3" value="/">{this.props.value}</button>
            )
        } else if (this.props.value == "=") {
            return (
                <button className="btn btn-warning col-6" value="{this.props.value}">{this.props.value}</button>
            )
        }
        return (
            <button className="btn btn-secondary col-3" value="{this.props.value}">{this.props.value}</button>
        )
    }
}

export default OperatorButton;