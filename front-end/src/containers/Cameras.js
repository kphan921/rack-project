import React from 'react'
import Camera from '../components/Camera.js'

export default function Cameras(props) {
    return (
        <div>
            {props.cameras.map(camera=> <Camera key={camera.id} camera={camera} />)}
        </div>
    )
}
