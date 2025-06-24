import React from 'react';
import './technology.css';
import { BiLogoDjango } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GiFizzingFlask } from "react-icons/gi";

const iconComponents = [
  { component: FaPython, name: "Python", className: "icon-py" },
  { component: FaLaravel, name: "Laravel", className: "icon-laravel" },
  { component: FaNodeJs, name: "Node.js", className: "icon-node" },
  { component: FaPhp, name: "PHP", className: "icon-php" },
  { component: SiDotnet, name: "ASP.NET", className: "icon-dotnet" },
  { component: TbSql, name: "SQL", className: "icon-sql" },
  { component: GiFizzingFlask, name: "Flask", className: "icon-flask" },
  { component: BiLogoDjango, name: "Django", className: "icon-dj" }
];

const iconPositions = [
  { top: '-5%', left: '45%' },      // Top (Python)
  { top: '18%', left: '85%' },     // Top Right (Laravel)
  { top: '50%', left: '100%' },    // Right (Node.js)
  { top: '82%', left: '85%' },     // Bottom Right (PHP)
  { top: '95%', left: '45%' },    // Bottom (ASP.NET)
  { top: '82%', left: '0%' },     // Bottom Left (SQL)
  { top: '50%', left: '-10%' },      // Left (Flask)
  { top: '18%', left: '0%' },     // Top Left (Django)
];

const Technology = () => (
  <section id="technology" className="technology-section">
    <div className="technology-left">
      <div className="circle-container">
        <div className="circle-center">
          <span>Back End<br />Development</span>
        </div>
        {iconComponents.map((icon, idx) => {
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
        <span className="arrow">← CMS</span>
        <span className="arrow">FRONT END →</span>
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

export default Technology;
