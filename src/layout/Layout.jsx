import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/organism/Footer/Footer'
import NavBar from '../components/organism/NavBar/NavBar'

const Layout = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout