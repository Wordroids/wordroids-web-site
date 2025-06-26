import React from 'react'
import './header.css'
import Businessman from '../../assets/Businessman.png'
import { GiJetpack } from "react-icons/gi";

const Header = () => {
  return (
    <header id="header"> {/* ✅ ADDED ID TO MATCH NAVIGATION */}
      {/* Orange abstract shape */}
      <div className="hero-bg-shape"></div>

      <div className="container header_container">
        <div className="header_text">
          <h1>Crafting Digital</h1>
          <h1>Masterpieces</h1>
          <p>
            From visionary web solutions to stunning designs, Wordroids <br />
            transforms your digital dreams into reality.
          </p>
          <h4>Let's innovate together!</h4>
          <div className='welcome_button'>
            <a href="#contact" className='btn btn-primary'>GET STARTED TODAY!</a>
          </div>
        </div>

        <div className="man">
          <img src={Businessman} alt="man" />
          <div className="projects-card">
            <GiJetpack className="projects-icon" />
            <span>
              <strong>18+</strong><br />
              Successful Projects
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
