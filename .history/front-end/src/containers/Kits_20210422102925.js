import React from "react";
import Kit from "../components/Kit.js";

const Kits = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddKit}>
        <input onChange={(e)=>props.handleChange(e)} type="text" name="name" placeholder="Kit Name" />
        <select onChange={(e)=>props.handleSelectCam(e)}>
          {props.cameras.map((camera) => {
            return (
              <option key={camera.id} name="camera_id" value={camera.id}>
                {camera.brand} {camera.model}
              </option>
            );
          })}
        </select>
        <select onChange={(e)=>props.handleSelectLen(e)}>
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
        <Kit key={idx+1} id={idx+1} kit={kit} handleDeleteKit={props.handleDeleteKit}/>
      )}
    </div>
  );
};

export default Kits;
