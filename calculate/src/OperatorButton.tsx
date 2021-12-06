import React from 'react';

type OperatorProps = {
    value: string,
    onClick: Function
}

class OperatorButton extends React.Component<OperatorProps> {

    sendOperator() {

        switch (this.props.value) {
            case "x":
                return this.props.onClick("*");
            case "÷":
                return this.props.onClick("/");
            default:
                return this.props.onClick(this.props.value);
        }        
    }

    render() {

        if (this.props.value === "=") {
            return (
                <div className="col-6 p-1">
                    <button className="btn btn-warning col-12" onClick={this.sendOperator.bind(this)}> {this.props.value}</button>
                </div>
            )
        }
        return (
            <div className="col-3 p-1">
                <button className="btn btn-secondary col-12" onClick={this.sendOperator.bind(this)} >{this.props.value}</button>
            </div>
        )
    }
}

export default OperatorButton;