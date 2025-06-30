import React, { useState, useEffect, useRef } from 'react';
import './technology.css';

// Backend Icons
import { BiLogoDjango } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { FaLaravel, FaNodeJs, FaPhp, FaReact, FaVuejs, FaJs, FaHtml5 } from "react-icons/fa";
import { SiDotnet, SiAngular, SiNuxtdotjs, SiTypescript, SiWordpress, SiDrupal, SiJoomla, SiMagento, SiShopify, SiGhost, SiSquarespace, SiWix } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GiFizzingFlask } from "react-icons/gi";
import { RiNextjsFill } from "react-icons/ri";

const backendIcons = [
  { component: FaPython, name: "Python", className: "icon-py" },
  { component: FaLaravel, name: "Laravel", className: "icon-laravel" },
  { component: FaNodeJs, name: "Node.js", className: "icon-node" },
  { component: FaPhp, name: "PHP", className: "icon-php" },
  { component: SiDotnet, name: "ASP.NET", className: "icon-dotnet" },
  { component: TbSql, name: "SQL", className: "icon-sql" },
  { component: GiFizzingFlask, name: "Flask", className: "icon-flask" },
  { component: BiLogoDjango, name: "Django", className: "icon-dj" }
];

const frontendIcons = [
  { component: FaReact, name: "React", className: "icon-react" },
  { component: FaVuejs, name: "Vue.js", className: "icon-vue" },
  { component: SiAngular, name: "Angular", classNzame: "icon-angular" },
  { component: RiNextjsFill, name: "Next.js", className: "icon-next" },
  { component: SiNuxtdotjs, name: "Nuxt.js", className: "icon-nuxt" },
  { component: FaJs, name: "JavaScript", className: "icon-js" },
  { component: SiTypescript, name: "TypeScript", className: "icon-ts" },
  { component: FaHtml5, name: "HTML5", className: "icon-html" }
];

const cmsIcons = [
  { component: SiWordpress, name: "WordPress", className: "icon-wordpress" },
  { component: SiDrupal, name: "Drupal", className: "icon-drupal" },
  { component: SiJoomla, name: "Joomla", className: "icon-joomla" },
  { component: SiMagento, name: "Magento", className: "icon-magento" },
  { component: SiShopify, name: "Shopify", className: "icon-shopify" },
  { component: SiGhost, name: "Ghost", className: "icon-ghost" },
  { component: SiSquarespace, name: "Squarespace", className: "icon-squarespace" },
  { component: SiWix, name: "Wix", className: "icon-wix" }
];

const CIRCLE_RADIUS = 180; // px, radius of the icon circle
const CENTER_OFFSET = 170; // px, center of the container

const Technology = () => {
  const [currentView, setCurrentView] = useState('backend');
  const [angle, setAngle] = useState(0);
  const requestRef = useRef();

  // Animate the rotation
  useEffect(() => {
    const animate = () => {
      setAngle(prev => prev + 0.005); // Adjust speed here
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const getCurrentIcons = () => {
    switch(currentView) {
      case 'frontend': return frontendIcons;
      case 'cms': return cmsIcons;
      default: return backendIcons;
    }
  };

  const getCenterText = () => {
    switch(currentView) {
      case 'frontend': return 'Front End\nDevelopment';
      case 'cms': return 'CMS\nPlatforms';
      default: return 'Back End\nDevelopment';
    }
  };

  const icons = getCurrentIcons();

  return (
    <section id="technology" className="technology-section">
      <div className="technology-left">
        <div className="circle-container">
          <div className="circle-center">
            <span style={{ whiteSpace: 'pre-line' }}>{getCenterText()}</span>
          </div>
          {icons.map((icon, idx) => {
            const IconComponent = icon.component;
            // Calculate angle for each icon
            const theta = angle + (2 * Math.PI * idx / icons.length);
            const x = CENTER_OFFSET + CIRCLE_RADIUS * Math.cos(theta) - 25; // -25 to center the icon (icon is 50x50)
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
        <div className="nav-arrows">
          <span 
            className={`arrow ${currentView === 'cms' ? 'active' : ''}`}
            onClick={() => setCurrentView('cms')}
          >
            ← CMS
          </span>
          <span 
            className={`arrow ${currentView === 'frontend' ? 'active' : ''}`}
            onClick={() => setCurrentView('frontend')}
          >
            FRONT END →
          </span>
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
          We use the latest technologies to create innovative solutions that boost efficiency, enhance user experiences, and help businesses stay ahead in a rapidly evolving digital landscape
        </p>
      </div>
    </section>
  );
};

export default Technology;