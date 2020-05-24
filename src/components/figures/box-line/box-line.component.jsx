import React, {useContext, useState} from 'react'
import { NeoContext } from '../../../store/context';
import './box-line.styles.scss'
import Button from '../../toolbox/tools/btn/button.component'
import ShowCode from '../code/code.component'

const BoxLine= ({type}) => {
  const { state:{ TEXT_COLOR, 
                  TEXT_SIZE,
                  DISTANCE_DARK,
                  DISTANCE_LIGHT,
                  BLUR_DARK,
                  BLUR_LIGHT,
                  INTENSITY_DARK,
                  INTENSITY_LIGHT,
                  CON_INTENSITY_LIGHT,
                  CON_INTENSITY_DARK,
                  BACKGROUND_COLOR,
                  BUTTON_BACKGROUND,
                  BG_BTN_SAME,
                  BUTTON_WIDTH,
                  BUTTON_HEIGHT,
                  BUTTON_RADIUS,
                  LIGHT_SOURCE,
                  CUSTOM_TEXT
                }} = useContext(NeoContext)

    const styles ={
      color: TEXT_COLOR,
      fontSize: TEXT_SIZE+'px'
    }


    const [showCode, setShowCode] = useState(false)

    const BG_color = BG_BTN_SAME ? BUTTON_BACKGROUND : BACKGROUND_COLOR
    // ****************************** TOP-LEFT SHADOWS ******************************
    const flatStyleTL=
      `${DISTANCE_DARK}px ${DISTANCE_DARK}px ${BLUR_DARK}px rgba( 0, 0, 0, ${INTENSITY_DARK/100}),${-DISTANCE_LIGHT}px ${-DISTANCE_LIGHT}px ${BLUR_LIGHT}px rgba( 255, 255, 255, ${INTENSITY_LIGHT/100})`

    const insetStyleTL=
    `inset ${DISTANCE_DARK}px ${DISTANCE_DARK}px ${BLUR_DARK}px rgba( 0, 0, 0, ${INTENSITY_DARK/100}), inset ${-DISTANCE_LIGHT}px ${-DISTANCE_LIGHT}px ${BLUR_LIGHT}px rgba( 255, 255, 255, ${INTENSITY_LIGHT/100})`
    

    const convexStyleTL=
    // `linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,.25)), ${BG_color}`
    `linear-gradient(-45deg, rgba(0,0,0,${CON_INTENSITY_DARK/100}), rgba(255,255,255,${CON_INTENSITY_LIGHT/100})), ${BG_color}`

    const concaveStyleTL=
    // `linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,.25)), ${BG_color}`
    `linear-gradient(135deg, rgba(0,0,0,${CON_INTENSITY_DARK/100}), rgba(255,255,255,${CON_INTENSITY_LIGHT/100})), ${BG_color}`

    // ****************************** TOP-RIGHT SHADOWS ******************************
    const flatStyleTR=
      `${-DISTANCE_DARK}px ${DISTANCE_DARK}px ${BLUR_DARK}px rgba( 0, 0, 0, ${INTENSITY_DARK/100}),${DISTANCE_LIGHT}px ${-DISTANCE_LIGHT}px ${BLUR_LIGHT}px rgba( 255, 255, 255, ${INTENSITY_LIGHT/100})`

    const insetStyleTR=
    `inset ${-DISTANCE_DARK}px ${DISTANCE_DARK}px ${BLUR_DARK}px rgba( 0, 0, 0, ${INTENSITY_DARK/100}), inset ${DISTANCE_LIGHT}px ${-DISTANCE_LIGHT}px ${BLUR_LIGHT}px rgba( 255, 255, 255, ${INTENSITY_LIGHT/100})`


    const convexStyleTR=
    // `linear-gradient(45deg, rgba(0,0,0,0.22), rgba(255,255,255,.25)), ${BG_color}`
    `linear-gradient(45deg, rgba(0,0,0,${CON_INTENSITY_DARK/100}), rgba(255,255,255,${CON_INTENSITY_LIGHT/100})), ${BG_color}`

    const concaveStyleTR=
    // `linear-gradient(-135deg, rgba(0,0,0,.22), rgba(255,255,255,.25)), ${BG_color}`
    `linear-gradient(-135deg, rgba(0,0,0,${CON_INTENSITY_DARK/100}), rgba(255,255,255,${CON_INTENSITY_LIGHT/100})), ${BG_color}`

    // ****************************** BOTTOM-RIGHT SHADOWS ******************************
    const flatStyleBR=
      `${-DISTANCE_DARK}px ${-DISTANCE_DARK}px ${BLUR_DARK}px rgba( 0, 0, 0, ${INTENSITY_DARK/100}),${DISTANCE_LIGHT}px ${DISTANCE_LIGHT}px ${BLUR_LIGHT}px rgba( 255, 255, 255, ${INTENSITY_LIGHT/100})`

    const insetStyleBR=
    `inset ${-DISTANCE_DARK}px ${-DISTANCE_DARK}px ${BLUR_DARK}px rgba( 0, 0, 0, ${INTENSITY_DARK/100}), inset ${DISTANCE_LIGHT}px ${DISTANCE_LIGHT}px ${BLUR_LIGHT}px rgba( 255, 255, 255, ${INTENSITY_LIGHT/100})`


    const convexStyleBR=
    // `linear-gradient(135deg, rgba(0,0,0,.22), rgba(255,255,255,.25)), ${BG_color}`
    `linear-gradient(135deg, rgba(0,0,0,${CON_INTENSITY_DARK/100}), rgba(255,255,255,${CON_INTENSITY_LIGHT/100})), ${BG_color}`
    
    const concaveStyleBR=
    `linear-gradient(-45deg, rgba(0,0,0,${CON_INTENSITY_DARK/100}), rgba(255,255,255,${CON_INTENSITY_LIGHT/100})), ${BG_color}`
    // `linear-gradient(-45deg, rgba(0,0,0,.22), rgba(255,255,255,.25)), ${BG_color}`

    // ****************************** BOTTOM-LEFT SHADOWS ******************************
    const flatStyleBL=
      `${DISTANCE_DARK}px ${-DISTANCE_DARK}px ${BLUR_DARK}px rgba( 0, 0, 0, ${INTENSITY_DARK/100}),${-DISTANCE_LIGHT}px ${DISTANCE_LIGHT}px ${BLUR_LIGHT}px rgba( 255, 255, 255, ${INTENSITY_LIGHT/100})`

    const insetStyleBL=
    `inset ${DISTANCE_DARK}px ${-DISTANCE_DARK}px ${BLUR_DARK}px rgba( 0, 0, 0, ${INTENSITY_DARK/100}), inset ${-DISTANCE_LIGHT}px ${DISTANCE_LIGHT}px ${BLUR_LIGHT}px rgba( 255, 255, 255, ${INTENSITY_LIGHT/100})`


    const convexStyleBL=
    // `linear-gradient(-135deg, rgba(0,0,0,.22), rgba(255,255,255,.25)), ${BG_color}`
    `linear-gradient(-135deg, rgba(0,0,0,${CON_INTENSITY_DARK/100}), rgba(255,255,255,${CON_INTENSITY_LIGHT/100})), ${BG_color}`

    const concaveStyleBL=
    // `linear-gradient(45deg, rgba(0,0,0,.22), rgba(255,255,255,.25)), ${BG_color}`
    `linear-gradient(45deg, rgba(0,0,0,${CON_INTENSITY_DARK/100}), rgba(255,255,255,${CON_INTENSITY_LIGHT/100})), ${BG_color}`

    
    const types=[
      { TL: {boxType:flatStyleTL, bg: ''},
        TR: {boxType:flatStyleTR, bg: ''},
        BR: {boxType:flatStyleBR, bg: ''},
        BL: {boxType:flatStyleBL, bg: ''},
        type: 'FLAT'
        // styles: 'BoxT1 box'
      },
      { TL: {boxType:insetStyleTL, bg: ''},
        TR: {boxType:insetStyleTR, bg: ''},
        BR: {boxType:insetStyleBR, bg: ''},
        BL: {boxType:insetStyleBL, bg: ''},
        type: 'INSET'
        // styles: 'BoxT1 box',
      },
      { TL: {boxType:flatStyleTL, bg: convexStyleTL},
        TR: {boxType:flatStyleTR, bg: convexStyleTR},
        BR: {boxType:flatStyleBR, bg: convexStyleBR},
        BL: {boxType:flatStyleBL, bg: convexStyleBL},
        type: 'CONVEX'
        // styles: 'BoxT2'
      },
      { TL: {boxType:flatStyleTL, bg: concaveStyleTL},
        TR: {boxType:flatStyleTR, bg: concaveStyleTR},
        BR: {boxType:flatStyleBR, bg: concaveStyleBR},
        BL: {boxType:flatStyleBL, bg: concaveStyleBL},
        type: 'CONCAVE'
        // styles: 'BoxT2'
      },
    ]
  
    const ls ={'TL':'TOP-LEFT','TR':'TOP-RIGHT','BR':'BOTTOM-RIGHT','BL':'BOTTOM-LEFT', }

    const BoxBG_Color =  types[type][LIGHT_SOURCE].bg.length > 0  ? types[type][LIGHT_SOURCE].bg
                                                                  : BG_BTN_SAME ? BUTTON_BACKGROUND
                                                                  : BACKGROUND_COLOR


    const LstyleBox={
      background: BoxBG_Color,
      boxShadow: types[type][LIGHT_SOURCE].boxType,
      height: BUTTON_HEIGHT.toString()+'px',
      width: BUTTON_WIDTH.toString()+'px',
      borderRadius: BUTTON_RADIUS.toString()+'px'
    }     

    const LstyleCircle={
      background: BoxBG_Color,
      boxShadow: types[type][LIGHT_SOURCE].boxType,
      height: BUTTON_HEIGHT.toString()+'px',
      width: BUTTON_HEIGHT.toString()+'px',
      borderRadius: '50%'
    }  

    return (
      <div key={type} className='BoxLine' style={styles}> 
        <div className="infoBox inset">
          <p>Button type: {types[type].type}</p>
          <p>Source of ligth: {ls[LIGHT_SOURCE]}</p>
          <Button clickHandler={()=>setShowCode(!showCode)}>{showCode?'Close':'Show CSS'}</Button>
          { showCode
            ? <ShowCode background= {BoxBG_Color}
                        boxShadow={types[type][LIGHT_SOURCE].boxType}
                        height= {BUTTON_HEIGHT.toString()+'px'}
                        width= {BUTTON_WIDTH.toString()+'px'}
                        borderRadius= {BUTTON_RADIUS.toString()+'px'}
                        boxBG= {BACKGROUND_COLOR}
                        txtColor = {TEXT_COLOR}
                        txt = {CUSTOM_TEXT}
                        clickHandler={()=>setShowCode(!showCode)}
            />
            : null
          }
        </div>
        <div className="drawCircle">
          <div className="Box" style={LstyleCircle}>
            {CUSTOM_TEXT}
          </div>

        </div>
        <div className="drawBox">
          <div  className="Box" style={LstyleBox}>
            {CUSTOM_TEXT}
          </div>
        </div>
      </div>
    )
  }

export default BoxLine
