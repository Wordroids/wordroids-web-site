import React, { useState } from 'react';
import './blueprintsB.css';
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

import { BiLogoDjango } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { FaLaravel, FaNodeJs, FaPhp, FaReact, FaVuejs, FaJs, FaHtml5 } from "react-icons/fa";
import { SiDotnet, SiAngular, SiNuxtdotjs, SiTypescript, SiWordpress, SiDrupal, SiJoomla, SiMagento, SiShopify, SiGhost, SiSquarespace, SiWix } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GiFizzingFlask } from "react-icons/gi";


const SERVICES = [
  {
    list: "BUILD YOUR WEB APPLICATION",
    title: "Web Development",
    description: "We create intuitive, emotionally engaging UI/UX that combines strategy with style. From wireframes to pixel-perfect visuals, our design process ensures clarity, consistency, and connection across every user touchpoint.",
    cards: [
      { title: "CLEAN AESTHETIC", text: "Modern visual style designed for brand clarity and impact" },
      { title: "MOBILE FIRST", text: "Interfaces designed for mobile experience before desktop adjustment" },
      { title: "UX OPTIMIZED", text: "Easy-to-use layouts that improve customer satisfaction and retention" },
      { title: "BRAND CONSISTENT", text: "Matches your unique brand style across every touch point" }
    ]
  },
  {
    list: "CRAFT YOUR MOBILE APPLICATION",
    title: "Mobile Development",
    description: "We build high-performance mobile applications that run seamlessly on both Android and iOS with clean UI and native-like UX.",
    cards: [
      { title: "CROSS-PLATFORM", text: "Develop once, run everywhere with Flutter and React Native" },
      { title: "NATIVE INTEGRATION", text: "Seamless access to device capabilities" },
      { title: "RESPONSIVE UI", text: "Optimized layouts across all screen sizes" },
      { title: "FAST LAUNCH", text: "Quick prototyping and deployment" }
    ]
  },
  {
    list: "INTEGRATE SMART AI SOLUTIONS",
    title: "AI Integration",
    description: "We integrate intelligent solutions powered by machine learning and data science to elevate automation and decision-making.",
    cards: [
      { title: "CHATBOTS", text: "Conversational AI to enhance user support" },
      { title: "PREDICTIVE MODELS", text: "Forecast trends and behaviors accurately" },
      { title: "NLP PROCESSING", text: "Extract meaning from textual data" },
      { title: "DATA AUTOMATION", text: "Automate tasks with smart algorithms" }
    ]
  },
  {
    list: "DESIGN INTERFACES AND EXPERIENCES",
    title: "UI/UX Design",
    description: "We craft human-centered digital interfaces that are intuitive, visually appealing, and aligned with your brand.",
    cards: [
      { title: "USER FLOWS", text: "Optimized journeys from start to goal" },
      { title: "WIREFRAMES", text: "Low-fidelity planning for product logic" },
      { title: "VISUAL DESIGN", text: "Pixel-perfect UI elements" },
      { title: "INTERACTIVE PROTOTYPES", text: "Bring your ideas to life with motion" }
    ]
  },
  {
    list: "DEPLOY CLOUD-HOSTED PLATFORMS",
    title: "Cloud Platforms",
    description: "We architect, deploy, and manage scalable infrastructure using top cloud providers for maximum performance.",
    cards: [
      { title: "AWS & AZURE", text: "Flexible hosting with global reach" },
      { title: "AUTOMATED CI/CD", text: "Streamline deployment pipelines" },
      { title: "SECURE BACKUPS", text: "Ensure data protection and recovery" },
      { title: "LOAD BALANCING", text: "Distribute traffic efficiently" }
    ]
  },
  {
    list: "CREATE VISUAL BRAND SYSTEMS",
    title: "Brand Systems",
    description: "We define your digital identity with color, typography, logo, and voice to ensure consistency across all channels.",
    cards: [
      { title: "LOGO DESIGN", text: "Unique visual mark tailored to your brand" },
      { title: "STYLE GUIDES", text: "Design rules for consistency" },
      { title: "BRAND TONE", text: "Voice and language that resonates" },
      { title: "ASSET MANAGEMENT", text: "Organize and maintain brand visuals" }
    ]
  }
];

const TECH_STACKS = [
  [GiFizzingFlask, GiFizzingFlask, GiFizzingFlask, GiFizzingFlask],              // Web
  [FaPython, FaPython, FaPython, FaPython],            // Mobile
  [FaLaravel, FaLaravel, FaLaravel],               // AI
  [TbSql, TbSql, TbSql],                      // UI/UX
  [ BiLogoDjango,  BiLogoDjango,  BiLogoDjango],              // Cloud
  [FaPhp, FaPhp, FaPhp]                         // Brand
];

const BlueprintsB = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="blueprintsB-section">
      <div className="blueprintsB-left">
        <h4 className="blueprintsB-subtitle">
          THE <span className="highlight">BLUPRINT</span> TO BUILD ANYTHING
        </h4>
        <h1 className="blueprintsB-title">
          Modern Services Engineered<br />for Future-Ready Brands
        </h1>

        <ul className="blueprintsB-list">
          {SERVICES.map((service, index) => (
            <li
              key={index}
              className={selected === index ? "active" : ""}
              onClick={() => setSelected(index)}
            >
              <span>{service.list}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="blueprintsB-right">
        <p className="blueprintsB-description">
          From custom apps to cloud and AI, our service blueprint helps businesses
          scale smarter with strategy, speed, and standout design.
        </p>

        <div className="blueprintsB-header-right">
          <MdOutlineDesignServices className="icon" />
          <h3>
            <span className="highlight">{SERVICES[selected].title.split(' ')[0]}</span>{" "}
            {SERVICES[selected].title.split(' ').slice(1).join(' ')}
          </h3>
        </div>

        <p className="blueprintsB-description-right">
          {SERVICES[selected].description}
        </p>

        <div className="blueprintsB-cards">
          {SERVICES[selected].cards.map((card, idx) => (
            <div className="card" key={idx}>
              <h5 className="highlight">{card.title}</h5>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <span>TECHNOLOGY WE USE</span>
          <div className="icons-scroll">
            <div className="scroll-wrapper">
              {TECH_STACKS[selected].map((Icon, i) => (
                <Icon key={i} className="tech-icon" />
              ))}
              {TECH_STACKS[selected].map((Icon, i) => (
                <Icon key={`clone-${i}`} className="tech-icon" />
              ))}
            </div>
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
