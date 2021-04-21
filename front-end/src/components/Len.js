import React from 'react'

const Len = (props) => {
    return (
        <div>
            <h4>{props.len.focal_length} {props.len.aperture}</h4>
            <button onClick={(e)=>props.handleDeleteLen(e, props.len)}>Remove</button>
        </div>
    )
}

export default Len