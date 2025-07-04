import React, { useState, useEffect } from 'react';
import './header.css';

import Businessman from '../../assets/Businessman.png';
import Logo from '../../assets/logo.png';
import { GiJetpack } from "react-icons/gi";

import { MdHome } from "react-icons/md";
import { TbCircleLetterIFilled } from "react-icons/tb";
import { SiBlueprint } from "react-icons/si";
import { GiOpenBook } from "react-icons/gi";
import { AiFillMessage } from "react-icons/ai";

import bg1 from '../../assets/Ellipse 12.png';
import vector from '../../assets/Vector.png';
import vector1 from '../../assets/Vector1.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev >= 18 ? 1 : prev + 1));
    }, 500); // Change speed here (500ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <header id="header">
      {/* Background layers */}
      <img src={bg1} alt="Background" className="header-bg" />
      <img src={vector} alt="Vector" className="header-wave" />
      <img src={vector1} alt="Vector Overlay" className="header-wave-overlay" />

      {/* Navigation Bar */}
      <nav className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className={`nav-tube ${scrolled ? 'scrolled' : ''}`}>
          <span>Book a Free Consultation - Let's Discuss Your Digital Needs!</span>
        </div>
        <div className="logo-box">
          <img src={Logo} alt="Wordroids Logo" className="logo-img" />
        </div>
        <div className="navbar-links">
          <a href="####" className="nav-btn"><MdHome className="nav-icon" />WELCOME</a>
          <a href="#####" className="nav-btn"><TbCircleLetterIFilled className="nav-icon" />WORDROIDS</a>
          <a href="####" className="nav-btn"><SiBlueprint className="nav-icon" />BLUEPRINTS</a>
          <a href="####" className="nav-btn"><GiOpenBook className="nav-icon" />INNOVATIONS</a>
          <a href="####" className="nav-btn"><AiFillMessage className="nav-icon" />SUPPORT</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-bg-shape"></div>
      <div className="container header_container">
        <div className="header_text">
          <h1>Crafting Digital</h1>
          <h1>Masterpieces</h1>
          <p>From visionary web solutions to stunning designs, Wordroids <br />transforms your digital dreams into reality.</p>
          <h4>Let's innovate together!</h4>
          <div className='welcome_button'>
            <a href="#about" className='btn btn-primary'>GET STARTED TODAY!</a>
          </div>
        </div>

        {/* Businessman Image */}
        <div className="man">
          <img src={Businessman} alt="Businessman" />
        </div>

        {/* Animated Project Card */}
        <div className="projects-card">
          <GiJetpack className="projects-icon" />
          <span>
            <span className="orange-number">{count}+</span><br />
            Successful Projects
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
