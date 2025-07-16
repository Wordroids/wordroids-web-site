import React from 'react';
import './blueprintsD.css';
import { FaPaintBrush, FaCogs, FaLeaf } from 'react-icons/fa';

const BlueprintsD = () => {
  return (
    <section className="approach-sectionD">
      <p className="small-title">CREATIVE <span>MINDSET</span> MEETS LAUNCH-READY EXECUTION</p>
      <h1 className="main-title">From Raw Ideas to Beautiful, Working Solutions</h1>
      <p className="description">
        We think like artists and build like engineers. Every line of code, every pixel of design driven by purpose and polished by passion
      </p>
      <p className="description">
        Let’s turn your ideas into impact with a process rooted in clarity, experimentation, and human-first thinking. <br />
        <span className="highlight-link">Let’s build something incredible together.</span>
      </p>

      <div className="cardsD">
        <div className="cardD">
          <FaPaintBrush className="iconD" />
          <h3>CREATIVE FIRST</h3>
          <p>Design isn’t decoration. It’s a system of emotion and logic</p>
        </div>
        <div className="cardD">
          <FaCogs className="iconD" />
          <h3>TECH SMART</h3>
          <p>We build lean, scalable platforms using modern tools, no bloat</p>
        </div>
        <div className="cardD">
          <FaLeaf className="iconD" />
          <h3>ALWAYS EVOLVING</h3>
          <p>We experiment. Learn. Break. Rebuild. Better every time</p>
        </div>
      </div>

      <div className="processD">
        <div className="process-rowD top-row">
          <div className="step1">
            <h4>EXPLORE THE CHALLENGE</h4>
            <p>We begin by deeply understanding your goals, audience, and real problem.</p>
          </div>
          <div className="step2">
            <h4>DESIGN & BUILD FAST</h4>
            <p>We prototype fast. Build smart. Iterate based on real feedback.</p>
          </div>
        </div>

        <div className="process-timelineD">
          <span className="dotD">01</span>
          <span className="dotD">02</span>
          <span className="dotD">03</span>
          <span className="dotD">04</span>
        </div>

        <div className="process-rowD bottom-row">
          <div className="step3">
            <h4>SKETCH THE SOLUTION</h4>
            <p>Rapid wireframes, mindmaps, and concept flows to visualize early direction.</p>
          </div>
          <div className="step4">
            <h4>LAUNCH, MEASURE, IMPROVE</h4>
            <p>Push live, monitor performance, and refine for growth and longevity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintsD;
