import React from 'react'

const Len = (props) => {
    return (
        <div className="image_card">
            <h4>{props.len.brand}</h4>
            <img src={props.len.image} alt="len" className="stock_image"/>
            <h5>{props.len.focal_length} {props.len.aperture}</h5>
            <button onClick={()=>props.handleLenUsage(props.len)}>Usage:  {props.len.usage}</button>
            <button onClick={()=>props.handleDeleteLen(props.len)}>Remove</button>
        </div>
    )
}

export default Len