import React,{useContext} from 'react'
import { invertColor } from "../../../store/util";
import { NeoContext } from '../../../store/context';
import BoxLine from '../box-line/box-line.component'


import './boxes.styles.scss'
const Boxes = () => {
  const { state:{ BACKGROUND_COLOR }} = useContext(NeoContext)

  return (
    <div className='Boxes' style={{borderBottom: `1px solid ${invertColor(BACKGROUND_COLOR)}`}}>
      <BoxLine type={0}/>
      <BoxLine type={1}/>
      <BoxLine type={2}/>
      <BoxLine type={3}/>
    </div>
  )
}

export default Boxes
