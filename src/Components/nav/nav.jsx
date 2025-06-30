import React, { useState } from 'react'
import './nav.css'
import logo from '../../assets/logo.png'

// Icons

import { MdHome } from "react-icons/md"
import { TbCircleLetterIFilled } from "react-icons/tb" 
import { SiBlueprint } from "react-icons/si"
import { GiOpenBook } from "react-icons/gi" 
import { AiFillMessage } from "react-icons/ai" 


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

      {/* <nav className="button-nav">
        <button
          onClick={() => handleNavClick('#header')}
          className={activeNav === '#header' ? 'nav-btn active' : 'nav-btn'}
        >
          <MdHome className="nav-icon" />
          <span className="nav-text">WELCOME</span>
        </button>

        <button
          onClick={() => handleNavClick('#about')}
          className={activeNav === '#about' ? 'nav-btn active' : 'nav-btn'}
        >
          <TbCircleLetterIFilled className="nav-icon" />
          <span className="nav-text">WORDROIDS</span>
        </button>

        <button
          onClick={() => handleNavClick('#service')}
          className={activeNav === '#service' ? 'nav-btn active' : 'nav-btn'}
        >
          < SiBlueprint className="nav-icon" />
          <span className="nav-text">BLUEPRINTS</span>
        </button>

        <button
          onClick={() => handleNavClick('#projects')}
          className={activeNav === '#projects' ? 'nav-btn active' : 'nav-btn'}
        >
          < GiOpenBook className="nav-icon" />
          <span className="nav-text">INNOVATIONS</span>
        </button>

        <button
          onClick={() => handleNavClick('#questions')}
          className={activeNav === '#questions' ? 'nav-btn active' : 'nav-btn'}
        >
          <AiFillMessage className="nav-icon" />
          <span className="nav-text">SUPPORT</span>
        </button>
      </nav> */}

      
    </>
  )
}

export default Nav
