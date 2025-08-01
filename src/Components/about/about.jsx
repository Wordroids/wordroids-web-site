import React from 'react'
import './about.css'
import checker from '../../assets/Checker.jpg'
import { TbCircleLetterIFilled } from "react-icons/tb" 



const About = () => {
  return (
    <section id='about'>
        <div className="container about__outer-wrapper">  {/* outer border */}
            <div className="about__content-wrapper">        {/* brown background */}
                <div className='about__checker'>
                    <div className='about__checker-image'>
                        <img src={checker} alt="About" />
                    </div>
                </div>

          <div className="about_intro">
            <h4>YOUR <span className="highlight">PARTNER</span> IN DIGITAL TRANSFORMATION </h4>
            <h1>Empowering Businesses Through Innovative Digital Solutions</h1>
            <p>
                We are a passionate team of innovators, creators, and problem-solvers dedicated to empowering businesses with cutting-edge digital solutions. With a focus on quality, creativity and functionality, we aim to transform your ideas into impactful realities.
            </p>

            <div className="browse_button_wrapper2">
                <button
                className="browse_button2"
                onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                >
                <TbCircleLetterIFilled className="browse_icon2" />
                READ ABOUT US
                </button>
            </div>


</div>
  

           
            
        </div>
    </div>
</section>
  )
}

export default About



