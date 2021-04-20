import React from 'react'
import Len from '../components/Len.js'

const Lens = (props) => {
    return (
        <div>
            <form className="form">
        <input
          onChange={(e) => props.handleChange()}
          placeholder="Lens focal length"
          name='focal_length'
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange()}
          placeholder="Lens aperture"
          name='aperture'
          type="text"
        ></input>
        <input
          onClick={props.handleAddLen}
          type="submit"
          value="Add Lens"
        ></input>
      </form>
            {props.lens.map(len=> <Len key={len.id} len={len} />)}
        </div>
    )
}

export default Lens