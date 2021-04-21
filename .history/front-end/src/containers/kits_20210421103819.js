import React from "react";
import Kit from "../components/Kit.js";

const Kits = (props) => {
  return (
    <div>
        {props.lens.map((len) => (<Kit key={len.id} len={len} />))}
    </div>
  );
};

export default Kits;