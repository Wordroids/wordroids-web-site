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
    description1: "We develop sleek, responsive dealership and service platform that build trust and streamline the vehicle discovery journey.",
    description2: "Boost engagement, manage inventory and handle bookings all through elegant, optimized interfaces.",
    image: Healthcare1,
    tags: ["APPOINTMENT PLATFORMS", "PATIENT PORTALS", "CLINIC WEBSITES", "MEDICAL DASHBOARDS"]
  },
  { image: Healthcare2 },

  {
    title: "Automotive",
    description1: "We create secure, easy-to-use platforms that support better communication between patients ans providers across all devices.",
    description2: "Improving access and digital care quality through customized portals, automation and fast health data visibility.",
    image: Automative1,
    tags: ["DEALERSHIP SITES", "INVENTORY TOOLS", "VEHICLE LANDING PAGES", "BOOKING SYSTEMS"]
  },
  { image: Automative2 },

  {
    title: "E-Commerce",
    description1: "From product discovery to checkout, we optimize every touchpoint for higher conversion and fictionless user experience.",
    description2: "Build e-commerce platforms that scale, platform fast and drive customer loyalty with personalization.",
    image: ECommerse1,
    tags: ["ONLINE STOREFRONTS", "INVENTORY SYSTEMS", "MOBILE SHOPPING APPS", "LOYALTY INTEGRATIONS"]
  },
  { image: ECommerse2 },

  {
    title: "Education",
    description1: "We create learning platforms that are scalable, accessible and engaging-supporting students,teachers and institutions alike.",
    description2: "Whether you're delivering courses or onboarding learners, we make digital education seamless and effective.",
    image: Education1,
    tags: ["LMS PLATFORMS", "COURSE WEBSITES", "STUDENT PORTALS", "EDUCATION APPS"]
  },
  { image: Education2 },

  {
    title: "Enterprise",
    description1: "We design and build platforms that simplify operations and help growing business track, manage and communication efficiency.",
    description2: "Custom SaaS tools and admin systems ready to evolve with your workflow and goals.",
    image: Enterprise1,
    tags: ["ADMIN PORTALS", "WEB APPS", "SAAS SYSTEMS", "BUSINESS SYSTEMS"]
  },
  { image: Enterprise2 },

  {
    title: "Lifestyle",
    description1: "From fitness apps to personal care brands, we deliver feel-good experiences that align with modern lifestyle.",
    description2: "Empower your audience through design-driven platforms focused on wellness, ease and aesthetic confidence.",
    image: LifeStyle1,
    tags: ["WELLNESS SITES", "FITNESS APPS", "LIFESTYLE STORES", "SPA/SALON BOOKINGS"]
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

   
      <div className="blueprintsC-highlight">
  <img src={current.image} alt={current.title} className="industry-image" />

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
