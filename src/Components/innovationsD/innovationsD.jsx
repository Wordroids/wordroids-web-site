import React, { useRef, useEffect } from 'react';
import './innovationsD.css';

import IMG2 from '../../assets/project2.png';

const categories = [
  "WebApp", "MobileApp", "UIUXDesign", "ECommerce", "BrandIdentity",
  "AIIntegration", "HealthcareTech", "CloudHosting", "AdminDashboard", "SaasPlatform"
];


const dataD = [
  {
    id: 1,
    image: IMG2,
    title: 'Car Care Melbourne',
    category: "WordPress Website",
    description: "Premium WordPress website for a Melbourne-based mobile car detailing service, optimized for speed, SEO, and smooth booking experiences.",
    tags: ["WordPress", "CarDetailing", "MobileService", "BookingSystem", "UIUXDesign"],
  },
 
  {
    id: 2,
    image: IMG2,
    title: 'Car Care Melbourne ',
    category: "WordPress Website",
    description: "Premium WordPress website for a Melbourne-based mobile car detailing service, optimized for speed, SEO, and smooth booking experiences.",
    tags: ["WordPress", "CarDetailing", "MobileService", "BookingSystem", "UIUXDesign"],
   
  },
  {
    id: 3,
    image: IMG2,
    title: 'Car Care Melbourne',
    category: "WordPress Website",
    description: "Premium WordPress website for a Melbourne-based mobile car detailing service, optimized for speed, SEO, and smooth booking experiences.",
    tags: ["WordPress", "CarDetailing", "MobileService", "BookingSystem", "UIUXDesign"],
    
  },
  {
    id: 4,
    image: IMG2,
    title: 'Car Care Melbourne',
    category: "WordPress Website",
    description: "Premium WordPress website for a Melbourne-based mobile car detailing service, optimized for speed, SEO, and smooth booking experiences.",
    tags: ["WordPress", "CarDetailing", "MobileService", "BookingSystem", "UIUXDesign"],
   
  },
  {
    id: 5,
    image: IMG2,
    title:'Car Care Melbourne',
    category: "WordPress Website",
    description: "Premium WordPress website for a Melbourne-based mobile car detailing service, optimized for speed, SEO, and smooth booking experiences.",
    tags: ["WordPress", "CarDetailing", "MobileService", "BookingSystem", "UIUXDesign"],
  },
  {
    id: 6,
    image: IMG2,
    title: 'Car Care Melbourne',
    category: "WordPress Website",
    description: "Premium WordPress website for a Melbourne-based mobile car detailing service, optimized for speed, SEO, and smooth booking experiences.",
    tags: ["WordPress", "CarDetailing", "MobileService", "BookingSystem", "UIUXDesign"],
       
  }
];

const InnovationsD = () => {
  const dragScrollRefs = useRef([]);

  useEffect(() => {
    dragScrollRefs.current.forEach(ref => {
      if (!ref) return;
      let isDown = false;
      let startX;
      let scrollLeft;

      const handleMouseDown = (e) => {
        isDown = true;
        startX = e.pageX - ref.offsetLeft;
        scrollLeft = ref.scrollLeft;
        ref.style.cursor = 'grabbing';
      };

      const handleMouseLeave = () => {
        isDown = false;
        ref.style.cursor = 'grab';
      };

      const handleMouseUp = () => {
        isDown = false;
        ref.style.cursor = 'grab';
      };

      const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - ref.offsetLeft;
        const walk = (x - startX) * 1.5;
        ref.scrollLeft = scrollLeft - walk;
      };

      ref.addEventListener('mousedown', handleMouseDown);
      ref.addEventListener('mouseleave', handleMouseLeave);
      ref.addEventListener('mouseup', handleMouseUp);
      ref.addEventListener('mousemove', handleMouseMove);
    });
  }, []);

  return (
    <section id="projectsD">
      <div className="project_backgroundD">
        
        <div className="project_overlayD">
          <div className="project_headerD">
            <div className="project_introD">
              <h4>
                EXPLORE OUR<span className="highlight"> PORTFOLIO</span> OF INNOVATIVE PROJECTS
              </h4>
              <h1>
                Building Impactful Solutions <br />for businesses Worldwide
              </h1>
            </div>
            <div className="project_paraD">
              <p>
                Explore our diverse portfolio of successful projects showcasing innovation,
                creativity and client-focused solutions. Each project reflects our dedication
                to delivering impactful results tailored to unique business needs.
              </p>
            </div>
          </div>

          {/* Project cards */}
          <div className="container project__containerD">
            {dataD.map(({ id, image, title, category,description, tags }, index) => (
              <article key={id} className="project__itemD">
                <div className="project__item-imageD">
                  <img src={image} alt={title} />
                </div>
                 <h3>{category}</h3>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{tags}</p>
                
                
              </article>
            ))}
          </div>

          {/* Browse button */}
          <div className="browse_button_wrapperD">
            <button
              className="browse_buttonD"
              onClick={() => {
                document.getElementById('projectsD')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationsD;
