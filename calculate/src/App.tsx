import React from 'react';
import './App.css';
import Calculate from './Calculate';
import './bootstrap/bootstrap.min.css';

class App extends React.Component {
  
  render() {
    return (
        <div className="container">
          <Calculate />
        </div>
    );
  }
}

export default App;
