import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './innovationsD.css';
import { FiEye } from "react-icons/fi";
import IMG2 from '../../assets/project2.png';
import { IoSearch } from "react-icons/io5";

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
  const navigate = useNavigate();

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
          {/* Header Section */}
          <div className="project_headerD">
            <div className="project_introD">
              <h4>CRAFTING <span className="highlight">PROJECTS</span> THAT SPEAK FOR THEMSELVES</h4>
              <h1>Discover Work That Drives <br />Results and Resonates</h1>
            </div>
            <div className="project_paraD">
              <p>
                Browse our curated portfolio of impactful digital solutions crafted with precision,
                creativity, and purpose to drive growth, elevate brands, and solve real-world business challenges.
              </p>
            </div>
          </div>

          {/* Filter + Search */}
          <div className="project_filtersD">
            <div className="categories_wrapperD">
              {categories.map((cat, index) => (
                <button key={index} className="category_pillD">{cat}</button>
              ))}
            </div>
            <div className="search_input_wrapperD">
              <IoSearch className="search_iconD" />
              <input type="text" placeholder="Search keywords..." className="search_inputD" />
            </div>
          </div>

          {/* Project Cards */}
          <div className="container project__containerD">
            {dataD.map(({ id, image, title, category, description, tags }) => (
              <article key={id} className="project__itemD">
                <div className="project__item-imageD">
                  <img src={image} alt={title} />
                </div>
                <div className="project__item-contentD">
                  <h3>{category}</h3>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  
                  <div className="project__tagsD">
                    {tags.map((tag, i) => (
                      <span key={i} className="tagD">#{tag}</span>
                    ))}
                  </div>
                  <div
                      className="eye_iconD"
                      onClick={() => navigate('/form1')}
                      title="View Project"
                    >
                      <FiEye />
                    </div>

                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="browse_button_wrapperD">
            <button className="browse_buttonD">LOAD MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationsD;
