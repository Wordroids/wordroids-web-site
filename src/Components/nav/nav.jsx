import React, { useState } from 'react'
import './nav.css'
import logo from '../../assets/logo.png'

// Icons

import { MdHome } from "react-icons/md"
import { GiOpenBook } from "react-icons/gi"
import { AiFillMessage } from "react-icons/ai"
import { SiBlueprint } from "react-icons/si"
import { TbCircleLetterIFilled } from "react-icons/tb"


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#welcome')

  const handleNavClick = (id) => {
    setActiveNav(id)
    document.getElementById(id.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Tube above nav bar */}
      <div className="nav-tube">
        <span>Book a Free Consultation - Let's Discuss Your Digital Needs!</span>
      </div>

      <nav className="button-nav">
        <button
          onClick={() => handleNavClick('#welcome')}
          className={activeNav === '#welcome' ? 'nav-btn active' : 'nav-btn'}
        >
          <MdHome className="nav-icon" />
          <span className="nav-text">WELCOME</span>
        </button>

        <button
          onClick={() => handleNavClick('#wordroids')}
          className={activeNav === '#wordroids' ? 'nav-btn active' : 'nav-btn'}
        >
          <SiBlueprint className="nav-icon" />
          <span className="nav-text">WORDROIDS</span>
        </button>

        <button
          onClick={() => handleNavClick('#blueprints')}
          className={activeNav === '#blueprints' ? 'nav-btn active' : 'nav-btn'}
        >
          < GiOpenBook className="nav-icon" />
          <span className="nav-text">BLUEPRINTS</span>
        </button>

        <button
          onClick={() => handleNavClick('#innovations')}
          className={activeNav === '#innovations' ? 'nav-btn active' : 'nav-btn'}
        >
          <TbCircleLetterIFilled className="nav-icon" />
          <span className="nav-text">INNOVATIONS</span>
        </button>

        <button
          onClick={() => handleNavClick('#support')}
          className={activeNav === '#support' ? 'nav-btn active' : 'nav-btn'}
        >
          <AiFillMessage className="nav-icon" />
          <span className="nav-text">SUPPORT</span>
        </button>
      </nav>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </>
  )
}

export default Nav
