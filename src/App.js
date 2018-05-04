import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to enjoyable-ui</h1>
        </header>
        <p className="title">Button按钮</p>
        <p className="App-intro">
          <Button type="primary"><span>PRIMARY</span></Button>
          <Button type="default"><span>DEFAULT</span></Button>
          <Button type="dashed"><span>DASHED</span></Button>
          <Button type="danger"><span>DANGER</span></Button>
          <Button type="disabled"><span>DISABLED</span></Button>
        </p>

      </div>
    );
  }
}

export default App;
