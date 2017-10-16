import React, { Component } from 'react';
import Messages from './components/Messages'
import Toolbar from './components/Toolbar'
import data from './data/messages'
import './App.css';

// shared module to share state 'import {MessageService}'


// set state here & keep at highest point of app
// props are set by the parent and do not change
// use state for data that is going to change

// state is an object that determines how that component renders and behaves

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      toolbar: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

// make function to change state
// pass down to toolbar rendering
//

  handleChange(e) {
    this.setState({})
  }

  render() {
    return (
      <div>
      <Toolbar messages={data} update={msgs => {
        this.setState({...this.state, messages: msgs, toolbar: msgs})
      }}/>
      <Messages messages={data} update={msgs => {
        this.setState({...this.state, messages: msgs})
      }}/>
      </div>
    );
  }
}

export default App;
