import React, { useState, useEffect, useRef } from 'react';
import './technology.css';

import { BiLogoDjango } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { FaLaravel, FaNodeJs, FaPhp, FaReact, FaVuejs, FaJs, FaHtml5 } from "react-icons/fa";
import { SiDotnet, SiAngular, SiNuxtdotjs, SiTypescript, SiWordpress, SiDrupal, SiJoomla, SiMagento, SiShopify, SiGhost, SiSquarespace, SiWix } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { DiCodeigniter } from "react-icons/di";

//mobile icons
import { FaFlutter } from "react-icons/fa6";
import { SiKotlin } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrSwift } from "react-icons/gr";
import { ImAndroid } from "react-icons/im";
import { IoLogoFirebase } from "react-icons/io5";
import { RxCodesandboxLogo } from "react-icons/rx";

//frontend icons
import { TbBrandAdobeXd } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { RiVuejsLine } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { TbBrandNuxt } from "react-icons/tb";

//cms icons
import { FaMagento } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { TbBrandWix } from "react-icons/tb";
import { FaJoomla } from "react-icons/fa";

//devops icons
import { IoCloud } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { GiCrossedPistols } from "react-icons/gi";


const mobile_dev_icons = [
  { component: FaFlutter, name: "Flutter", className: "icon-flutter" },
  { component: SiKotlin, name: "Kotlin", className: "icon-kotlin" },
  { component: FaJava, name: "Java", className: "icon-java" },
  { component:  TbBrandReactNative, name: "React", className: "icon-react" },
  { component:  GrSwift, name: "Swift", className: "icon-swift" },
  { component:  ImAndroid , name: "Android", className: "icon-android" },
  { component: IoLogoFirebase , name: "Firebase", className: "icon-firebase" },
  { component: RxCodesandboxLogo, name: "Xcode", className: "icon-xcode" }
];

 
const frontend_dev_icons = [
  { component: TbBrandAdobeXd, name: "XD", className: "icon-xd" },
  { component: RiJavascriptLine, name: "Javascript", className: "icon-javascript" },
  { component: TbBrandTypescript, name: "Typescript", className: "icon-typescript" },
  { component: IoLogoReact, name: "React", className: "icon-react" },
  { component: FaAngular, name: "Angular", className: "icon-angular" },
  { component: RiVuejsLine, name: "Vue", className: "icon-vue" },
  { component: IoLogoFigma, name: "Figma", className: "icon-figma" },
  { component: TbBrandNuxt, name: "Nuxt", className: "icon-nuxt" }
];

//backend icons
const backend_dev_icons = [
  { component: FaPython, name: "Python", className: "icon-py" },
  { component: FaLaravel, name: "Laravel", className: "icon-laravel" },
  { component: FaNodeJs, name: "Node.js", className: "icon-node" },
  { component: FaPhp, name: "PHP", className: "icon-php" },
  { component: SiDotnet, name: "ASP.NET", className: "icon-dotnet" },
  { component: TbSql, name: "SQL", className: "icon-sql" },
  { component: DiCodeigniter, name: "Codeigniter", className: "icon-codeigniter" },
  { component: BiLogoDjango, name: "Django", className: "icon-dj" }
];

const cms_icons = [
  { component: FaMagento, name: "Magento", className: "icon-magento" },
  { component: FaWordpress, name: "Wordpress", className: "icon-wordpress" },
  { component:  FaShopify, name: "Shopify", className: "icon-shopify" },
  { component: TbBrandWix, name: "Wix", className: "icon-wix" },
  { component: FaJoomla, name: "Joomla", className: "icon-joomla" },
 
];

const devops_icons = [
  { component: IoCloud, name: "Cloud", className: "icon-cloud" },
  { component: FaAws, name: "Aws", className: "icon-aws" },
  { component: VscAzure, name: "Azure", className: "icon-azure" },
  { component: GiCrossedPistols, name: "Pistol", className: "icon-pistol" },
 
];



// Slides array in order matching image layout
const slides = [
  { key: 'backend', label: 'Back End', icons: backend_dev_icons, center: 'Back End\nDevelopment', anchor: '#backend' },
  { key: 'cms', label: 'CMS', icons: cms_icons, center: 'CMS\nPlatforms', anchor: '#cms' },
  { key: 'mobileapp', label: 'Mobile App', icons: mobile_dev_icons, center: 'Mobile\nDevelopment', anchor: '#mobileapp' },
  { key: 'frontend', label: 'Front End', icons: frontend_dev_icons, center: 'Front End\nDevelopment', anchor: '#frontend' },
  { key: 'devops', label: 'DevOps', icons: devops_icons, center: 'DevOps', anchor: '#devops' }
];

const CIRCLE_RADIUS = 155;
const CENTER_OFFSET = 180;

const Technology = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [angle, setAngle] = useState(0);
  const requestRef = useRef();
  const slideCount = slides.length;

  // Animate icon rotation
  useEffect(() => {   
    const animate = () => {
      setAngle(prev => prev + 0.005);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Auto slide left every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  const slide = slides[currentSlide];

  // Navigation handler for buttons
  const handleNav = idx => {
    setCurrentSlide(idx);
    const anchor = slides[idx].anchor.replace('#', '');
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="technology" className="technology-section">
      <div className="technology-left">
        <div
          className="circle-slider"
          style={{ transform: `translateX(-${currentSlide * 360}px)` }} // slide left
        >
          {slides.map((slide) => (
            <div className="circle-container" key={slide.key}>
              <div className="circle-center">
                <span style={{ whiteSpace: 'pre-line' }}>{slide.center}</span>
              </div>
              {slide.icons.map((icon, idx) => {
                const IconComponent = icon.component;
                const theta = angle + (2 * Math.PI * idx / slide.icons.length);
                const x = CENTER_OFFSET + CIRCLE_RADIUS * Math.cos(theta) - 25;
                const y = CENTER_OFFSET + CIRCLE_RADIUS * Math.sin(theta) - 25;
                return (
                  <div
                    key={icon.name}
                    className={`circle-icon ${icon.className}`}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`
                    }}
                    title={icon.name}
                  >
                    <IconComponent size={28} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="slide-nav-arrows">
          <button
            className={`arrow-btn left-arrow${currentSlide === 0 ? ' disabled' : ''}`}
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1))}
            aria-label="Previous Slide"
          >
            ← CMS
          </button>
          <button
            className={`arrow-btn right-arrow${currentSlide === slideCount - 1 ? ' disabled' : ''}`}
            onClick={() => setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1))}
            aria-label="Next Slide"
          >
            FRONT END →
          </button>
        </div>
      </div>
      <div className="technology-right">
        <h4>
          EXPLORE OUR <span className="highlight">TECHNOLOGICAL</span> EXPERTISE
        </h4>
        <h1>
          Harnessing the Power of Advanced Technology to Drive Digital Transformation and Growth
        </h1>
        <p>
          We use the latest technologies to create innovative solutions that boost efficiency, enhance user experiences, and help businesses stay ahead in a rapidly evolving digital landscape.
        </p>
      </div>
    </section>
  );
};

export default Technology;
