import React, { useState } from 'react'
import './footer.css'
import { MdHome } from "react-icons/md"
import { GiOpenBook } from "react-icons/gi"
import { AiFillMessage } from "react-icons/ai"
import { SiBlueprint } from "react-icons/si"
import { TbCircleLetterIFilled } from "react-icons/tb"
import Vector2 from '../../assets/Vector2.png'
import Vector3 from '../../assets/Vector3.png'

const Footer = () => {
  const [activeNav, setActiveNav] = useState('#welcome')

  const handleNavClick = (id) => {
    setActiveNav(id)
    document.getElementById(id.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      {/* Image background with overlayed vector and intro */}
      <div className="footer_visual_wrapper">
        <img src={Vector2} alt="Vector2" className="vector2-img" />
        <img src={Vector3} alt="Vector3" className="vector3-img" />
        <div className="footer_intro">
          <h1>
            Let's Collaborate to turn your Boldest <br />
            Ideas into Impactful Solutions
          </h1>
        </div>
      </div>

      {/* CTA Button */}
      <div className="browse_button_wrapper5">
        <button
          className="browse_button5"
          onClick={() =>
            document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <SiBlueprint className="browse_icon5" />
          GET STARTED TODAY!
        </button>
      </div>

      {/* Contact Details */}
      <div className="footer_socials">
        <span className="footer_item">info@wordroids.com</span>
        <span className="footer_item">Washington, DC Greenville, Colombo</span>
        <span className="footer_item">077 656 9740</span>
      </div>

     {/* Navigation Bar */}
      <nav className="footer-navbar">
       
        <div className="footer-links">
          <a href="#header" className="footer-btn">
            <MdHome className="footer-icon" />WELCOME
          </a>
          <a href="#service" className="footer-btn">
            <TbCircleLetterIFilled className="footer-icon" />WORDROIDS
          </a>
          <a href="#about" className="footer-btn">
            <SiBlueprint className="footer-icon" />BLUEPRINTS
          </a>
          <a href="#projects" className="footer-btn">
            <GiOpenBook className="footer-icon" />INNOVATIONS
          </a>
          <a href="#questions" className="footer-btn">
            <AiFillMessage className="footer-icon" />SUPPORT
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <div className="footer_copyright">
        <small>&copy; Copyright 2024 by Wordroids.com</small>
      </div>
    </footer>
  )
}

export default Footer
