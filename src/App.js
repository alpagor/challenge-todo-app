import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import TodoPage from './TodoPage'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      
        <Route exact path="/todos" component={TodoPage} />

      </Switch>
      </div>
    );
  }
}

export default App;
