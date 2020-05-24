import React, {useState} from 'react'
import Slider from '../slider/slider.component'
import './param-picker.styles.scss'

const PickParam =() => {
  const [myState, setMyState] = useState(6)

    return(
        <div className="line">
          <p>Distance:</p>
          <Slider name='MySize' minVal={0} maxVal={20} 
                curVal={myState} 
                onChangeHandler={e=>setMyState(e.target.value)} />
        </div>  
    )
  }
    // <div className='flat PickParam'>
    //   <div className="line">
    //     <p>Distance:</p>
    //     <Slider name='Distance' minVal={0} maxVal={20} curVal={6} onChangeHandler={showParam}/>
    //   </div>  
    //   <div className="line">
    //     <p>Blur:</p>
    //     <Slider name='Blur' minVal={0} maxVal={20} curVal={6} onChangeHandler={showParam}/>
    //   </div>  
    //   <div className="line">
    //     <p>Intensivity:</p>
    //     <Slider name='Intensity' minVal={0} maxVal={100} curVal={20} onChangeHandler={showParam}/>
    //   </div>
    // </div>

export default PickParam