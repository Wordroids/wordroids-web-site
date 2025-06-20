import React from 'react'
import './about.css'
import checker from '../../assets/Checker.jpg'



const About = () => {
  return (
    <section id='about'>
     
     <div className="container about__container">

         <div className='about_checker'>
          <div className='about__checker-image'>
            <img src={checker} alt="About Image" />
          </div>
        </div> 

          <div className="about_intro">
                <h4>YOUR <span className="highlight">PARTNER</span> IN DIGITAL TRANSFORMATION </h4>
                <h1>Empowering Businesses Through Innovative Digital Solutions</h1>
               
                <p>We are a passionate team of innovators,creators, and problem-solvers dedicated to empowerind businesses with cutting-edge digital solutions.With a focus on quality,creativity and functionality, we aim to transform your ideas into impactful realities.</p>
          </div>
           
        </div>
      
    </section>
  )
}

export default About