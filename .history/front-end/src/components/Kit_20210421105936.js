import React from 'react'

export default function Kit(props) {
    return (
        <div>
            <h4>Kit</h4>
            
            {props.kit}

            {/* <div>
                {props.cameras.find(camera => camera.id == props.kit.camera_id)}
            </div> */}
        </div>
    )
}