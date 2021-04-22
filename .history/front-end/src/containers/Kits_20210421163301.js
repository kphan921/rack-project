import React from "react";
import Kit from "../components/Kit.js";

const Kits = (props) => {
  return (
    <div>
        <form>
          <input type="text"/>
          <select>
            {props.cameras.map((camera)=>{ 
              return <option name="camera_id" value={camera.id}>
              {camera.brand} {camera.model}
                </option>
            } )}
          </select>
        </form>
        {props.kits.map((kit) => (<Kit key={kit.id}  kit={kit} />))}
    </div>
  );
};

export default Kits;