import React from 'react'
import './header.css'
import Businessman from '../../assets/Businessman.png'
import Logo from '../../assets/logo.png' 
import { GiJetpack } from "react-icons/gi";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { MdHome } from "react-icons/md"
import { TbCircleLetterIFilled } from "react-icons/tb" 
import { SiBlueprint } from "react-icons/si"
import { GiOpenBook } from "react-icons/gi" 
import { AiFillMessage } from "react-icons/ai" 

const Header = () => {
  return (
    <header id="header">
      {/* Navigation Bar */}
      <nav className="main-navbar">
        <div className="logo-box">
          <img src={Logo} alt="Wordroids Logo" className="logo-img" />
        </div>
        <div className="navbar-links">
          <a href="#welcome" className="nav-btn active">
            <MdHome className="nav-icon" />
            WELCOME
          </a>
          <a href="#wordroids" className="nav-btn">
            <TbCircleLetterIFilled className="nav-icon" />
            WORDROIDS
          </a>
          <a href="#blueprints" className="nav-btn">
            <SiBlueprint className="nav-icon" />
            BLUEPRINTS
          </a>
          <a href="#innovations" className="nav-btn">
            <GiOpenBook className="nav-icon" />
            INNOVATIONS
          </a>
          <a href="#support" className="nav-btn">
            <AiFillMessage className="nav-icon" />
            SUPPORT
          </a>
        </div>
      </nav>
      {/* Abstract orange shape */}
      <div className="hero-bg-shape"></div>
      <div className="container header_container">
        <div className="header_text">
          <motion.h1
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            Crafting Digital
          </motion.h1>
          <motion.h1
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            animate="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            Masterpieces
          </motion.h1>
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
