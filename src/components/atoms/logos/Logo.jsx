import React from 'react'
import easybank from '../../../assets/easybank-logo.svg'
import easybankWhite from '../../../assets/easybank-logo-white.svg'
const Logo = ({inverted}) => {
  return <img src={inverted ? easybankWhite : easybank} alt="Easybank Logo"/>
}

export default Logo;