import React from 'react';
import './App.css';
import Calculate from './Calculate';
import './bootstrap/bootstrap.min.css';
import Settings from './Settings';
import {ThemeContext, themes} from './ThemeContext';

type themeProps = {
  changeTheme: string
}

type themeState = {
  theme: any
}

class App extends React.Component<themeProps, themeState> {
  toggleTheme: () => void;
  constructor(props: themeProps | Readonly<themeProps>) {
    super(props);
    this.state = {
      theme: themes,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
  
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="container">
          <Calculate />
            <Settings onClick={this.props.changeTheme}/>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
