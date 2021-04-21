import React from "react";
import Len from "../components/Len.js";

const Lens = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddLen} className="form">
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
      {props.lens.map((len) => (
        <Len key={len.id} len={len} />
      ))}
    </div>
  );
};

export default Lens;
