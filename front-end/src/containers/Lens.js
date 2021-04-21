import React from "react";
import Len from "../components/Len.js";

const Lens = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddLen} className="form">
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Lens brand"
          name="brand"
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Lens image"
          name="image"
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Lens focal length"
          name="focal_length"
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Lens aperture"
          name="aperture"
          type="text"
        ></input>
        <input type="submit" value="Add Lens"></input>
      </form>
      <div className="container">
        {props.lens.map((len) => (
          <Len
            key={len.id}
            len={len}
            handleLenUsage={props.handleLenUsage}
            handleDeleteLen={props.handleDeleteLen}
          />
        ))}
      </div>
    </div>
  );
};

export default Lens;
