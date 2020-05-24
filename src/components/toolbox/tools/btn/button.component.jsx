import React from 'react'
import './button.styles.scss'

const Button = ({children, clickHandler}) => {
  return (
      <button className="flat btn-style" 
              onClick={clickHandler}>
        {children}
      </button>
  )
}

export default Button
