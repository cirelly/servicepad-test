import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '../../atoms/icon/FacebookIcon'
import InstagramIcon from '../../atoms/icon/InstagramIcon'
import PinterestIcon from '../../atoms/icon/PinterestIcon'
import TwitterIcon from '../../atoms/icon/TwitterIcon'
import YoutubeIcon from '../../atoms/icon/YoutubeIcon'
import Logo from '../../atoms/logos/Logo'

const LogoRRSS = () => {
  return (
    <div className='c-footer__section1'>
        <div className='c-footer__logo'>
        <Logo inverted />
        </div>
        <div className='c-footer__rrss'>
            <Link to='#'><FacebookIcon /></Link>
            <Link to='#'><YoutubeIcon /></Link>
            <Link to='#'> <TwitterIcon /></Link>
            <Link to='#'><PinterestIcon /></Link>
            <Link to='#'><InstagramIcon /></Link>
        </div>
    </div>
  )
}

export default LogoRRSS