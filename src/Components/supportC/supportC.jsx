import React from "react";
import "./supportC.css";

const SupportC = () => (
  <div className="quick-access-root">
    <div className="quick-access-header">
      <span className="quick-access-help">
        NEED <span className="highlight">HELP</span> NAVIGATING WORDROIDS?
      </span>
      <h1>
        <span className="highlight-main">Find What You’re Looking for in Seconds</span>
      </h1>
      <p>
        Whether you’re exploring our services, browsing recent work, or learning who we are, jump right in with these quick access cards.
      </p>
    </div>
    <div className="quick-access-cards">
      <div className="card">
        <div className="card-icon">🚀</div>
        <h2>What We Offer</h2>
        <p>
          Dive into our full suite of digital services from apps and branding to AI-powered experiences and cloud infrastructure.
        </p>
        <button className="card-btn">BROWSE SERVICES</button>
      </div>
      <div className="card">
        <div className="card-icon">👜</div>
        <h2>Work in Action</h2>
        <p>
          Browse real-world solutions we’ve crafted for startups, businesses, and global brands—each project tells a story of impact.
        </p>
        <button className="card-btn">REVIEW PROJECTS</button>
      </div>
      <div className="card">
        <div className="card-icon">🤝</div>
        <h2>Team Behind It</h2>
        <p>
          Learn about our mindset, values, and mission. Discover who we are and what drives everything we create.
        </p>
        <button className="card-btn">READ ABOUT US</button>
      </div>
    </div>
  </div>
);

export default SupportC;
