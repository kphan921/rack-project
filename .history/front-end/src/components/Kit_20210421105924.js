import React from 'react'

export default function Kit(props) {
    return (
        <div>
            <h4>Kit</h4>
            
            {props.cameras}

            {/* <div>
                {props.cameras.find(camera => camera.id == props.kit.camera_id)}
            </div> */}
        </div>
    )
}