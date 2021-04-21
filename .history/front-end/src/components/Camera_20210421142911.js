import React from 'react'

const Camera = (props) => {
    return (
        <div>
            <h4>{props.camera.brand} {props.camera.model}</h4>
            <image src={props.camera.image}></image>

            <button onClick={(e)=> props.handleDeleteCamera(e, props.camera)}>Remove</button>

        </div>

    )
}
 export default Camera;