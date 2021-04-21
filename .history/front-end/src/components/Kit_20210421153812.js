import React from 'react'

export default function Kit(props) {
    return (
        <div className="kit_card">
            <h4>Kit </h4>
            <div>{props.kit[1].brand} {props.kit[1].model}</div>
            <img src={props.kit[1].image} alt="camera" className="stock_image"/>
            <div>{props.kit[2].brand} {props.kit[2].focal_length}, {props.kit[2].aperture} </div>
            <img src={props.kit[2].image} alt="len" className="stock_image"/>
         
    
        </div>
    )
}