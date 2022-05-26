import React from 'react'
import './Header.css'
import './CTA'
import CTA from './CTA'
import me from '../../assets/devesh.png'
import HeaderSocials from '../header/HeaderSocials'


const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Devesh</h1>
        <h5 className="text-light">Full stack developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header