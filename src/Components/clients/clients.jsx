
// import React from 'react'
// import './clients.css'
// import image1 from '../../assets/image1.png';



// const Clients = () => {
//   return (
//     <section id='clients'>
//         <div className="container clients__outer-wrapper">  {/* outer border */}
//             <div className="clients__content-wrapper">        {/* brown background */}
//                 <div className='clients__checker'>
//                     <div className='clients__checker-image'>
//                         <img src={image1} alt="image1" />
//                     </div>
//                 </div>

//             <div className="clients_intro">
//                 {/* <h4>YOUR <span className="highlight">PARTNER</span> IN DIGITAL TRANSFORMATION </h4> */}
//                 {/*<h1>Empowering Businesses Through Innovative Digital Solutions</h1>*/}
//                 <p>
//                 We are a passionate team of innovators, creators, and problem-solvers dedicated to emptions. With a focus on quality, creativity and functionality, we aim to transform your ideas into impactful realities.
//                 We are a passionate team of innovators, creators, and problem-solvers dedicated to emptions. With a focus on quality, creativity and functionality, we aim to transform your ideas into impactful realities.
//                 </p>
//             </div> 
//         </div>
//     </div>
// </section>
//   )
// }

// export default Clients


import React from 'react';
import './clients.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.png';

const Clients = () => {
  return (
    <section id="clients">
      <div className="clients__stats-bar">
        <span><strong>5+ Years of Experience</strong></span>
        <span className="clients__stats-sep">*</span>
        <span><strong>15+ Happy Clients</strong></span>
        <span className="clients__stats-sep">*</span>
        <span><strong>50+ Projects</strong></span>
      </div>
      <div className="container clients__outer-wrapper">
        <div className="clients__testimonial-box">
          <div className="clients__images-row">
            <div className="clients__diamond clients__diamond-small">
              <img src={image2} alt="Client 2" />
            </div>
            <div className="clients__diamond clients__diamond-large">
              <img src={image1} alt="Client 1" />
            </div>
            <div className="clients__diamond clients__diamond-small">
              <img src={image3} alt="Client 3" />
            </div>
          </div>
          <div className="clients__testimonial-content">
            <div className="clients__quote-icon">“</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, sapien vitae pulvinar gravida, eros eros consectetur nisi, at accumsan metus elit id nulla. Vivamus auctor ultrices turpis, eget feugiat orci fermentum a Vivamus auctor ultrices turpis, eget feugiat orci eget feugiat orci fermentum a Vivamus auctor ultrices turpis, eget feugiat
            </p>
            <div className="clients__testimonial-author">
              <span className="clients__testimonial-name">John Doe</span>
              <span className="clients__testimonial-role">UI/UX Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;



