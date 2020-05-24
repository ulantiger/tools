import React, {useContext} from 'react'
import {ChromePicker} from 'react-color'
import {invertColor} from '../../../store/util'
import {NeoContext} from '../../../store/context'
import Slider from '../tools/slider/slider.component'
import ShadowSet from '../tools/shadows/shadows.component'
import ColorPickerBtn from '../tools/color-picker/color-picker.component'
import HighlightIcon from '@material-ui/icons/Highlight';

import {
  TEXT_SIZE_SET, 
  BLUR_DARK_SET,
  TEXT_COLOR_SET, 
  BLUR_LIGHT_SET,
  BG_BTN_SAME_SET,
  CUSTOM_TEXT_SET, 
  BUTTON_WIDTH_SET, 
  LIGHT_SOURCE_SET,
  DISTANCE_DARK_SET,
  BUTTON_HEIGHT_SET, 
  BUTTON_RADIUS_SET, 
  DISTANCE_LIGHT_SET,
  INTENSITY_DARK_SET,
  INTENSITY_LIGHT_SET,
  BACKGROUND_COLOR_SET,
  BUTTON_BACKGROUND_SET, 
  CON_INTENSITY_DARK_SET,
  CON_INTENSITY_LIGHT_SET,
} from '../../../store/actions/actions'

import './bg-box-props.styles.scss'

