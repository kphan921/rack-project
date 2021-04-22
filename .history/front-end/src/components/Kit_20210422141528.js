import React from 'react'

export default function Kit(props) {
    return (
        <div className="kit_card">
            <h4 className="title">{props.kit.name} </h4>
            <div className="column">
                <div>{props.kit.camera.brand} {props.kit.camera.model}</div>
                <img src={props.kit.camera.image} alt="camera" className="stock_image_small"/>
            </div>
            <div className="column">
                <div>{props.kit.len.brand} {props.kit.len.focal_length}, {props.kit.len.aperture} </div>
                <img src={props.kit.len.image} alt="len" className="stock_image_small"/>
            </div>
            <button onClick={()=>props.handleDeleteKit(props.kit, props.id)}>Remove</button>
        </div>
    )
}