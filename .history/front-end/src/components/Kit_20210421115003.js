import React from 'react'

export default function Kit(props) {
    return (
        <div>
            <h4>Kit {props.key}</h4>
            <div>{props.kit[0].model}</div>
         
    
        </div>
    )
}