import React from 'react';
import './wordroidC.css';
import { FiSearch, FiPenTool, FiCode, FiTrendingUp } from 'react-icons/fi';
import { RiH1 } from 'react-icons/ri';


const WordroidC = () => {
  return (
    <section className="process">
      <div className="process-header">
        <h4 className="process-subtitle">
          A <span className="highlight">PROCESS</span> SHAPED BY COLLABORATION
        </h4>
        <h1 className="process-title">
          We Build With Purpose Across<br></br>
          Every Key Phase
        </h1>
        <p className="process-description">
          From planning to launch, our streamlined workflow ensures clarity, speed,
          and measurable outcomes for every client
        </p>
      </div>

      <div className="process-steps">
        <div className="step">
          <FiSearch className="step-icon" />
          <div className="step-content">
            <h3>Discover What You Need</h3>
            <p>We dive into your business goals, audience, and challenges to craft a clear, effective, and focused digital strategy</p>
          </div>
        </div>

        <div className="step">
          <FiPenTool className="step-icon" />
          <div className="step-content">
            <h3>Design for Real Impact</h3>
            <p>User-first interfaces, powerful visuals, and functional flows — designed to engage your audience and elevate your brand presence.</p>
          </div>
        </div>

        <div className="step">
          <FiCode className="step-icon" />
          <div className="step-content">
            <h3>Develop With Scalable Tech</h3>
            <p>We build responsive, secure, high-performance solutions using modern frameworks tailored for growth, flexibility, and future integration</p>
          </div>
        </div>

        <div className="step">
          <FiTrendingUp className="step-icon" />
          <div className="step-content">
            <h3>Launch Learn and Grow</h3>
            <p>Your product goes live but that's just the beginning. We analyze, adapt, and evolve based on real user feedback.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordroidC;
