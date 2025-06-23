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
       <div className="footer_intro">
            
            <h1>Let's Collaborate to turn your Boldest <br></br>Ideas into Impactful Solutions</h1>
          
      </div> 


      <div className='welcome1_button'>
           <a href= "#contact" className ='btn btn-primary'>GET STARTED TODAY!</a>
      </div>

     <div className="footer_socials">
        <span className="footer_item">info@wordroids.com</span>
        <span className="footer_item">Washington, DC Greenville, Colombo</span>
        <span className="footer_item">077 656 9740</span>
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
