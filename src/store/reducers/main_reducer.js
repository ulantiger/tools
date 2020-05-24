import {
  BACKGROUND_COLOR,
  TEXT_COLOR, 
  DISTANCE_LIGHT, 
  DISTANCE_DARK,
  INTENSITY_LIGHT, 
  INTENSITY_DARK, 
  BLUR_LIGHT, 
  BLUR_DARK, 
  BUTTON_BACKGROUND, 
  TEXT_SIZE, 
  CUSTOM_TEXT,
  CON_INTENSITY_LIGHT, 
  CON_INTENSITY_DARK,
  BG_BTN_SAME,
  BUTTON_WIDTH,
  BUTTON_HEIGHT,
  BUTTON_RADIUS,
  LIGHT_SOURCE,
} from '../actions/action.types'


const Store= (state, action) =>{
  console.log('CURRENTSTATE:', state,action)
  switch(action.type){
    case LIGHT_SOURCE:
      return{
        ...state, LIGHT_SOURCE: action.payload
      }
    case BUTTON_WIDTH:
      return{
        ...state, BUTTON_WIDTH: action.payload
      }
    case BUTTON_HEIGHT:
      return{
        ...state, BUTTON_HEIGHT: action.payload
      }
    case BUTTON_RADIUS:
      return{
        ...state, BUTTON_RADIUS: action.payload
      }
    case BACKGROUND_COLOR:
      return{
        ...state, BACKGROUND_COLOR: action.payload
      }
    case TEXT_COLOR:
      return{
        ...state, TEXT_COLOR: action.payload
      }
    case DISTANCE_LIGHT:
      return{
        ...state, DISTANCE_LIGHT: action.payload
      }
    case DISTANCE_DARK:
      return{
        ...state, DISTANCE_DARK: action.payload
      }
    case INTENSITY_LIGHT:
      return{
        ...state, INTENSITY_LIGHT: action.payload
      }
    case INTENSITY_DARK:
      return{
        ...state, INTENSITY_DARK: action.payload
      }
    case BLUR_LIGHT:
      return{
        ...state, BLUR_LIGHT: action.payload
      }
    case BLUR_DARK:
      return{
        ...state, BLUR_DARK: action.payload
      }
    case BUTTON_BACKGROUND:
      return{
        ...state, BUTTON_BACKGROUND: action.payload
      }
    case TEXT_SIZE:
      return{
        ...state, TEXT_SIZE: action.payload
      }
    case CUSTOM_TEXT:
      return{
        ...state, CUSTOM_TEXT: action.payload
      }
    case CON_INTENSITY_LIGHT:
      return{
        ...state, CON_INTENSITY_LIGHT: action.payload
      }
    case CON_INTENSITY_DARK:
      return{
        ...state, CON_INTENSITY_DARK: action.payload
      }
    case BG_BTN_SAME:
      return{
        ...state, BG_BTN_SAME: action.payload
      }  
    default: return state
  }
}

export default Store