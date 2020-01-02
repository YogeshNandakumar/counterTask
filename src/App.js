import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div></div>
        <div>
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
