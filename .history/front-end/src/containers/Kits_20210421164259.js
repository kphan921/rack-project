import React from "react";
import Kit from "../components/Kit.js";

const Kits = (props) => {
  return (
    <div>
      <form>
        <input type="text" name="Kit Name" />
        <select onChange={(e)=>props.handleChange(e)}>
          {props.cameras.map((camera) => {
            return (
              <option name="camera_id" value={camera.id}>
                {camera.brand} {camera.model}
              </option>
            );
          })}
        </select>
        <select onChange={(e)=>props.handleChange(e)}>
          {props.lens.map((len) => {
            return (
              <option name="len_id" value={len.id}>
                {len.brand} {len.focal_length} {len.aperture}
              </option>
            );
          })}
        </select>
      </form>
      {props.kits.map((kit) => (
        <Kit key={kit.id} kit={kit} />
      ))}
    </div>
  );
};

export default Kits;
