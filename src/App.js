import React, { Component } from 'react';
import Messages from './components/Messages'
import data from './data/messages'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Messages messages={data} />
      </div>
    );
  }
}

export default App;
