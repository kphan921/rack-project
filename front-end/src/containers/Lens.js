import React from 'react'
import Len from '../components/Len.js'

const Lens = (props) => {
    return (
        <div>
            <form className="form">
        <input
          onChange={(e) => props.handleChange()}
          placeholder="Len focal lengh"
          name='focal_length'
          type="text"
        ></input>
        <input
          onChange={(e) => props.handleChange()}
          placeholder="Len aperture"
          name='aperture'
          type="text"
        ></input>
        <input
          onClick={props.handleAddLen}
          type="submit"
          value="Add Len"
        ></input>
      </form>
            {props.lens.map(len=> <Len key={len.id} len={len} />)}
        </div>
    )
}

export default Lens