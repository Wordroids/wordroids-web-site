import React from 'react'
import './header.css'
import Businessman from '../../assets/Businessman.png'
import { GiJetpack } from "react-icons/gi";
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'


const Header = () => {
  return (
    <header id="header"> {/* ✅ ADDED ID TO MATCH NAVIGATION */}
      {/* Orange abstract shape */}
      <div className="hero-bg-shape"></div>

      <div className="container header_container">
        <div className="header_text">
          <motion.h1
              variants={fadeIn('right', 0.3)}  // ✅ CORRECT SPELLING
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              Crafting Digital
            </motion.h1>

            <motion.h1
              variants={fadeIn('left', 0.5)}  // You can vary delay for staggered effect
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
