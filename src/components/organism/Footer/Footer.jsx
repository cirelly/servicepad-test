import React from 'react'
import FacebookIcon from '../../atoms/icon/FacebookIcon';
import LinksNav from '../../molecules/Footer/LinksNav';
import LogoRRSS from '../../molecules/Footer/LogoRRSS';
import RightsReserved from '../../molecules/Footer/RightsReserved';


const Footer = () => {
  return (
    <footer className='c-footer'>
       <div className='c-footer__container'>
       <LogoRRSS />
       <LinksNav />
       <RightsReserved />
       </div>
    </footer>
  )
}

export default Footer;