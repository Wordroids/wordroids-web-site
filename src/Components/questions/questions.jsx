import React, { useState } from 'react';
import './questions.css';

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What technologies do you specialize in?",
      answer: "We work with a wide range of technologies including HTML, CSS, JavaScript, React, PHP, Laravel, WordPress, Swift, Kotlin, and many more. We tailor our tech stack to meet the unique needs of your project."
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer: "The timeline depends on the scope and complexity of the project. On average, web development projects take 4-8 weeks, while mobile apps and custom software solutions many take longer. We always provide a clear timeline during the planning phase"
    },
    {
      id: 3,
      question: "What services do you offer?",
      answer: "We offer web development, software development, mobile app development, UI/UX design and web hosting services. Our goal is to provide comprehensive digital solutions to help your business thrive"
    }
  ];

  const handleToggle = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <section id="questions">
      <div className="questions_header">
        <div className="questions_intro">
          <h4>YOUR GUIDE TO <span className="highlight">FAQ</span> AND KEY INSIGHTS</h4>
          <h1>Clear Answers to Your Most<br />Pressing Questions</h1>
          <p>
            Find answers to the most common questions about our services,
            process and expertise. We've compiled these F&Qs to help you
            understand how we work and how we can bring your ideas to life
            with innovative solutions tailored to your needs.
          </p>
        </div>
        <div className="faq_container">
          {questions.map((q) => (
            <div
              key={q.id}
              className={`faq_item ${activeQuestion === q.id ? 'active' : ''}`}
            >
              <div
                className="faq_question"
                onClick={() => handleToggle(q.id)}
              >
                <span>{q.question}</span>
                <span className={`arrow ${activeQuestion === q.id ? 'open' : ''}`}>▼</span>
              </div>
              {activeQuestion === q.id && (
                <div className="faq_answer">
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
