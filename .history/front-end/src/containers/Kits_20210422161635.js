import React from "react";
import Kit from "../components/Kit.js";

const Kits = (props) => {
  return (
    <div>
      <form className="kit_form" onSubmit={props.handleAddKit}>
        <input required onChange={(e)=>props.handleChange(e)} type="text" name="name" placeholder="Kit Name" />
        <select required onChange={(e)=>props.handleSelectCam(e)}>
          <option value=""></option>
          {props.cameras.map((camera) => {
            return (
              <option key={camera.id} name="camera_id" value={camera.id}>
                {camera.brand} {camera.model}
              </option>
            );
          })}
        </select>
        <select required onChange={(e)=>props.handleSelectLen(e)}>
          <option></option>
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
      {props.kits.map((kit) => 
        <Kit key={kit.id} kit={kit} handleDeleteKit={props.handleDeleteKit}/>
      )}
    </div>
  );
};

export default Kits;
