import React, { useState } from 'react';
import './blueprintsC.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Healthcare1 from '../../assets/healthcare1.jpg';
import Healthcare2 from '../../assets/healthcare2.jpg';
import Automative1 from '../../assets/automative1.jpg';
import Automative2 from '../../assets/automative2.jpg';
import ECommerse1 from '../../assets/e-commerce1.jpg';
import ECommerse2 from '../../assets/e-commerce2.jpg';
import Education1 from '../../assets/education1.jpg';
import Education2 from '../../assets/education2.jpg';
import Enterprise1 from '../../assets/enterprise1.jpg';
import Enterprise2 from '../../assets/enterprise2.jpg';
import LifeStyle1 from '../../assets/lifestyle1.jpg';
import LifeStyle2 from '../../assets/lifestyle2.jpg';

const INDUSTRIES = [
  {
    title: "Healthcare",
    description1: "We create healthcare platforms to streamline appointments and patient communication.",
    description2: "From dashboards to patient portals, we design secure, HIPAA-compliant systems.",
    image: Healthcare1,
    tags: ["APPOINTMENT PLATFORMS", "PATIENT PORTALS", "CLINIC WEBSITES", "MEDICAL DASHBOARDS"]
  },
  { image: Healthcare2 },

  {
    title: "Automotive",
    description1: "We develop sleek, responsive dealership and service platforms that build trust.",
    description2: "Manage inventory, handle bookings, and boost engagement with elegant interfaces.",
    image: Automative1,
    tags: ["SERVICE PLATFORMS", "DEALER PORTALS", "VEHICLE SHOWCASE", "BOOKING SYSTEMS"]
  },
  { image: Automative2 },

  {
    title: "E-Commerce",
    description1: "Build scalable e-commerce systems with integrated payments and smart search.",
    description2: "From B2C storefronts to B2B portals, we help brands convert and retain customers.",
    image: ECommerse1,
    tags: ["PRODUCT PAGES", "CHECKOUT FLOWS", "ADMIN DASHBOARDS", "MOBILE STORES"]
  },
  { image: ECommerse2 },

  {
    title: "Education",
    description1: "Deliver knowledge through LMS systems, virtual classrooms, and portals.",
    description2: "Empower students and educators with clean, intuitive digital experiences.",
    image: Education1,
    tags: ["LMS", "EXAM PORTALS", "VIDEO LECTURES", "INSTITUTION SITES"]
  },
  { image: Education2 },

  {
    title: "Enterprise",
    description1: "Build internal tools, dashboards, and ERPs that scale with your workforce.",
    description2: "We create modular enterprise-grade systems tailored to your operations.",
    image: Enterprise1,
    tags: ["ERP SYSTEMS", "DATA VISUALIZATION", "TEAM DASHBOARDS", "INTRANETS"]
  },
  { image: Enterprise2 },

  {
    title: "Lifestyle",
    description1: "Support wellness, fashion, travel, and lifestyle brands with inspiring designs.",
    description2: "Connect with audiences through personalized, media-rich experiences.",
    image: LifeStyle1,
    tags: ["BLOGS", "PRODUCT LANDING", "PERSONAL JOURNALS", "PORTFOLIO SITES"]
  },
  { image: LifeStyle2 }
];

const BlueprintsC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = INDUSTRIES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % INDUSTRIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length);
  };

  return (
    <div className="blueprintsC-section">
      <div className="intro-text">
        <p className="highlight">INNOVATING ACROSS EVERY <span>INDUSTRY</span> WE TOUCH</p>
        <h1>Adapting Digital Solutions to Match Each <br />Industry’s Unique Pulse</h1>
        <p className="sub-text">
          We empower diverse industries with custom digital products that solve real problems, deliver measurable results,
          and scale with purpose — all shaped by deep understanding of their domain.
        </p>
      </div>

      <div
        className="blueprintsC-highlight"
        style={{
          backgroundImage: `url(${current.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="overlay">
          <div className="arrow left" onClick={handlePrev}><FaArrowLeft /></div>

          {current.title && (
            <div className="blueprintsC-content">
              <h2>{current.title}</h2>
              <p>{current.description1}</p>
              <p>{current.description2}</p>
              <div className="platform-buttons">
                {current.tags?.map((tag, i) => (
                  <button key={i}>{tag}</button>
                ))}
              </div>
            </div>
          )}

          <div className="arrow right" onClick={handleNext}><FaArrowRight /></div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintsC;
