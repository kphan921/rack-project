import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import Cameras from "./containers/Cameras.js";
import Lens from "./containers/Lens.js";
import NotFound from "./components/NotFound.js";
import VaultLogo from "./images/safe.png";

class App extends React.Component {
  state = {
    cameras: [],
    lens: [],
    model: "",
    focal_length: "",
    aperture: "",
  };

  componentDidMount() {
    fetch("http://localhost:9393/gears/")
      .then((res) => res.json())
      // .then(json=> console.log(json))
      .then((json) =>
        this.setState({ cameras: json.cameras, lens: json.lens })
      );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddCamera = (e) => {
    e.preventDefault();
    e.target.reset();
    let reqPackage = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ model: this.state.model }),
    };

    fetch("http://localhost:9393/cameras/", reqPackage)
      .then((res) => res.json())
      .then((camera) => {
        this.setState({
          cameras: [...this.state.cameras, camera],
        });
      });
  };

  handleDeleteCamera = (e, deleteCamera) => {
    fetch("http://localhost:9393/cameras/" + deleteCamera.id, {
      method: "DELETE",
    });

    this.setState({
      cameras: this.state.cameras.filter((camera) => camera !== deleteCamera),
    });
  };

  handleAddLen = (e) => {
    e.preventDefault();
    e.target.reset();
    let reqPackage = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        focal_length: this.state.focal_length,
        aperture: this.state.aperture,
      }),
    };

    fetch("http://localhost:9393/lens/", reqPackage)
      .then((res) => res.json())
      .then((len) => {
        this.setState({
          lens: [...this.state.lens, len],
        });
      });
  };

  handleDeleteLen = (e, deleteLen) => {
    fetch("http://localhost:9393/lens/" + deleteLen.id, {
      method: "DELETE",
    });

    this.setState({
      lens: this.state.lens.filter((len) => len !== deleteLen),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="Main-Logo" to="/">
            Gear Vault
            <img src={VaultLogo} alt="vault img" id="Vault"></img>
          </Link>
          <button className="My_Kits">My Kits</button>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/cameras"
              render={() => {
                return (
                  <Cameras
                    cameras={this.state.cameras}
                    handleChange={this.handleChange}
                    handleAddCamera={this.handleAddCamera}
                    handleDeleteCamera={this.handleDeleteCamera}
                  />
                );
              }}
            />
            <Route
              exact
              path="/lens"
              render={() => {
                return (
                  <Lens
                    lens={this.state.lens}
                    handleChange={this.handleChange}
                    handleAddLen={this.handleAddLen}
                    handleDeleteLen={this.handleDeleteLen}
                  />
                );
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
