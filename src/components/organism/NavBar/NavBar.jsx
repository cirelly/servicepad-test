import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../atoms/buttons/Button'
import Logo from '../../atoms/logos/Logo'

const NavBar = () => {
  return (
    <nav className='c-navHeader'>
        <div className='c-navHeader c-navHeader__container'>
          <Link to='/' style={{maxWidth: '141px'}} >
            <Logo/>
          </Link>

          <ul className='c-navHeader__list'>
            <li>
              <Link className='active-nav' to='#'>
                Home
              </Link>
            </li>
            <li>
              <Link to='#'>
                About
              </Link>
            </li>
            <li>
              <Link to='#'>
                Contact
              </Link>
            </li>
            <li>
              <Link to='#'>
                Blog
              </Link>
            </li>
            <li>
              <Link to='#'>
                Careers
              </Link>
            </li>
          </ul>
          <Button>Request Invite</Button>
        </div>

    </nav>
  )
}

export default NavBar