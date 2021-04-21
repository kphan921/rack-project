import React from "react";
import Camera from "../components/Camera.js";

const Cameras = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddCamera} className="form">
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Camera Model"
          name="model"
          type="text"
        ></input>
        <input name="submit" type="submit" value="Add Camera"></input>
      </form>
      {props.cameras.map((camera) => (
        <Camera
          key={camera.id}
          camera={camera}
          handleDeleteCamera={props.handleDeleteCamera}
        />
      ))}
    </div>
  );
};

export default Cameras;
