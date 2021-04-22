import React from "react";

const Len = (props) => {
  return (
    <div className="image_card">
      <h4 className="title">{props.len.brand}</h4>
      <img src={props.len.image} alt="len" className="stock_image" />
      <h5>
        {props.len.focal_length} {props.len.aperture}
      </h5>
      <button
        className="green_usage"
        onClick={() => props.handleLenUsage(props.len)}
      >
        Usage: {props.len.usage}
      </button>
      <button
        className="red_remove"
        onClick={() => props.handleDeleteLen(props.len)}
      >
        Remove
      </button>
    </div>
  );
};

export default Len;
