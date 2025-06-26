import React from 'react'
import './service.css'
import { SiAngular } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiNuxtdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {FaPhp} from 'react-icons/fa'
import { FaHtml5 } from "react-icons/fa";
import {FaWordpress} from 'react-icons/fa'


const Service = () => {
    return(
        <section id = 'service'>
            <div className="service_intro">
                <h4>COMPREHENSIVE <span className="highlight">SERVICES</span> FOR EVERY BUSINESS</h4>
                <h1>Drive Innovation and Achive</h1>
                <h1>Your Goals</h1>
                <p>
                We provided tailored solutions, from apps to marketing, ensuring your business stands out. Our <br />
                expert team focuses on delivering exceptional results to help you grow and succeed.
                </p>
            </div>

            {/* ICON GROUP - add this block */}
            <div className="service_icons">
                <SiAngular className="service_icon" title="Angular" />
                <IoLogoFigma className="service_icon" title="Figma" />
                <SiNuxtdotjs className="service_icon" title="js" />
                <FaReact className="service_icon" title="React" />
                <FaPhp className="service_icon" title="php" />
                <FaHtml5 className = "service_icon" title="html5"/>
                <FaWordpress className="service_icon" title="WordPress" />
                
            </div>

            
            <div className="container service_container">

 
                <div className="service_web">   
                    <h3>BUILD YOUR WEB APPLICATION</h3>
                    <div className="service_content">

                        <article className='service_details'>
                        <div>
                            <h4>SEO FRIENDLY</h4>
                            <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
                        </div>
                        </article>

                         <article className='service_details'>
                         <div>
                            <h4>SEO FRIENDLY</h4>
                            <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
                         </div>
                        </article>

                         <article className='service_details'>
                         <div>
                            <h4>SEO FRIENDLY</h4>
                            <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
                         </div>
                         </article>

                     </div>
                </div>

                  <div className='service_mobile'>

          <h3>CRAFT YOUR MOBILE APPLICATION</h3>
          <div className = "service_content">

             <article className='service_details'>
             <div>
                <h4>SEO FRIENDLY</h4>
                <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
            </div>
            </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

            </div>
        </div>



         <div className='service_artificial'>

          <h3>ARTIFICIAL INTELLIGENCE</h3>
          <div className = "service_content">

             <article className='service_details'>
             <div>
                <h4>SEO FRIENDLY</h4>
                <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
            </div>
            </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

            </div>
        </div>



        <div className='service_interface'>

          <h3>USER INTERFACES AND EXPERIENCES</h3>
          <div className = "service_content">

             <article className='service_details'>
             <div>
                <h4>SEO FRIENDLY</h4>
                <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
             </div>
            </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

            </div>
        </div>


        <div className='service_cloud'>

          <h3>CLOUD HOSTING SOLUTIONS</h3>
          <div className = "service_content">

             <article className='service_details'>
             <div>
                <h4>SEO FRIENDLY</h4>
                <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
            </div>
            </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

            </div>
        </div>


         <div className='service_graphic'>

          <h3>GRAPHIC DESIGNING</h3>
          <div className = "service_content">

             <article className='service_details'>
             <div>
                <h4>SEO FRIENDLY</h4>
                <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
            </div>
            </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

              <article className='service_details'>
              <div>
                 <h4>SEO FRIENDLY</h4>
                 <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
              </div>
              </article>

            </div>
        </div>
   </div>



   <div className="browse_button_wrapper" >
         <button className="browse_button"onClick={() => {
                  // Example: scroll to services or navigate
                  document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })
                }}>
            BROWSE SERVICES
         </button>
   </div>





      





        
        
      </section>
  )
}

export default Service




