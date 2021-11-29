import React from 'react';

type OtherProps = {
    value: string
}

class OtherButton extends React.Component<OtherProps> {


    render() {

        if (this.props.value == "AC") {
            return (
                <button className="btn btn-dark text-warning col-3" value="ac">{this.props.value}</button>
            )
        } else if (this.props.value == ".") {
            return (
                <button className="btn btn-dark col-3" value="/">{this.props.value}</button>
            )
        }
    }
}

export default OtherButton;