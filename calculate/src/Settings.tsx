import React from 'react';
import './Settings.css';
import {ThemeContext} from './ThemeContext';

type themeProps = {
  onClick: string
}

class Settings extends React.Component<themeProps> {

    render() {
        let theme = this.context;
        return (
            <button id="themeButton" style={{backgroundColor: theme.background}}>
                Change Theme
            </button>
        );
    }
}
Settings.contextType = ThemeContext;

export default Settings;