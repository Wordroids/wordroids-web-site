import React, { useRef, useEffect } from 'react';
import './projects.css';
import IMG1 from '../../assets/project1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';
import { GiOpenBook } from "react-icons/gi";
import wave3 from '../../assets/wave3.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Car Smash Repair Website',
    position1: 'Wordpress Development',
    position2: 'UI/UX Designing',
    position3: 'Web Hosting'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Car Care Melbourne Website',
    position1: 'Wordpress Development',
    position2: 'UI/UX Designing',
    position3: 'Web Hosting'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Import Revolution Website',
    position1: 'Wordpress Development',
    position2: 'UI/UX Designing',
    position3: 'Web Hosting'
  }
];

const Projects = () => {
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
    <section id="projects">
      <div className="project_background">
        <img src={wave3} alt="wave background" className="wave3-bg" />
        <div className="project_overlay">
          <div className="project_header">
            <div className="project_intro">
              <h4>
                EXPLORE OUR<span className="highlight"> PORTFOLIO</span> OF INNOVATIVE PROJECTS
              </h4>
              <h1>
                Building Impactful Solutions <br />for businesses Worldwide
              </h1>
            </div>
            <div className="project_para">
              <p>
                Explore our diverse portfolio of successful projects showcasing innovation,
                creativity and client-focused solutions. Each project reflects our dedication
                to delivering impactful results tailored to unique business needs.
              </p>
            </div>
          </div>

          {/* Project cards */}
          <div className="container project__container">
            {data.map(({ id, image, title, position1, position2, position3 }, index) => (
              <article key={id} className="project__item">
                <div className="project__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div
                  className="project__item-cta"
                  ref={el => (dragScrollRefs.current[index] = el)}
                >
                  <span className="project__role">{position1}</span>
                  <span className="project__role">{position2}</span>
                  <span className="project__role">{position3}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Browse button */}
          <div className="browse_button_wrapper3">
            <button
              className="browse_button3"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <GiOpenBook className="browse_icon3" />
              REVIEW PROJECTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
