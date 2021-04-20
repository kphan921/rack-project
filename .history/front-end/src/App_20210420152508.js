import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Cameras from "./containers/Cameras.js";
import Lens from "./containers/Lens.js";
import NotFound from "./components/NotFound.js";
import VaultLogo from "./images/safe.png"

class App extends React.Component {
  state = {
    cameras: [],
    lens: [],
  };

  componentDidMount() {
    fetch("http://localhost:9393/gears/")
      .then((res) => res.json())
      // .then(json=> console.log(json))
      .then((json) =>
        this.setState({ cameras: json.cameras, lens: json.lens })
      );
  }

  render() {
    console.log(this.state.cameras);
    return (
      <div className="App">
        <header className="App-header">
          <h2>Gear Vault</h2>
          <img src={VaultLogo} className="vault"></img>
          <button className="My_Kits">My Kits</button>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/cameras"
              render={() => {
                return <Cameras cameras={this.state.cameras} />;
              }}
            />
            <Route
              exact
              path="/lens"
              render={() => {
                return <Lens lens={this.state.lens} />;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
