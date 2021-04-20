import React from "react";
import Camera from "../components/Camera.js";

const Cameras = (props) => {
  return (
    <div>
      <form className="form">
        <input
          onChange={(e) => props.handleChange()}
          placeholder="Camera Model"
          name="model"
          type="text"
        ></input>
        <input
          onClick={props.handleAddCamera}
          type="submit"
          value="Add Camera"
        ></input>
      </form>
      {props.cameras.map((camera) => (
        <Camera key={camera.id} camera={camera} />
      ))}
    </div>
  );
};

export default Cameras;