const BgBoxProps=props=> {
  const { state:{ 
                  TEXT_SIZE, 
                  BLUR_DARK, 
                  TEXT_COLOR, 
                  BLUR_LIGHT, 
                  BG_BTN_SAME,
                  CUSTOM_TEXT,
                  BUTTON_WIDTH, 
                  LIGHT_SOURCE,
                  BUTTON_HEIGHT, 
                  DISTANCE_DARK,
                  BUTTON_RADIUS, 
                  INTENSITY_DARK,
                  DISTANCE_LIGHT, 
                  INTENSITY_LIGHT,
                  BACKGROUND_COLOR,
                  BUTTON_BACKGROUND, 
                  CON_INTENSITY_DARK,
                  CON_INTENSITY_LIGHT, 
                },
                  dispatch } = useContext(NeoContext)

    const onBgSet =val => dispatch(BACKGROUND_COLOR_SET(val))
    const onTextSet =val => dispatch(TEXT_COLOR_SET(val))
    const onBtnBGSet =val => dispatch(BUTTON_BACKGROUND_SET(val))
    const onBtnWidthSet =val => dispatch(BUTTON_WIDTH_SET(val))
    const onTextSizeSet =val => dispatch(TEXT_SIZE_SET(val))
    const onBlurDarkSet = val => dispatch(BLUR_DARK_SET(val))
    const onBtnHeightSet =val => dispatch(BUTTON_HEIGHT_SET(val))
    const onBlurLightSet = val => dispatch(BLUR_LIGHT_SET(val))
    const onCustomTextSet =val => dispatch(CUSTOM_TEXT_SET(val))
    const onLightSourcetSet =val => dispatch(LIGHT_SOURCE_SET(val))
    const onButtonRadiusSet = val => dispatch(BUTTON_RADIUS_SET(val))
    const onDistanceDarkSet = val => dispatch(DISTANCE_DARK_SET(val))
    const onBGButtonSameSet =val => dispatch(BG_BTN_SAME_SET(val))
    const onDistanceLightSet = val => dispatch(DISTANCE_LIGHT_SET(val))
    const onIntensityDarkSet = val => dispatch(INTENSITY_DARK_SET(val))
    const onIntensityLightSet = val => dispatch(INTENSITY_LIGHT_SET(val))
    const onConIntensityDarkSet =val => dispatch(CON_INTENSITY_DARK_SET(val))
    const onConIntensityLightSet =val => dispatch(CON_INTENSITY_LIGHT_SET(val))

    const invColor = BG_BTN_SAME? BUTTON_BACKGROUND :BACKGROUND_COLOR
    const intensity = new Intl.NumberFormat('en-US',
                        { minimumFractionDigits: 2 });
 

  return (
      <div className='box inset BG_Box' id='internal' style={{margin: 0}}>
        <div className="elem">
          <ColorPickerBtn text='Background color' val ={BACKGROUND_COLOR}> 
            <ChromePicker color={BACKGROUND_COLOR} 
                          onChange={color=>onBgSet(color.hex)}
                          disableAlpha={true}/>

          </ColorPickerBtn> 
        </div>
        <div className="elem">
          <ColorPickerBtn text='ButtonText color' val={TEXT_COLOR}> 
            <ChromePicker color={TEXT_COLOR} 
                          onChange={color=>onTextSet(color.hex)}
                          disableAlpha={true}/>
          </ColorPickerBtn>
        </div>
        <div className="elem" >
          <div className="normalText" style={{marginTop:20}}>
            <p>Recommended TextColor: <span>{invertColor(invColor)}</span></p>
            <button className='btn-style flat'
                    onClick={e=>onTextSet(invertColor(invColor))}>
            Apply it
            </button>                    
          </div>
        </div>
        <div className="elem">
          <div className='normalText'>
            <label htmlFor='BTN_SAME_COLOR'>Button background is different</label> 
            <input  type="checkbox" name='BTN_SAME_COLOR' 
                    checked={BG_BTN_SAME}
                    onChange={e=>onBGButtonSameSet(e.target.checked)}/>
          </div>
          {BG_BTN_SAME
            ? <div style={{marginBottom: 30}}>
                <ColorPickerBtn text='Background color' val={BUTTON_BACKGROUND}> 
                  <ChromePicker color={BUTTON_BACKGROUND} 
                                onChange={color=>onBtnBGSet(color.hex)}
                                disableAlpha={true}/>
                </ColorPickerBtn>
              </div>  
            :null}
        </div>
        <div className="elem">
          <div className="normalText">
            <label htmlFor='BTN_TEXT'>Button text</label> 
              <input  type="text" name='BTN_TEXT' 
                      maxLength="10"
                      value={CUSTOM_TEXT}
                      onChange={e=>onCustomTextSet(e.target.value)}
                      className ='flat'/>
              <p>Text size: <span>{TEXT_SIZE}px</span></p>
              <Slider name='TextSize' minVal={16} maxVal={32} 
                      curVal={TEXT_SIZE} 
                      onChangeHandler={e=>onTextSizeSet(e.target.value)} />
          </div>
        </div>    
        <div className="elem" style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <p>Shadow direction:</p>
                <label>
                  <input  type="radio" value="TL" 
                          className='radiobtn'
                          checked={LIGHT_SOURCE==='TL'} 
                          onChange={e=> onLightSourcetSet(e.target.value)}
                          name="lightsource" />
                  <HighlightIcon style={{transform: 'rotate(135deg)'}}/>
                </label>
                <label>
                  <input  type="radio" value="TR" 
                          className='radiobtn'
                          checked={LIGHT_SOURCE==='TR'} 
                          onChange={e=> onLightSourcetSet(e.target.value)}
                          name="lightsource"/>
                  <HighlightIcon style={{transform: 'rotate(-135deg)'}}/>
                </label>
                <label>
                  <input  type="radio" value="BR" 
                          className='radiobtn'
                          checked={LIGHT_SOURCE==='BR'} 
                          onChange={e=> onLightSourcetSet(e.target.value)}
                          name="lightsource"/>
                  <HighlightIcon style={{transform: 'rotate(-45deg)'}} />
                </label>
                <label>
                  <input  type="radio" value="BL" 
                          className='radiobtn'
                          checked={LIGHT_SOURCE==='BL'} 
                          onChange={e=> onLightSourcetSet(e.target.value)}
                          name="lightsource"/>
                  <HighlightIcon style={{transform: 'rotate(45deg)'}}/>
                </label>

        </div>
        <div className="elem cons" >
            <p>Rectangle SIZE&RADIUS properties:</p>
            <div className="line conl1">
              <p className='params'>Rectangle width:<span>{BUTTON_WIDTH}</span></p>
              <Slider name='LI' minVal={BUTTON_HEIGHT} maxVal={400} curVal={BUTTON_WIDTH} 
                      onChangeHandler={e=>onBtnWidthSet(e.target.value)}/>
              <p>max: 400px</p>
            </div>  
            <div className="line conl1">
              <p className='params'>Rectangle height:<span>{BUTTON_HEIGHT}</span></p>
              <Slider name='LI' minVal={30} maxVal={160} curVal={BUTTON_HEIGHT} 
                      onChangeHandler={e=>onBtnHeightSet(e.target.value)}/>
              <p>max: 160px</p>
            </div>  
            <div className="line conl1">
              <p className='params'>Rectangle radius: <span>{BUTTON_RADIUS}</span></p>
              <Slider name='BtnRSize' minVal={0} maxVal={50} 
                      curVal={BUTTON_RADIUS} 
                      onChangeHandler={e=>onButtonRadiusSet(e.target.value)} />
              <p>max: 50px</p>
            </div>
        </div> 
        <div className="elem">
            <p>SHADOW Properties:</p>
            <div className="normalText">
              <p className='params'>LIGHT:  <span>Distance:</span><span>{DISTANCE_LIGHT}</span>
                                            <span>Blur:</span><span>{BLUR_LIGHT}</span>
                                            <span>Intesity:</span><span>{intensity.format(INTENSITY_LIGHT/100)}</span></p>
              <ShadowSet  distanceVar = {DISTANCE_LIGHT} distanceCallback = {onDistanceLightSet}
                          blurVar = {BLUR_LIGHT} blurCallback = {onBlurLightSet}
                          intensityVar = {INTENSITY_LIGHT} intensityCallback = {onIntensityLightSet}/>
            </div>
            <div className="normalText">
              <p className='params'>DARK:   <span>Distance:</span><span>{DISTANCE_DARK}</span>
                                            <span>Blur:</span><span>{BLUR_DARK}</span>
                                            <span>Intesity:</span><span>{intensity.format(INTENSITY_DARK/100)}</span></p>
              <ShadowSet  distanceVar = {DISTANCE_DARK} distanceCallback = {onDistanceDarkSet}
                          blurVar = {BLUR_DARK} blurCallback = {onBlurDarkSet}
                          intensityVar = {INTENSITY_DARK} intensityCallback = {onIntensityDarkSet}/>
            </div>
          </div> 
        <div className="elem cons" >
            <p>CONCAVE & CONVEX type box shadow properties:</p>
            <div className="line conl1">
              <p className='params'>LIGHT intensity:<span>{intensity.format(CON_INTENSITY_LIGHT/100)}</span></p>
              <Slider name='LI' minVal={0} maxVal={100} curVal={CON_INTENSITY_LIGHT} 
                      onChangeHandler={e=>onConIntensityLightSet(e.target.value)}/>
            </div>  
            <div className="line conl1">
              <p className='params'>DARK intensity:  <span>{intensity.format(CON_INTENSITY_DARK/100)}</span></p>
              <Slider name='LI' minVal={0} maxVal={100} curVal={CON_INTENSITY_DARK} 
                      onChangeHandler={e=>onConIntensityDarkSet(e.target.value)}/>
            </div>  
          </div> 
        </div> 
    )
  }
  
export default BgBoxProps


