import React, { createContext, useReducer } from 'react';
import Store from './reducers/main_reducer';


const initialState={
  BACKGROUND_COLOR: '#2d50ef',
  TEXT_COLOR: '#6eff00', 
  DISTANCE_LIGHT: 8, 
  DISTANCE_DARK: 12,
  INTENSITY_LIGHT: 10, 
  INTENSITY_DARK: 80, 
  BLUR_LIGHT: 12, 
  BLUR_DARK: 16, 
  BUTTON_BACKGROUND: '#208fd3', 
  TEXT_SIZE: 22, 
  CUSTOM_TEXT: 'NEO-BUTTON', 
  CON_INTENSITY_LIGHT: 22, 
  CON_INTENSITY_DARK: 25,
  BG_BTN_SAME: false,
  BUTTON_WIDTH: 400,
  BUTTON_HEIGHT: 160,
  BUTTON_RADIUS: 50,
  LIGHT_SOURCE: 'TL'
}

export const NeoContext = createContext();


const NeoContextProvider = (props) => {
  // было  const {state, dispatch} = useReducer(Store, initialState)
  const [state, dispatch] = useReducer(Store, initialState)

  
  return (
    <NeoContext.Provider value={{state, dispatch}}>
      {props.children}
    </NeoContext.Provider>
  );
}
 
export default NeoContextProvider;