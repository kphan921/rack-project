import React from 'react'
import Len from '../components/Len.js'

export default function Cameras(props) {
    return (
        <div>
            {props.lens.map(len=> <Len key={len.id} len={len} />)}
        </div>
    )
}