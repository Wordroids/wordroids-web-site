import React from 'react';
import './blueprintsB.css';
import { MdOutlineDesignServices } from "react-icons/md";
import { SiFigma, SiInvision, SiSketch, SiHtml5, SiCss3 } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";

const BlueprintsB = () => {
  return (
    <section className="blueprintsB-section">
      {/* LEFT SECTION */}
      <div className="blueprintsB-left">
        <h4 className="blueprintsB-subtitle">
          THE <span className="highlight">BLUPRINT</span> TO BUILD ANYTHING
        </h4>
        <h1 className="blueprintsB-title">
          Modern Services Engineered<br />for Future-Ready Brands
        </h1>

        <ul className="blueprintsB-list">
          <li className="active"><span>BUILD YOUR WEB APPLICATION</span></li>
          <li>CRAFT YOUR MOBILE APPLICATION</li>
          <li>INTEGRATE SMART AI SOLUTIONS</li>
          <li>DESIGN INTERFACES AND EXPERIENCES</li>
          <li>DEPLOY CLOUD-HOSTED PLATFORMS</li>
          <li>CREATE VISUAL BRAND SYSTEMS</li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="blueprintsB-right">
        {/* Move Description here */}
        <p className="blueprintsB-description">
          From custom apps to cloud and AI, our service blueprint helps businesses
          scale smarter with strategy, speed, and standout design.
        </p>

        <div className="blueprintsB-header-right">
          <MdOutlineDesignServices className="icon" />
          <h3><span className="highlight">Web</span> Development</h3>
        </div>

        <p className="blueprintsB-description-right">
          We create intuitive, emotionally engaging UI/UX that combines strategy with
          style. From wireframes to pixel-perfect visuals, our design process ensures
          clarity, consistency, and connection across every user touchpoint.
        </p>

        <div className="blueprintsB-cards">
          <div className="card">
            <h4 className="highlight">CLEAN AESTHETIC</h4>
            <p>Modern visual style designed for brand clarity and impact</p>
          </div>
          <div className="card">
            <h4 className="highlight">MOBILE FIRST</h4>
            <p>Interfaces designed for mobile experience before desktop adjustment</p>
          </div>
          <div className="card">
            <h4 className="highlight">UX OPTIMIZED</h4>
            <p>Easy-to-use layouts that improve customer satisfaction and retention</p>
          </div>
          <div className="card">
            <h4 className="highlight">BRAND CONSISTENT</h4>
            <p>Matches your unique brand style across every touch point</p>
          </div>
        </div>

        <div className="tech-stack">
          <span>TECHNOLOGY WE USE</span>
          <div className="icons">
            <SiFigma />
            <SiInvision />
            <SiSketch />
            <SiHtml5 />
            <SiCss3 />
          </div>
        </div>

        <div className="explore">
          Explore More <IoIosArrowForward className="arrow" />
        </div>
      </div>
    </section>
  );
};

export default BlueprintsB;
