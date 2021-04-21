import React from 'react'

export default function Kit(props) {
    return (
        <div className="kit_card">
            <h4>Kit </h4>
            <div>{props.kit[0].brand} {props.kit[0].model}</div>
            <img src={props.kit[0].image} alt="camera" className="stock_image"/>
            <div>{props.kit[1].brand} {props.kit[1].focal_length}, {props.kit[1].aperture} </div>
            <img src={props.kit[1].image} alt="len" className="stock_image"/>
         
    
        </div>
    )
}