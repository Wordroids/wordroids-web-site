import React, { useState } from 'react';
import './wordroidC.css';
import { FiSearch, FiPenTool, FiCode, FiTrendingUp } from 'react-icons/fi';

const WordroidC = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index); // toggle on second click
  };

  const steps = [
    {
      icon: <FiSearch className="step-icon" />,
      title: 'Discover What You Need',
      description: 'We dive into your business goals, audience, and challenges to craft a clear, effective, and focused digital strategy'
    },
    {
      icon: <FiPenTool className="step-icon" />,
      title: 'Design for Real Impact',
      description: 'User-first interfaces, powerful visuals, and functional flows — designed to engage your audience and elevate your brand presence.'
    },
    {
      icon: <FiCode className="step-icon" />,
      title: 'Develop With Scalable Tech',
      description: 'We build responsive, secure, high-performance solutions using modern frameworks tailored for growth, flexibility, and future integration'
    },
    {
      icon: <FiTrendingUp className="step-icon" />,
      title: 'Launch Learn and Grow',
      description: "Your product goes live but that's just the beginning. We analyze, adapt, and evolve based on real user feedback."
    }
  ];

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
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${activeStep === index ? 'active-step' : ''}`}
            onClick={() => handleStepClick(index)}
          >
            {step.icon}
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WordroidC;
