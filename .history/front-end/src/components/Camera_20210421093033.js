import React from 'react'

const Camera = (props) => {
    return (
        <div>
            <h4>{props.camera.model}</h4>
            <button>Remove</button>
        </div>
    )
}
 export default Camera;