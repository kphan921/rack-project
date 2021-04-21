import React from "react";
import Kit from "../components/Kit.js";

const Kits = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddCamera} className="form">
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Camera Model"
          name="model"
          type="text"
        ></input>
        <input
          name="submit"
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

export default Kits;