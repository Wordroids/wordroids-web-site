import React, { useState } from "react";
import "./innovationsC.css";


const projectTypes = [
  "Website", "Web App", "Mobile App", "SASS Platform", "AI Integration",
  "UI/UX Design", "Hostings", "Graphics", "Digital Marketing", "SEO"
];

const budgets = ["Below $1K", "$1K–$5K", "$5K–$10K", "Over $10K"];

const InnovationsC = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="projectform-container">
      {/* Left Side Content */}
      <div className="form-left">
        <h4 className="form-subtitle">HAVE A <span className="highlight">PROJECT</span> IN MIND?</h4>
        <h1 className="form-title">Turn Your Ideas Into Real,<br />Working Products</h1>
        <p className="form-desc">
          Let’s discuss how we can bring your vision to life with smart design, tailored development, and real business impact.
        </p>
      </div>

      {/* Right Side Form */}
      <div className="form-right">
        <form onSubmit={handleSubmit}>
          <div className="form-section-title">PROJECT TYPE</div>
          <div className="button-group">
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={`tag-btn ${selectedTypes.includes(type) ? "selected" : ""}`}
                onClick={() => toggleType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="form-section-title">ESTIMATED BUDGET</div>
          <div className="button-group">
            {budgets.map((budget) => (
              <button
                key={budget}
                type="button"
                className={`tag-btn ${selectedBudget === budget ? "selected" : ""}`}
                onClick={() => setSelectedBudget(budget)}
              >
                {budget}
              </button>
            ))}
          </div>

          <div className="form-inputs">
            <div className="input-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">EMAIL</label>
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
            <label htmlFor="message">TELL US ABOUT YOUR PROJECT</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="1"
              required
            />
          </div>

          <button type="submit" className="form-submit">LET’S GET STARTED</button>
        </form>
      </div>
    </div>
  );
};

export default InnovationsC;