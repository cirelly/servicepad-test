import React from 'react'

const Button = ({textButton, children, ...props}) => {
  return (
    <button {...props} className={`${textButton ? 'c-textButton' : 'c-button'}`}>{children}</button>
  )
}

export default Button;