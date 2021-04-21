import React from "react";
import Camera from "../components/Camera.js";

const Cameras = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddCamera} className="form">
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Camera Brand"
          name="brand"
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Camera Model"
          name="model"
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Camera image link"
          name="image"
          type="text"
        ></input>
        <input name="submit" type="submit" value="Add Camera"></input>
      </form>
      <div className="container">
      {props.cameras.map((camera) => (
        <Camera
          key={camera.id}
          camera={camera}
          handleCameraUsage={props.handleCameraUsage}
          handleDeleteCamera={props.handleDeleteCamera}
        />
      ))}
      </div>
    </div>
  );
};

export default Cameras;
