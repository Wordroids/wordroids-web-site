import React, { useState } from 'react';
import './technology.css';

// Backend Icons
import { BiLogoDjango } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GiFizzingFlask } from "react-icons/gi";

// Frontend Icons
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiAngular } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiNuxtdotjs } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

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
  { component: SiAngular, name: "Angular", className: "icon-angular" },
  { component: RiNextjsFill, name: "Next.js", className: "icon-next" },
  { component: SiNuxtdotjs, name: "Nuxt.js", className: "icon-nuxt" },
  { component: FaJs, name: "JavaScript", className: "icon-js" },
  { component: SiTypescript, name: "TypeScript", className: "icon-ts" },
  { component: FaHtml5, name: "HTML5", className: "icon-html" }
];

const iconPositions = [
  { top: '-5%', left: '45%' },      // Top
  { top: '18%', left: '85%' },     // Top Right
  { top: '50%', left: '100%' },    // Right
  { top: '82%', left: '85%' },     // Bottom Right
  { top: '95%', left: '45%' },    // Bottom
  { top: '84%', left: '5%' },     // Bottom Left
  { top: '50%', left: '-10%' },      // Left
  { top: '18%', left: '0%' },     // Top Left
];

const Technology = () => {
  const [currentView, setCurrentView] = useState('backend');
  
  const getCurrentIcons = () => {
    return currentView === 'backend' ? backendIcons : frontendIcons;
  };
  
  const getCenterText = () => {
    return currentView === 'backend' ? 'Back End\nDevelopment' : 'Front End\nDevelopment';
  };

  return (
    <section id="technology" className="technology-section">
      <div className="technology-left">
        <div className="circle-container">
          <div className="circle-center">
            <span>{getCenterText()}</span>
          </div>
          {getCurrentIcons().map((icon, idx) => {
            const IconComponent = icon.component;
            return (
              <div
                key={icon.name}
                className={`circle-icon ${icon.className}`}
                style={iconPositions[idx]}
              >
                <IconComponent size={24} />
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
