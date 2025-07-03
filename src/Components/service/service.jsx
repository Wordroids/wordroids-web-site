import React from 'react'
import './service.css'
import { SiAngular } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiNuxtdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPhp } from 'react-icons/fa'
import { FaHtml5 } from "react-icons/fa";
import { FaWordpress } from 'react-icons/fa'
import { SiBlueprint } from "react-icons/si"

const Service = () => {
    return (
        <section id='service'>
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
            <div className="service_icons_wrapper">
                <div className="service_icons_track">
                    <SiAngular className="service_icon" title="Angular" />
                    <IoLogoFigma className="service_icon" title="Figma" />
                    <SiNuxtdotjs className="service_icon" title="js" />
                    <FaReact className="service_icon" title="React" />
                    <FaPhp className="service_icon" title="php" />
                    <FaHtml5 className="service_icon" title="html5" />
                    <FaWordpress className="service_icon" title="WordPress" />
                    {/* Duplicates for continuous scroll effect */}
                    <SiAngular className="service_icon" />
                    <IoLogoFigma className="service_icon" />
                    <SiNuxtdotjs className="service_icon" />
                    <FaReact className="service_icon" />
                    <FaPhp className="service_icon" />
                    <FaHtml5 className="service_icon" />
                    <FaWordpress className="service_icon" />
                </div>
            </div>

            <div className="container service_container">


                 <div className='service_cloud'>
                    <h3>BUILD YOUR WEB APPLICATION</h3>
                    <div className="service_content">
                        <article className='service_details'>
                            <div>
                                <h4>SEO Friendly</h4>
                                <small className='text-light'>Optimized websites to rank higher on search engines effectively</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>Responsive Design</h4>
                                <small className='text-light'>Adapts seamlessly to any screen size for better usability</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>Secure Architecture</h4>
                                <small className='text-light'>Adnanced encryption ensures your data remains protected</small>
                            </div>
                        </article>
                        <article className='service_details secure-architecture'>
                            <div>
                                <h4>Custom Features</h4>
                                <small className='text-light'>Built specifically to meet your unique business needs</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="service_web">
                    <h3>CRAFT YOUR MOBILE APPLICATION</h3>
                    <div className="service_content">
                        <article className='service_details'>
                            <div>
                                <h4>Cross-Platform Development</h4>
                                <small className='text-light'>Build once and launch on both Android and iOS without extra cost</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>Native Performance</h4>
                                <small className='text-light'>Ensures lightning-fast and smooth app experience on all modern devices</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>Scalable Backend</h4>
                                <small className='text-light'>Easily handles traffic spikes as your user base continues to grow</small>
                            </div>
                        </article>
                        <article className='service_details secure-architecture'>
                            <div>
                                <h4>Push Notifications</h4>
                                <small className='text-light'>Re-engage users instantly with timely messages and important app updates</small>
                            </div>
                        </article>
                    </div>
                </div>

                

                <div className='service_artificial'>
                    <h3>INTEGRATED AI FEATURES</h3>
                    <div className="service_content">
                        <article className='service_details'>
                            <div>
                                <h4>Smart Chatbots</h4>
                                <small className='text-light'>Automate customer support with real-time, intelligent and helpful chat responses</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>Predictive Insights</h4>
                                <small className='text-light'>Use data to forecast trends and make smarter business decisions</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>NLP Integration</h4>
                                <small className='text-light'>Understand and respond to user inputs naturally through language processing</small>
                            </div>
                        </article>
                        <article className='service_details secure-architecture'>
                            <div>
                                <h4>Process Automation</h4>
                                <small className='text-light'>Reduce manual tasks by automating workflows and boosting overall productivity </small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='service_interface'>
                    <h3>DESIGN ENGAGING USER INTERFACES</h3>
                    <div className="service_content">
                        <article className='service_details'>
                            <div>
                                <h4>User-Centered Design</h4>
                                <small className='text-light'>Interfaces built with user needs in mind for maximum engagement and clarity</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>Interactive Prototype</h4>
                                <small className='text-light'>Preview built with user needs in mind for maximum engagement and clarity</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>Design System</h4>
                                <small className='text-light'>Consistent visual language and components across your entire product suite</small>
                            </div>
                        </article>
                        <article className='service_details secure-architecture'>
                            <div>
                                <h4>Accessibility First</h4>
                                <small className='text-light'>Inclusive design practices ensuring usability for all people including disabilities</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='service_cloud'>
                    <h3>DEPLOY ON CLOUD HOSTING</h3>
                    <div className="service_content">
                        <article className='service_details'>
                            <div>
                                <h4>Auto Scalling</h4>
                                <small className='text-light'>Automatically adjust server power based on real-time traffic and performance needs</small>  
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>High Uptime</h4>
                                <small className='text-light'>Reliable hosting infrastructure with 99.9% guaranteed website and app availability</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>Global CDN</h4>
                                <small className='text-light'>Deliver content faster worldwide with distributed edge servers and smart caching</small>
                            </div>
                        </article>
                        <article className='service_details secure-architecture'>
                            <div>
                                <h4>End-to-End Security</h4>
                                <small className='text-light'>Secure your cloud services with firewalls, backups and encryption by default</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='service_graphic'>
                    <h3>CREATE STUNNING VISUAL DESIGNS</h3>
                    <div className="service_content">
                        <article className='service_details'>
                            <div>
                                <h4>Logo & Branding</h4>
                                <small className='text-light'>Build a recognizable identify with powerful, consistent and modern brand visuals</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>UI Asset Design</h4>
                                <small className='text-light'>Custom icons, illustrations and buttons to enrich your user interface</small>
                            </div>
                        </article>
                        <article className='service_details'>
                            <div>
                                <h4>Print-Ready Graphics</h4>
                                <small className='text-light'>Professional designed brochures, posters and flyers ready for physical print</small>
                            </div>
                        </article>
                        <article className='service_details secure-architecture'>
                            <div>
                                <h4>Motion Graphics</h4>
                                <small className='text-light'>Create animated visuals that boost engagement on digital and social platforms</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <div className="browse_button_wrapper1" >
                <button className="browse_button1" onClick={() => {
                    document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })
                }}>
                    <SiBlueprint className="browse_icon1" />
                    BROWSE SERVICES
                </button>
            </div>
        </section>
    )
}

export default Service
