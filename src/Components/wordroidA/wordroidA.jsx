import React from 'react';
import './wordroidA.css';
import Logo from '../../assets/logo.png'; // Replace with your actual logo image

import { RiCheckboxCircleLine, RiCompass3Line, RiPaletteLine } from "react-icons/ri";

const WordroidA = () => {
  return (
    <section className="wordroid-intro">
      <div className="intro-left">
        <div className="logo-circle">
          <img src={Logo} alt="Wordroids Logo" className="w-logo" />
          <span className="since">SINCE 2020</span>
          <div className="circle-decor top"></div>
          <div className="circle-decor bottom"></div>
        </div>
      </div>

      <div className="intro-right">
        <h4 className="intro-subtitle">DISCOVER THE MINDS BEHIND <span className="highlight">WORDROIDS</span></h4>
        <h1 className="intro-title">Bold Team Building Vision<br />Through Creativity</h1>
        <p className="intro-description">
          We don’t just build digital products we build partnerships through experience and strategy.
        </p>

        <div className="intro-tabs">
          <span className="tab active"><RiCheckboxCircleLine /> OVERVIEW</span>
          <span className="tab"><RiCompass3Line /> WHAT GUIDES US</span>
          <span className="tab"><RiPaletteLine /> CORE STYLE</span>
        </div>

        <p className="intro-paragraph">
          We are a multidisciplinary team of thinkers, builders, and creators. At Wordroids, we specialize in transforming abstract ideas into functional, high-performance digital experiences that deliver real value, both creatively and strategically.
        </p>

        <p className="intro-paragraph">
          We collaborate with bold brands that seek more than templates. If you believe in originality and purposeful innovation, we’re ready to say <span className="link">let’s build together.</span>
        </p>
      </div>
    </section>
  );
};

export default WordroidA;
