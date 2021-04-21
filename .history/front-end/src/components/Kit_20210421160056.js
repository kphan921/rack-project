import React from 'react'

export default function Kit(props) {
    return (
        <div className="kit_card">
            <h4>{props.kit.name} </h4>
            <div>{props.kit.camera.brand} {props.kit.camera.model}</div>
            <img src={props.kit,camera.image} alt="camera" className="stock_image"/>
            <div>{props.kit.len.brand} {props.kit[2].focal_length}, {props.kit[2].aperture} </div>
            <img src={props.kit[2].image} alt="len" className="stock_image"/>
         
    
        </div>
    )
}