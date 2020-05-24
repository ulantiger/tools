import React from 'react'
import './slider.styles.scss'

const Slider = ({name,maxVal, minVal, curVal, onChangeHandler }) => {
  return (
    <div className="controls">
      <input  className="slider flat" 
              name={name} 
              type="range" 
              min={minVal} 
              max={maxVal} 
              value={curVal} 
              onChange = {onChangeHandler}/>
    </div>  
    )
}

export default Slider
