import React from 'react';
import './form1.css';
import { FaWordpress, FaFigma, FaLaptopCode, FaMobileAlt, FaMailBulk, FaTools } from 'react-icons/fa';
import { MdWeb, MdDesignServices } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import IMG2 from '../../assets/project2.png';

const Form1 = () => {
  return (
    <div className="carcare-container1">
      <div className="project-image1">
        <button className="nav-arrow left1"><FiChevronLeft /></button>
        <img src={IMG2} alt="Car Care Melbourne Mockup" />
        <button className="nav-arrow right1"><FiChevronRight /></button>
      </div>

      <div className="project-details1">
        <p className="project-type1">WORDPRESS WEBSITE</p>
        <h1>Car Care Melbourne</h1>
        <p className="tags">#WordPress  #CarDetailing  #AutoWebsite  #BookingSystem  #UIUXDesign</p>

        <div className="preview1">
          <span>PREVIEW :</span>
          <a href="https://www.carcaremelbourne.com.au" target="_blank" rel="noopener noreferrer">
            www.carcaremelbourne.com.au
          </a>
        </div>

        <div className="section1">
          <span>WHAT WE DID :</span>
          <div className="badges1">
            <span>UI/UX Designing</span>
            <span>WordPress Development</span>
            <span>Booking</span>
            <span>Digital Marketing</span>
            <span>Support</span>
          </div>
        </div>

        <div className="section1">
          <span>TECHNOLOGY WE USED :</span>
          <div className="tech-icons1">
            <FaWordpress title="WordPress" />
            <FaFigma title="Figma" />
            <MdWeb title="Elementor" />
            <FaLaptopCode title="HTML/CSS/JS" />
            <FaMobileAlt title="Responsive Design" />
            <FaMailBulk title="Email Notifications" />
            <MdDesignServices title="UI/UX Design" />
            <FaTools title="Optimization" />
          </div>
        </div>

        <div className="section1">
          <span>PROJECT OVERVIEW :</span>
          <p className="overview1">
            CarCareMelbourne required a website that reflected their premium services while staying functional on mobile for on-the-go users. Our goal was to create a seamless booking experience supported by high-performance speed and modern UI/UX design.<br /><br />
            We built the site using WordPress and Elementor, integrated a form-based booking plugin, and structured services with clarity. The result? A strong digital presence with over 47% increase in online bookings post-launch.
          </p>
        </div>

        <div className="section1">
          <span>KEY DELIVERABLES :</span>
          <ul className="deliverables1">
            <li>WordPress development using Elementor</li>
            <li>Service page with pricing breakdown</li>
            <li>Booking system with email notifications</li>
            <li>Responsive design (mobile/tablet/desktop)</li>
            <li>Onpage SEO for local discovery</li>
            <li>Testimonials & Before-after gallery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form1;
