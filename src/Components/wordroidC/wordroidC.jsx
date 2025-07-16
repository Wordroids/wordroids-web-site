import React, { useState } from 'react';
import './wordroidC.css';
import { FiSearch, FiPenTool, FiCode, FiTrendingUp } from 'react-icons/fi';

const WordroidC = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index); // toggle on second click
  };

  const stepsWC = [
    {
      icon: <FiSearch className="step-iconWC" />,
      title: 'Discover What You Need',
      description: 'We dive into your business goals, audience, and challenges to craft a clear, effective, and focused digital strategy'
    },
    {
      icon: <FiPenTool className="step-iconWC" />,
      title: 'Design for Real Impact',
      description: 'User-first interfaces, powerful visuals, and functional flows — designed to engage your audience and elevate your brand presence.'
    },
    {
      icon: <FiCode className="step-iconWC" />,
      title: 'Develop With Scalable Tech',
      description: 'We build responsive, secure, high-performance solutions using modern frameworks tailored for growth, flexibility, and future integration'
    },
    {
      icon: <FiTrendingUp className="step-iconWC" />,
      title: 'Launch Learn and Grow',
      description: "Your product goes live but that's just the beginning. We analyze, adapt, and evolve based on real user feedback."
    }
  ];

  return (
    <section className="processWC">
      <div className="process-headerWC">
        <h4 className="process-subtitleWC">
          A <span className="highlightWC">PROCESS</span> SHAPED BY COLLABORATION
        </h4>
        <h1 className="process-titleWC">
          We Build With Purpose Across<br></br>
          Every Key Phase
        </h1>
        <p className="process-descriptionWC">
          From planning to launch, our streamlined workflow ensures clarity, speed,
          and measurable outcomes for every client
        </p>
      </div>

      <div className="process-stepsWC">
        {stepsWC.map((stepWC, indexWC) => (
          <div
            key={indexWC}
            className={`stepWC ${activeStep === indexWC ? 'active-step' : ''}`}
            onClick={() => handleStepClick(indexWC)}
          >
            {stepWC.icon}
            <div className="step-contentWC">
              <h3>{stepWC.title}</h3>
              <p>{stepWC.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WordroidC;