import React, {useState} from 'react'
import Slider from '../slider/slider.component'
import Button from '../btn/button.component'
import './shadows.style.scss'


const ShadowSet = ({distanceVar, distanceCallback,
                    blurVar, blurCallback,
                    intensityVar, intensityCallback}) => {

  const [displayParamPicker, setdisplayParamPicker] = useState(false)

  return (
    <div className='divs'>
      <Button clickHandler={()=> setdisplayParamPicker(!displayParamPicker)}>
        {displayParamPicker? 'Close': 'Set'}
      </Button>
      { displayParamPicker 
          ? <div className="overlay">
              <div className="content">
                <div className="line">
                  <p>Distance:</p>
                  <Slider name='Distance' minVal={0} maxVal={20} curVal={distanceVar} onChangeHandler={e=>distanceCallback(e.target.value)}/>
                </div>  
                <div className="line">
                  <p>Blur:</p>
                  <Slider name='Blur' minVal={0} maxVal={20} curVal={blurVar} onChangeHandler={e=>blurCallback(e.target.value)}/>
                </div>  
                <div className="line">
                  <p>Intensivity:</p>
                  <Slider name='Intensity' minVal={0} maxVal={100} curVal={intensityVar} onChangeHandler={e=>intensityCallback(e.target.value)}/>
                </div>
              </div>
           </div>
        : null }
    </div>  
    )
}

export default ShadowSet

