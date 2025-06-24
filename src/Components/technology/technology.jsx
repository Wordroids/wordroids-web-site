import React from 'react';
import './technology.css';


const icons = [
  { name: "Django", className: "icon-dj" },
  { name: "Python", className: "icon-py" },
  { name: "Laravel", className: "icon-laravel" },
  { name: "Node.js", className: "icon-node" },
  { name: "PHP", className: "icon-php" },
  { name: "ASP.NET", className: "icon-dotnet" },
  { name: "SQL", className: "icon-sql" },
  { name: "Flask", className: "icon-flask" }
];

const iconPositions = [
  { top: '0%', left: '50%' },      // Top (Python)
  { top: '18%', left: '85%' },     // Top Right (Laravel)
  { top: '50%', left: '100%' },    // Right (Node.js)
  { top: '82%', left: '85%' },     // Bottom Right (PHP)
  { top: '100%', left: '50%' },    // Bottom (ASP.NET)
  { top: '82%', left: '15%' },     // Bottom Left (SQL)
  { top: '50%', left: '0%' },      // Left (Flask)
  { top: '18%', left: '15%' },     // Top Left (Django)
];

const Technology = () => (
  <section id="technology" className="technology-section">
    <div className="technology-left">
      <div className="circle-container">
        <div className="circle-center">
          <span>Back End<br />Development</span>
        </div>
        {icons.map((icon, idx) => (
          <div
            key={icon.name}
            className={`circle-icon ${icon.className}`}
            style={iconPositions[idx]}
          >
            {/* Replace below with actual icons */}
            <span>{icon.name}</span>
          </div>
        ))}
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
