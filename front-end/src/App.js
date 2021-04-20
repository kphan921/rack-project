import React from "react";
import "./App.css";
import { Redirect, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import NotFound from './components/NotFound.js'

class App extends React.Component {
  state = {
    cameras: [],
    lens: []
  };

  componentDidMount() {
    fetch("http://localhost:9393/tasks")
    .then(res => res.json())
    .then(json => this.setState({cameras: json.cameras, lens: json.lens }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
