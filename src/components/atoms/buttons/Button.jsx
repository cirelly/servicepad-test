import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button {...props} className='c-button'>{children}</button>
  )
}

export default Button;