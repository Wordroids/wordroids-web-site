import React, { useState } from "react";
import "./supportB.css";

const projectTypes = [
  "Website", "Web App", "Mobile App", "SASS Platform", "AI Integration", "Hostings",
  "UI/UX Design", "Graphics", "Digital Marketing", "SEO"
];

const budgets = [
  "Below $1K", "$1K–$5K", "$5K–$10K", "Over $10K"
];

const SupportB = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleTypeToggle = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const handleBudgetSelect = (budget) => setSelectedBudget(budget);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="contact-root">
      {/* Left Side */}
      <div className="contact-left">
        <div className="contact-header">
          <span className="contact-connect">
            LET’S <span className="highlight">CONNECT</span> AND CREATE SOMETHING GREAT
          </span>
          <h1>
            We’d Love To Hear About <br /> Your Project
          </h1>
          {/* Removed <p> here */}
        </div>

       
        
        {/* The form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="section-label">PROJECT TYPE</div>
          <div className="project-type-group">
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={`type-btn${selectedTypes.includes(type) ? " selected" : ""}`}
                onClick={() => handleTypeToggle(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="section-label">ESTIMATED BUDGET</div>
          <div className="budget-group">
            {budgets.map((b) => (
              <button
                key={b}
                type="button"
                className={`budget-btn${selectedBudget === b ? " selected" : ""}`}
                onClick={() => handleBudgetSelect(b)}
              >
                {b}
              </button>
            ))}
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>NAME</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>EMAIL</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-group full">
            <label>TELL US ABOUT YOUR PROJECT</label>
            <textarea
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-btn" type="submit">
            LET’S GET STARTED
          </button>
        </form>
      </div>


       <div className="contact-desc-wrapper">
        <p className="contact-desc">
          Whether you’re ready to start, need advice, or just want to say hello — we’re here to chat, collaborate, and create meaningful digital experiences.
        </p>
      </div>


      {/* Right Side */}
      <div className="contact-right">

        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="detail-row">
            <span className="detail-icon">@</span>
            <div>
              <div className="detail-label">EMAIL</div>
              <div className="detail-value">info@wordroids.com</div>
            </div>
          </div>
          <div className="detail-row">
            <span className="detail-icon">&#128222;</span>
            <div>
              <div className="detail-label">PHONE</div>
              <div className="detail-value">+94 776 569 740</div>
            </div>
          </div>
          <div className="detail-row">
            <span className="detail-icon">&#x1f4cd;</span>
            <div>
              <div className="detail-label">LOCATION</div>
              <div className="detail-value">Washington, DC Greenville, Colombo</div>
            </div>
          </div>
          <div className="social-row">
            <span className="detail-label">SOCIAL :</span>
            <span className="social-icon">f</span>
            <span className="social-icon">in</span>
            <span className="social-icon">X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportB;
