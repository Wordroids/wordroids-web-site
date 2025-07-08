import React, { useState } from 'react';
import './wordroidA.css';
import Logo from '../../assets/logo.png'; 
import Ellipse1 from '../../assets/Ellipse1.png';
import Ellipse2 from '../../assets/Ellipse2.png';

import { RiCheckboxCircleLine, RiCompass3Line, RiPaletteLine } from "react-icons/ri";

const TABS = [
  {
    label: "OVERVIEW",
    icon: <RiCheckboxCircleLine />,
    content: (
      <>
        <p className="intro-paragraph">
          We are a multidisciplinary team of thinkers, builders, and creators. At Wordroids, we specialize in transforming abstract ideas into functional, high-performance digital experiences that deliver real value, both creatively and strategically.
        </p>
        <p className="intro-paragraph">
          We collaborate with bold brands that seek more than templates. If you believe in originality and purposeful innovation, we’re ready to say <span className="link">let’s build together.</span>
        </p>
      </>
    )
  },
  {
    label: "WHAT GUIDES US",
    icon: <RiCompass3Line />,
    content: (
      <div className="guides-content">
        <div className="mission-vision">
          <div>
            <h4 className="mission-title">Mission</h4>
            <p className="mission-desc">
              We deliver high-performance digital solutions that help businesses grow with purpose and precision in a constantly evolving world.
            </p>
          </div>
          <div>
            <h4 className="vision-title">Vision</h4>
            <p className="vision-desc">
              We aim to become a globally recognized creative-tech partner for visionary companies looking to lead with innovation.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "CORE STYLE",
    icon: <RiPaletteLine />,
    content: (
      <div className="core-style-list">
        <div className="core-style-row">
          <span className="core-style-pill"><span className="highlighted">Precision</span> First Thinking</span>
          <span className="core-style-pill">Minimal with <span className="highlighted">Boldness</span></span>
        </div>
        <div className="core-style-row">
          <span className="core-style-pill">Designed for <span className="highlighted">Scalability</span></span>
          <span className="core-style-pill">Always <span className="highlighted">Mobile-First</span></span>
        </div>
        <div className="core-style-row">
          <span className="core-style-pill">Built for <span className="highlighted">Tomorrow</span></span>
          <span className="core-style-pill">Emotionally <span className="highlighted">Engaging</span></span>
          <span className="core-style-pill">Privacy <span className="highlighted">Respectful</span></span>
        </div>
      </div>
    )
  }
];

const WordroidA = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to "WHAT GUIDES US"

  return (
    <section className="wordroid-intro">
      <div className="intro-left">
        <div className="logo-circle">
          <img src={Logo} alt="Wordroids Logo" className="w-logo" />

          {/* Ellipse wrappers for rotating ellipses */}
          <div className="ellipse-wrapper ellipse1">
            <img src={Ellipse1} alt="Ellipse 1" className="ellipse" />
          </div>
          <div className="ellipse-wrapper ellipse2">
            <img src={Ellipse2} alt="Ellipse 2" className="ellipse" />
          </div>
        </div>
      </div>

      <div className="intro-right">
        <h4 className="intro-subtitle">
          DISCOVER THE MINDS BEHIND <span className="highlight">WORDROIDS</span>
        </h4>
        <h1 className="intro-title">
          Bold Team Building Vision<br />Through Creativity
        </h1>
        <p className="intro-description">
          We don’t just build digital products we build partnerships through experience and strategy.
        </p>

        <div className="intro-tabs">
          {TABS.map((tab, idx) => (
            <span
              className={`tab${activeTab === idx ? " active" : ""}`}
              key={tab.label}
              onClick={() => setActiveTab(idx)}
            >
              {tab.icon} {tab.label}
            </span>
          ))}
        </div>

        <div className="tab-content">
          {TABS[activeTab].content}
        </div>
      </div>
    </section>
  );
};

export default WordroidA;
