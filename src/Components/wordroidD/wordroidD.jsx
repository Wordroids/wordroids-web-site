import React, { useState } from 'react';
import './wordroidD.css';
import hand from '../../assets/hand.png';

const sections = [
  {
    title: 'We Think With Purpose',
    description: 'We solve problems by deeply understanding user needs and aligning ideas with strategy, value, and long-term business goals.',
  },
  {
    title: 'We Focus on Outcomes',
    description: 'Every decision we make is measured against real-world results: conversions, engagement, usability, and business success.',
  },
  {
    title: 'We Design With Meaning',
    description: 'We blend visual clarity with emotional connection, delivering designs that are beautiful, intuitive, and brand-aligned.',
  },
  {
    title: 'We Build With Precision',
    description: 'Our development process is detail-obsessed: structured, scalable, and crafted with clean, performance-focused, secure code.',
  },
  {
    title: 'We Adapt Through Learning',
    description: 'With continuous feedback and evolving tech, we improve solutions that stay relevant, modern, and ahead of market changes.',
  },
  {
    title: 'We Launch With Confidence',
    description: 'From testing to deployment, we ensure each product performs reliably, scales efficiently, and makes a powerful first impression.',
  },
];

export default function ImpactSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  return (
    <div className="impact-section">
      <h4 className="impact-power">
        THE <span className="highlight">POWER</span> BEHIND EVERYTHING WE CREATE
      </h4>
      <h1 className="impact-title">
        Ideas and Technology Working Together for <br />Impactful Results
      </h1>
      <p className="impact-desc">
        From thoughtful strategy to sharp design and smart code, our power comes from working with intent, curiosity, and<br></br> collaborative energy every step forward.
      </p>
      <div className="impact-grid">
        {sections.map((section, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              className={`impact-card ${isActive ? 'active' : ''}`}
              key={idx}
              onClick={() => handleCardClick(idx)}
            >
              <div className={`impact-icon ${isActive ? 'active-icon' : ''}`}>
                <img src={hand} alt="Hand Icon" className="hand-icon-img" />
              </div>
              <h3 className={`impact-title-text ${isActive ? 'active-title' : ''}`}>
                <span className={`highlight ${isActive ? 'active-highlight' : ''}`}>
                  {section.title.split(' ')[0]}
                </span>
                {' '}{section.title.substring(section.title.indexOf(' '))}
              </h3>
              <p>{section.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
