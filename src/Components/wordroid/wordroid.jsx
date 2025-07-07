import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './wordroid.css';
import Logo from '../../assets/logo.png';
import { MdHome } from "react-icons/md";
import { TbCircleLetterIFilled } from "react-icons/tb";
import { SiBlueprint } from "react-icons/si";
import { GiOpenBook } from "react-icons/gi";
import { AiFillMessage } from "react-icons/ai";
import WordroidB from '../wordroidB/wordroidB';
import WordroidA from '../wordroidA/wordroidA';
import WordroidC from '../wordroidC/wordroidC';
import WordroidD from '../wordroidD/wordroidD';
import Footer from '../footer/footer';  

const Wordroid = () => {
  const [scrolled, setScrolled] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev >= 18 ? 1 : prev + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="wordroid">
      {/* Navigation Bar */}
      <nav className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className={`nav-tube ${scrolled ? 'scrolled' : ''}`}>
          <span>Book a Free Consultation - Let's Discuss Your Digital Needs!</span>
        </div>
        <div className="logo-box">
          <img src={Logo} alt="Wordroids Logo" className="logo-img" />
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-btn"><MdHome className="nav-icon" />WELCOME</Link>
          <Link to="/wordroid" className="nav-btn"><TbCircleLetterIFilled className="nav-icon" />WORDROIDS</Link>
          <a href="####" className="nav-btn"><SiBlueprint className="nav-icon" />BLUEPRINTS</a>
          <a href="####" className="nav-btn"><GiOpenBook className="nav-icon" />INNOVATIONS</a>
          <a href="####" className="nav-btn"><AiFillMessage className="nav-icon" />SUPPORT</a>
        </div>
      </nav>

      <WordroidB/>
      <WordroidA/>
      <WordroidC/>
      <WordroidD/>
      <Footer />
    </div>
  );
};

export default Wordroid;
