import React from 'react';
import './form1.css';
import { FaWordpress, FaFigma, FaLaptopCode, FaMobileAlt, FaMailBulk, FaTools } from 'react-icons/fa';
import { MdWeb, MdDesignServices } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import IMG2 from '../../assets/project2.png';
import { TbWorld } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Form1 = () => {
  return (
    <div className="carcare-container1">
      <div className="project-image1">
       <button className="image-nav-icon left-icon"><IoIosArrowBack /></button>
        <img src={IMG2} alt="Car Care Melbourne Mockup" />
        <button className="image-nav-icon right-icon"><IoIosArrowForward /></button>

      </div>

      <div className="project-details1">
        <p className="project-type1">WORDPRESS WEBSITE</p>
        <h1>Car Care Melbourne</h1>
        <div className="tags">
          <span>WordPress</span>
          <span>CarDetailing</span>
          <span>AutoWebsite</span>
          <span>BookingSystem</span>
          <span>UIUXDesign</span>
        </div>


      {/* PREVIEW Section */}
        <div className="preview1">
          <span>PREVIEW  <span className="highlight">:</span></span>
          <div className="preview-link">
            <TbWorld className="world-icon" />
            <a
              href="https://www.carcaremelbourne.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.carcaremelbourne.com.au
            </a>
          </div>
        </div>


       
      {/* WHAT WE DID */}
      <div className="section2 row">
        <span className="section-title-orange">WHAT WE DID  <span className="highlight">:</span></span>
        <div className="badges1">
          <span>UI/UX Designing</span>
          <span>WordPress Development</span>
          <span>Booking</span>
          <span>Digital Marketing</span>
          <span>Support</span>
        </div>
      </div>

      {/* TECHNOLOGY WE USED */}
      <div className="section3 row">
        <span className="section-title-orange">TECHNOLOGY WE USED  <span className="highlight">:</span></span>
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
              

       {/* PROJECT OVERVIEW */}
        <div className="section1 row">
          <span>PROJECT OVERVIEW  <span className="highlight">:</span></span>
          <p className="overview1">
            CarCareMelbourne required a website that reflected their premium services while staying functional on mobile for on-the-go users. Our goal was to create a seamless booking experience supported by high-performance speed and modern UI/UX design.<br /><br />
            We built the site using WordPress and Elementor, integrated a form-based booking plugin, and structured services with clarity. The result? A strong digital presence with over 47% increase in online bookings post-launch.
          </p>
        </div>

        {/* FEATURES Section */}
          <div className="section4 row">
            <span className="section-title-orange">KEY DELIVERABLES <span className="highlight">:</span></span>
            <ul className="features1">
              <li className="features1">
                <span className="tick-icon"><TiTick /></span>
                Wordpress development using Elementor
              </li>
              <li className="features1">
                <span className="tick-icon"><TiTick /></span>
                Service page with pricing breakdown
              </li>
              <li className="features1">
                <span className="tick-icon"><TiTick /></span>
                Booking system with email notifications
              </li>
              <li className="features1">
                <span className="tick-icon"><TiTick /></span>
                Responsive design(mobile/tablet/desktop)
              </li>
              <li className="features1"> 
                <span className="tick-icon"><TiTick /></span>
                On-page SEO for local discovery
              </li>
              <li className="features1">
                <span className="tick-icon"><TiTick /></span>
                Testimonials before the gallery
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Form1;
