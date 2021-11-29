import React from 'react';

type OtherProps = {
    value: string,
    onClick: Function
}

class OtherButton extends React.Component<OtherProps> {

    sendOther() {
        return this.props.onClick(this.props.value);       
    }

    render() {

        if (this.props.value === "AC") {
            return (
                <div className="col-3 p-1">
                    <button className="btn btn-dark text-warning col-12" onClick={this.sendOther.bind(this)}>{this.props.value}</button>
                </div>
                
            )
        } else if (this.props.value === ".") {
            return (
                <div className="col-3 p-1">
                    <button className="btn btn-dark col-12" onClick={this.sendOther.bind(this)}>{this.props.value}</button>
                </div>
            )
        }
    }
}

export default OtherButton;