import React from 'react';
import './blueprintsC.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Education from '../../assets/education.jpg';

const BlueprintsC = () => {
  return (
    <div className="blueprintsC-section">
      <div className="intro-text">
        <p className="highlight">INNOVATING ACROSS EVERY <span>INDUSTRY</span> WE TOUCH</p>
        <h1>Adapting Digital Solutions to Match Each <br />Industry’s Unique Pulse</h1>
        <p className="sub-text">
          We empower diverse industries with custom digital products that solve real problems, deliver measurable results,
          and scale with purpose all shaped by deep understanding of their domain.
        </p>
      </div>

      <div
        className="blueprintsC-highlight"
        style={{
          backgroundImage: `url(${Education})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="overlay">
          <div className="arrow left"><FaArrowLeft /></div>

          <div className="blueprintsC-content">
            <h2>Healthcare</h2>
            <p>
              We develop sleek, responsive dealership and service platforms that build trust and streamline the
              vehicle discovery journey.
            </p>
            <p>
              Boost engagement, manage inventory, and handle bookings all through elegant, optimized interfaces.
            </p>
            <div className="platform-buttons">
              <button>APPOINTMENT PLATFORMS</button>
              <button>PATIENT PORTALS</button>
              <button>CLINIC WEBSITES</button>
              <button>MEDICAL DASHBOARDS</button>
            </div>
          </div>

          <div className="arrow right"><FaArrowRight /></div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintsC;