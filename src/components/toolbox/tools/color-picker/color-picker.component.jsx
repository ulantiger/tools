import React, {useState} from 'react'
import Button from '../btn/button.component'
import './color-picker.style.scss'

const ColorPickerBtn = ({text, val, children, btnText='Pick color'}) => {

  const [displayColorPicker, setdisplayColorPicker] = useState(false)
  
  
  return (
    <div className='divs'>
      <div>
        <p>{text}:<span>{val.padStart(7,' ')}</span></p>
      </div>
      <div className='Elem-color' style={{background: val}}/>
      <Button clickHandler={()=>setdisplayColorPicker(!displayColorPicker) }>
          {displayColorPicker? 'Close': btnText}
      </Button>
      { displayColorPicker 
          ? <div className="overlay">
              <div className="overlaycontent">
                {children}
              </div>
           </div>
        : null }
    </div>  
    )
    
}

export default ColorPickerBtn
