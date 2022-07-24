import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/organism/FooterOrganism/Footer'
import NavBar from '../components/organism/NavBarOrganism/NavBar'

const Layout = ({children}) => {
  return (
    <div className='c-layout'>
        <NavBar />
        {children}
        <Outlet />
        <Footer />
        
    </div>
  )
}

export default Layout