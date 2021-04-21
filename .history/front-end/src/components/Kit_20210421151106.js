import React from 'react'

export default function Kit(props) {
    return (
        <div>
            <h4>Kit </h4>
            <h5>{props.kit.[0].brand} {props.kit[0].model}</h5>
            <div>{props.kit.[1].brand} {props.kit[1].focal_length}, {props.kit[1].aperture} </div>
         
    
        </div>
    )
}