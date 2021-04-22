import React from "react";
import Len from "../components/Len.js";

const Lens = (props) => {
  return (
    <div>
      <form className="kit_form" onSubmit={props.handleAddLen}>
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Lens Brand"
          name="brand"
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Lens Image"
          name="image"
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Lens Focal Length"
          name="focal_length"
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange(e)}
          placeholder="Lens Aperture"
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
