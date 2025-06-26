import React from 'react';
import './projects.css';
import IMG1 from '../../assets/project1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';
import { GiOpenBook } from "react-icons/gi"

//DO NOT USE IMAGE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Car Smash Repair Website',
    position1: 'Wordpress Development',
    // position2: 'UI/UX Designing',
    // position3: 'Web Hosting'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Car Care Melbourne Website',
    position1: 'UI/UX',
    // position2: 'UI/UX Designing',
    // position3: 'Web Hosting'

  },
  {
    id: 3,
    image: IMG3,
    title: 'Import Revolution Website',
    position1: 'UI/UX',
    // position2: 'UI/UX Designing',
    // position3: 'Web Hosting'
  }
]

const projects = () => {
  return (
    <section id='project'>
               <div className="project_header">
                    <div className="project_intro">
                        <h4>EXPLORE OUR<span className="highlight"> PORTFOLIO</span> OF INNOVATIVE PROJECTS</h4>
                        <h1>Building Impactful Solutions <br />for businesses Worldwide</h1>
                    </div>

                    <div className="project_para">
                        <p>
                        Explore our diverse portfolio of successful projects showcasing innovation,
                        creativity and client-focused solutions. Each project reflects our dedication
                        to delivering impactful results tailored to unique business needs.
                        </p>
                    </div>
               </div>

      <div className='container project__container'>
        {
          data.map(({id, image,title,position1}) => {
            return(
              <article key={id} className='project__item'>
                <div className='project__item-image'>
                  <img src={image} alt={title}/>
                </div>

                <h3>{title}</h3>

               <div className='project__item-cta'>
                 <span className='project__role'>Wordpress Development</span>
               </div>

               {/* <div className='project__item-cta'>
                <span className='project__role'>UI/UX Designing</span>
               </div>

                <div className='project__item-cta'>
                <span className='project__role'>Web Hosting</span>
                </div> */}



              </article>
            )
          })
        }
       

     </div>

     <div className="browse_button_wrapper3" >
              <button className="browse_button3"onClick={() => {
                       // Example: scroll to services or navigate
                       document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                     }}>
                  <GiOpenBook className="browse_icon3" />     
                 REVIEW PROJECTS
              </button>
      </div>


    </section>
  );
};

export default projects;