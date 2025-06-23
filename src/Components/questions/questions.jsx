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
      answer: "Project timelines vary based on complexity and requirements. We provide a detailed estimate after understanding your needs to ensure timely delivery."
    },
    {
      id: 3,
      question: "What services do you offer?",
      answer: "We offer web development, mobile app development, UI/UX design, consulting, and ongoing support to help your business grow with technology."
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
            Find answers to the most common questions about our services,<br />
            process and expertise. We've compiled these F&Qs to help you<br />
            understand how we work and how we can bring your ideas to life <br></br>
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
