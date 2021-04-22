import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import camera_logo from "../images/camera.gif";
import lens_logo from "../images/lens.gif";
import "../App.css";

const Home = () => {
  return (
    <div>
      <Button component={Link} to="/cameras">
        <img src={camera_logo} alt="camera"></img>
      </Button>
      <div></div>
      <Button component={Link} to="/lens">
        <img src={lens_logo} alt="lens"></img>
      </Button>
    </div>
  );
};

export default Home;
