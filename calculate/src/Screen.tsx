import React from 'react';

type ScreenProps = {
    value: string,
}

class Screen extends React.Component<ScreenProps> {

    render() {
        
        return (
            <input className="bg-white col-12 rounded form-control-lg" id="screen" value={this.props.value} disabled></input>
        )
    }
}

export default Screen;