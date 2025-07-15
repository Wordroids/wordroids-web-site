import React, { useState } from "react";
import "./innovationsB.css";
import sampleImage1 from "../../assets/project2.png"; // Use your own image path


const categories = [
  "WebApp", "MobileApp", "UIUXDesign", "ECommerce", "BrandIdentity",
  "AIIntegration", "HealthcareTech", "CloudHosting", "AdminDashboard", "SaasPlatform"
];

const projects = [
  {
    id: 1,
    title: "Car Care Melbourne",
    category: "WordPress Website",
    description: "Premium WordPress website for a Melbourne-based mobile car detailing service, optimized for speed, SEO, and smooth booking experiences.",
    tags: ["WordPress", "CarDetailing", "MobileService", "BookingSystem", "UIUXDesign"],
    image: sampleImage1
  },
  {
    id: 2,
    title: "Car Care Melbourne",
    category: "WordPress Website",
    description: "Premium WordPress website for a Melbourne-based mobile car detailing service, optimized for speed, SEO, and smooth booking experiences.",
    tags: ["WordPress", "CarDetailing", "MobileService", "BookingSystem", "UIUXDesign"],
    image: sampleImage1
  }
];

const InnovationsB = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <div className="portfolio-title-area">
          <h5 className="portfolio-subtitle">
            CRAFTING <span className="highlight">PROJECTS</span> THAT SPEAK FOR THEMSELVES
          </h5>
          <h1 className="portfolio-title">
            Discover Work That Drives <br />
            Results and Resonates
          </h1>
        </div>
        <p className="portfolio-description">
          Browse our curated portfolio of impactful digital solutions crafted with precision, creativity,
          and purpose to drive growth, elevate brands, and solve real-world business challenges.
        </p>
      </div>

      <div className="portfolio-filters">
        <div className="filter-buttons">
          {categories.map((category, i) => (
            <button key={i} className="filter-btn">{category}</button>
          ))}
        </div>
        <input
          type="text"
          placeholder="🔍 Search Keywords..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">#{tag}</span>
                ))}
              </div>
              <div className="project-view-icon">👁</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovationsB;
