import React from "react";
import Kit from "../components/Kit.js";

const Kits = (props) => {
  return (
    <div>
        {props.kits.map((kit) => (<Kit key={kit.id} kit={kit} lens={this.state.lens} kits={this.state.kits}/>))}
    </div>
  );
};

export default Kits;