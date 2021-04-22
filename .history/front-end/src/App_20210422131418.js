import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import Cameras from "./containers/Cameras.js";
import Lens from "./containers/Lens.js";
import NotFound from "./components/NotFound.js";
import VaultLogo from "./images/safe.png";
import Kits from "./containers/Kits.js";
import { Button } from "@material-ui/core";

class App extends React.Component {
  state = {
    cameras: [],
    lens: [],
    kits: [],
    model: "",
    brand: "",
    image: "",
    focal_length: "",
    aperture: "",
    camera_id: 1,
    len_id: 1,
    name: "",
  };

  componentDidMount() {
    fetch("http://localhost:9393/gears/")
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          cameras: json.cameras,
          lens: json.lens,
          kits: json.kits,
        })
      );
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSelectCam = (e) => {
    console.log(e.target.value)
    this.setState({
      camera_id: e.target.value,
    });
  }

  handleSelectLen = (e) => {
    console.log(e.target.value)
    this.setState({
      len_id: e.target.value,
    });
  }

  handleAddCamera = (e) => {
    e.preventDefault();
    e.target.reset();
    let reqPackage = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        model: this.state.model,
        image: this.state.image,
        brand: this.state.brand,
        usage: 0,
      }),
    };

    fetch("http://localhost:9393/cameras/", reqPackage)
      .then((res) => res.json())
      .then((camera) => {
        this.setState({
          cameras: [...this.state.cameras, camera],
        });
      });
  };

  handleDeleteCamera = (deleteCamera) => {
    fetch("http://localhost:9393/cameras/" + deleteCamera.id, {
      method: "DELETE",
    });

    this.setState({
      cameras: this.state.cameras.filter((camera) => camera !== deleteCamera),
    });
  };

  handleCameraUsage = (camera) => {
    let updateCamera = { usage: camera.usage + 1 };
    let reqPackage = {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(updateCamera),
    };

    fetch(`http://localhost:9393/cameras/${camera.id}`, reqPackage)
      .then((res) => res.json())
      .then((updateCamera) => {
        this.setState({
          cameras: [
            ...this.state.cameras.map((camera) =>
              Number(camera.id) === Number(updateCamera.id)
                ? updateCamera
                : camera
            ),
          ],
        });
      });
  };

  handleAddLen = (e) => {
    e.preventDefault();
    e.target.reset();
    let reqPackage = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        image: this.state.image,
        brand: this.state.brand,
        focal_length: this.state.focal_length,
        aperture: this.state.aperture,
        usage: 0,
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

  handleLenUsage = (len) => {
    let updateLen = { usage: len.usage + 1 };
    let reqPackage = {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(updateLen),
    };

    fetch(`http://localhost:9393/lens/${len.id}`, reqPackage)
      .then((res) => res.json())
      .then((updateLen) => {
        console.log(updateLen);
        this.setState({
          lens: [
            ...this.state.lens.map((len) =>
              Number(len.id) === Number(updateLen.id) ? updateLen : len
            ),
          ],
        });
      });
  };

  handleDeleteLen = (deleteLen) => {
    fetch("http://localhost:9393/lens/" + deleteLen.id, {
      method: "DELETE",
    });

    this.setState({
      lens: this.state.lens.filter((len) => len !== deleteLen),
    });
  };

  handleAddKit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log("hi")
    let reqPackage = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        camera_id: this.state.camera_id,
        len_id: this.state.len_id,
      }),
    };

    fetch("http://localhost:9393/kits/", reqPackage)
      .then((res) => res.json())
      .then((kit) => {
        console.log(kit)
        this.setState({
          kits: [...this.state.kits, kit],
        });
      });
  };

  handleDeleteKit = (deleteKit) => {
    fetch("http://localhost:9393/kits/" + deleteKit.id, {
      method: "DELETE",
    });

    this.setState({
      kits: this.state.kits.filter((kit) => kit !== deleteKit),
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
          <Button id="My_Kits" component={Link} to="/kits">
            My Kits
          </Button>
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
                    handleCameraUsage={this.handleCameraUsage}
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
                    handleLenUsage={this.handleLenUsage}
                    handleDeleteLen={this.handleDeleteLen}
                  />
                );
              }}
            />
            <Route
              exact
              path="/kits"
              render={() => {
                return (
                  <Kits
                    cameras={this.state.cameras}
                    lens={this.state.lens}
                    kits={this.state.kits}
                    handleSelectCam={this.handleSelectCam}
                    handleSelectLen={this.handleSelectLen}
                    handleAddKit={this.handleAddKit}
                    handleChange={this.handleChange}
                    handleDeleteKit={this.handleDeleteKit}
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
