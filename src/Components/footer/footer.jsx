import React, { useState } from 'react'
import './footer.css'
import { MdHome } from "react-icons/md"
import { GiOpenBook } from "react-icons/gi"
import { AiFillMessage } from "react-icons/ai"
import { SiBlueprint } from "react-icons/si"
import { TbCircleLetterIFilled } from "react-icons/tb"

const Footer = () => {
  const [activeNav, setActiveNav] = useState('#welcome')

  const handleNavClick = (id) => {
    setActiveNav(id)
    document.getElementById(id.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <a href="#" className='footer_logo'></a>   

      <div className="footer_socials">
        info@wordroids.com
        Washinton, DC Greenville, Colombo
        077 656 9740
      </div>

      <div className="button-footer">
        <button
          onClick={() => handleNavClick('#welcome')}
          className={activeNav === '#welcome' ? 'footer-btn active' : 'footer-btn'}
        >
          <MdHome className="footer-icon" />
          <span className="footer-text">WELCOME</span>
        </button>

        <button
          onClick={() => handleNavClick('#wordroids')}
          className={activeNav === '#wordroids' ? 'footer-btn active' : 'footer-btn'}
        >
          <SiBlueprint className="footer-icon" />
          <span className="footer-text">WORDROIDS</span>
        </button>

        <button
          onClick={() => handleNavClick('#blueprints')}
          className={activeNav === '#blueprints' ? 'footer-btn active' : 'footer-btn'}
        >
          <GiOpenBook className="footer-icon" />
          <span className="footer-text">BLUEPRINTS</span>
        </button>

        <button
          onClick={() => handleNavClick('#innovations')}
          className={activeNav === '#innovations' ? 'footer-btn active' : 'footer-btn'}
        >
          <TbCircleLetterIFilled className="footer-icon" />
          <span className="footer-text">INNOVATIONS</span>
        </button>

        <button
          onClick={() => handleNavClick('#support')}
          className={activeNav === '#support' ? 'footer-btn active' : 'footer-btn'}
        >
          <AiFillMessage className="footer-icon" />
          <span className="footer-text">SUPPORT</span>
        </button>
      </div>

      <div className="footer_copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
