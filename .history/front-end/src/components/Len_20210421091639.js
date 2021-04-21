import React from 'react'

const Len = (props) => {
    return (
        <div>
            <h4>{props.len.focal_length} {props.len.aperture}</h4>
            {/* <buton>Remove</buton> */}
        </div>
    )
}

export default Len