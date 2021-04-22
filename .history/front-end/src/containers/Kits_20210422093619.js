import React from "react";
import Kit from "../components/Kit.js";

const Kits = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddKit}>
        <input onChange={(e)=>props.handleChange(e)} type="text" name="name" placeholder="Kit Name" />
        <select onChange={(e)=>props.handleChange(e)}>
          {props.cameras.map((camera) => {
            return (
              <option key={Math.random()} name="camera_id" value={camera.id}>
                {camera.brand} {camera.model}
              </option>
            );
          })}
        </select>
        <select onChange={(e)=>props.handleChange(e)}>
          {props.lens.map((len) => {
            return (
              <option key={len.id} name="len_id" value={len.id}>
                {len.brand} {len.focal_length} {len.aperture}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Add Kit"></input>
      </form>
      {props.kits.map((kit, idx) => 
        <Kit key={idx} kit={kit} />
      )}
    </div>
  );
};

export default Kits;
