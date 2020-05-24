import {
  BLUR_DARK, 
  TEXT_SIZE, 
  TEXT_COLOR, 
  BLUR_LIGHT, 
  CUSTOM_TEXT, 
  BG_BTN_SAME,
  BUTTON_WIDTH,
  LIGHT_SOURCE,
  DISTANCE_DARK,
  BUTTON_HEIGHT,
  BUTTON_RADIUS,
  INTENSITY_DARK, 
  DISTANCE_LIGHT, 
  INTENSITY_LIGHT, 
  BACKGROUND_COLOR,
  BUTTON_BACKGROUND, 
  CON_INTENSITY_DARK,
  CON_INTENSITY_LIGHT, 
} from './action.types'

export function BUTTON_RADIUS_SET(val){
return{
  type: BUTTON_RADIUS,
  payload: val
}}

export function LIGHT_SOURCE_SET(val){
return{
  type: LIGHT_SOURCE,
  payload: val
}}

export function BUTTON_WIDTH_SET(val){
return{
  type: BUTTON_WIDTH,
  payload: val
}}

export function BUTTON_HEIGHT_SET(val){
return{
  type: BUTTON_HEIGHT,
  payload: val
}}

  export function BACKGROUND_COLOR_SET(val){
return{
  type: BACKGROUND_COLOR,
  payload: val
}}

export function TEXT_COLOR_SET(val){
  return{
    type:TEXT_COLOR,
    payload: val
  }}

export function DISTANCE_LIGHT_SET(val){
  return{
    type:DISTANCE_LIGHT,
    payload: val
  }}

export function DISTANCE_DARK_SET(val){
  return{
    type: DISTANCE_DARK,
    payload: val
  }}

export function INTENSITY_LIGHT_SET(val){
  return{
    type:INTENSITY_LIGHT,
    payload: val
  }}

export function INTENSITY_DARK_SET(val){
  return{
    type:INTENSITY_DARK,
    payload: val
  }}

export function BLUR_LIGHT_SET(val){
  return{
    type:BLUR_LIGHT,
    payload: val
  }}

export function BLUR_DARK_SET(val){
  return{
    type:BLUR_DARK,
    payload: val
  }}

export function BUTTON_BACKGROUND_SET(val){
  return{
    type:BUTTON_BACKGROUND,
    payload: val
  }}

export function TEXT_SIZE_SET(val){
  return{
    type:TEXT_SIZE,
    payload: val
  }} 

export function CUSTOM_TEXT_SET(val){
  return{
    type:CUSTOM_TEXT,
    payload: val
  }}

export function CON_INTENSITY_LIGHT_SET(val){
  return{
    type:CON_INTENSITY_LIGHT,
    payload: val
  }}

export function CON_INTENSITY_DARK_SET(val){
  return{
    type:CON_INTENSITY_DARK,
    payload: val
  }}

export function BG_BTN_SAME_SET(val){
  return{
      type: BG_BTN_SAME,
      payload: val
  }}
  
