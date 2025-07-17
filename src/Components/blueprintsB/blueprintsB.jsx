import React, { useState } from 'react';
import './blueprintsB.css';
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { BiLogoDjango } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { FaLaravel, FaNodeJs, FaPhp, FaReact, FaVuejs, FaJs, FaHtml5 } from "react-icons/fa";
import { SiDotnet, SiAngular, SiNuxtdotjs, SiTypescript, SiWordpress, SiDrupal, SiJoomla, SiMagento, SiShopify, SiGhost, SiSquarespace, SiWix } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GiFizzingFlask } from "react-icons/gi";
import { BsLaptopFill } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { IoMdCloud } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { BiSolidRightArrowAlt } from "react-icons/bi";

const SERVICESB = [
  {
    icon: BsLaptopFill,
    list: "BUILD YOUR WEB APPLICATION",
    title: "Web Development",
    description: "We build scalable, SEO-friendly and responsive websites tailored to your brand and goals.From design to deveolpment, we ensure performance, accessibility and future growth are baked in from day one. ",
    cards: [
      { title: "SEO OPTIMIZED", text: "Optimized websites that rank higher on search engines" },
      { title: "FULLY RESPONSIVE", text: "Adapts to every screen and device without breaking layout" },
      { title: "HIGHLY SECURE", text: "Protected with best practices and modern web security standards" },
      { title: "EASILY SCALABLE", text: "Growth easily with increasing users, content and functionality" }
    ]
  },
  {
    icon: MdPhoneIphone,
    list: "CRAFT YOUR MOBILE APPLICATION",
    title: "Mobile Development",
    description: "Our team develops cross-platform mobile apps that deliver fast performance and smooth UX.We focus on usability, security and brand alignment from onboarding to launch, every tap feels right.",
    cards: [
      { title: "FAST PERFORMANCE", text: "Loads instantly with smooth experience and no delays" },
      { title: "CROSS PLATFORM", text: "Runs on Android and iOS with one codebase" },
      { title: "SECURE LOGIN", text: "Ensures user safety through encrypted and verified authentication " },
      { title: "USER TESTED", text: "Prototypes validated through testing with real user feedback" }
    ]
  },
  {
    icon: FaRobot,
    list: "INTEGRATE SMART AI SOLUTIONS",
    title: "AI Integration",
    description: "We build AI-powered features that add intelligence to your product from smart search and chatbots to automation and personalization, all driven by real data and business-aligned logic.",
    cards: [
      { title: "AI-CHATBOTS", text: "Communicate instantly using GPT,intelligent conversation flows" },
      { title: "SMART SEARCH", text: "Understands queries beyond simple keyword matching" },
      { title: "AUTO WORKFLOWS", text: "Automatically handles repetitive actions to save team time" },
      { title: "PREDICTIVE LOGIC", text: "Learns patterns and improves suggestions with every interaction" }
    ]
  },
  {
    icon: SiBookstack,
    list: "DESIGN INTERFACES AND EXPERIENCES",
    title: "UI/UX Design",
    description: "We create intuitive, emotionally engaging UI/UX that combines strategy with style.From wireframes to pixel-perfect visuals, our design process ensures clarity, consistency and connection across every user touchpoint.",
    cards: [
      { title: "CLEAN AESTHETIC", text: "Modern visual style designed for brand clarity and impact" },
      { title: "MOBILE FIRST", text: "Interfaces designed for mobile experience before desktop adjustment" },
      { title: "UX OPTIMIZED", text: "Easy-to-use layouts that improve customer satisfaction and retention" },
      { title: "BRAND CONSISTENT", text: "Matches your unique brand style across every touch point." }
    ]
  },
  {
     icon: IoMdCloud,
    list: "DEPLOY CLOUD-HOSTED PLATFORMS",
    title: "Cloud Platforms",
    description: "We deploy fast, scalable platforms on trusted cloud infrastructure.From hosting and backups to CI/CD and serverless fuctions, we ensure speed, stability, and growth for your digital presence. ",
    cards: [
      { title: "CLOUD READY", text: "Runs your product on scalable and secure cloud platforms" },
      { title: "WORLDWIDE CDN", text: "Content loads faster via global delivery and server locations" },
      { title: "CI/CD ENABLED", text: "Automates build, test and deploy using reliable workflows" },
      { title: "AUTO BACKUPS", text: "Keeps data safe with automatic and regular backup systems" }
    ]
  },
  {
    icon: FaPaintBrush,
    list: "CREATE VISUAL BRAND SYSTEMS",
    title: "Brand Systems",
    description: "We craft logos, motion graphics, social kits and branded visuals that define your indentity. Everything is consistent, expressive and designed to make your business instantly recognizable everywhere it appears.",
    cards: [
      { title: "LOGO DESIGN", text: "Unique brand identity that's recognizable and professionally designed" },
      { title: "MOTION GRAPHICS", text: "Adds life through animated visuals for digital experiiences" },
      { title: "SOCIAL TEMPLATES", text: "Pre-designed post formats to match your brand style" },
      { title: "PRESENT DECKS", text: "Beautiful slides to showcase your ideas with confidence" }
    ]
  }
];

const TECH_STACKSB = [
  [GiFizzingFlask, GiFizzingFlask, GiFizzingFlask, GiFizzingFlask],
  [FaPython, FaPython, FaPython, FaPython],
  [FaLaravel, FaLaravel, FaLaravel],
  [TbSql, TbSql, TbSql],
  [BiLogoDjango, BiLogoDjango, BiLogoDjango],
  [FaPhp, FaPhp, FaPhp]
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
            {SERVICESB.map((service, index) => (
              <li
                key={index}
                className={selected === index ? "active" : ""}
                onClick={() => setSelected(index)}
              >
                <BsFillRecordCircleFill className={`dot-iconB ${selected === index ? 'active' : ''}`} />
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
          {React.createElement(SERVICESB[selected].icon, { className: 'icon' })}

          <h3>
            <span className="highlight">{SERVICESB[selected].title.split(' ')[0]}</span>{" "}
            {SERVICESB[selected].title.split(' ').slice(1).join(' ')}
          </h3>
        </div>

        <p className="blueprintsB-description-right">
          {SERVICESB[selected].description}
        </p>

        <div className="blueprintsB-cards">
          {SERVICESB[selected].cards.map((card, idx) => (
            <div className="cardB" key={idx}>
              <h5 className="highlight">{card.title}</h5>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="tech-stackB">
          <span>TECHNOLOGY WE USE</span>
          <div className="icons-scrollB">
            <div className="scroll-wrapperB">
              {[...TECH_STACKSB[selected], ...TECH_STACKSB[selected]].map((Icon, i) => (
                <Icon key={i} className="tech-iconB" />
              ))}
            </div>
          </div>
        </div>

        <div className="exploreB">
          Explore More < BiSolidRightArrowAlt className="arrowB" />
        </div>
      </div>
    </section>
  );
};

export default BlueprintsB;
