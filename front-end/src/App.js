import React from "react";
import "./App.css";
import { Redirect, Switch, Route } from 'react-router-dom'
import NotFound from './components/NotFound.js'

class App extends React.Component {
  state = {
    brands: [],
  };

  componentDidMount() {
    console.log('Hi')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            app
          </h2>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
