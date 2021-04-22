import React from 'react'

const Camera = (props) => {
    return (
        <div className="image_card">
            <h4 className="title">{props.camera.brand}</h4>
            <img src={props.camera.image} alt="camera" className="stock_image"/>
            <h5>{props.camera.model}</h5>
            <button className="green_usage" onClick={()=>props.handleCameraUsage(props.camera)}>Usage:  {props.camera.usage}</button>
            <button className="red_remove" onClick={()=> props.handleDeleteCamera(props.camera)}>Remove</button>
            <br/>
        </div>

    )
}
 export default Camera;