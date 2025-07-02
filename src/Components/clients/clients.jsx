import React from 'react';
import './clients.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const statsContent = (
  <>
    <span><strong>5+ Years of Experience</strong></span>
    <span className="clients__stats-sep">*</span>
    <span><strong>15+ Happy Clients</strong></span>
    <span className="clients__stats-sep">*</span>
    <span><strong>50+ Projects</strong></span>
  </>
);

const Clients = () => {
  return (
    <section id="clients">
      <div className="clients__stats-bar">
        <div className="clients__stats-bar-track">
          {statsContent}
          {statsContent}
        </div>
      </div>
      <div className="container clients__outer-wrapper">
        <div className="clients__testimonial-box">
          <div className="clients__images-wrapper">
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
          </div>

          <div className="clients__vertical-line"></div>

          {/* Slider */}
          <div className="clients__testimonial-slider">
            <div className="clients__testimonial-track">
              <div className="clients__testimonial-content">
                <div className="clients__quote-circle">
                  <span className="clients__quote-mark"><b>“</b></span>
                </div>
                <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, <br></br>sapien vitae pulvinar gravida, eros eros consectetur nisi, at accumsan metus <br></br>elit id nulla. Vivamus auctor ultrices turpis, eget feugiat orci fermentum a <br></br>Vivamus auctor ultrices turpis, eget feugiat orci eget feugiat orci fermentum a <br></br>Vivamus auctor ultrices turpis, eget feugiat.
            </p>
                <div className="clients__testimonial-author">
                  <span className="clients__testimonial-name">John Doe</span>
                  <span className="clients__testimonial-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="clients__testimonial-content">
                <div className="clients__quote-circle">
                  <span className="clients__quote-mark"><b>“</b></span>
                </div>
                 <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat,<br></br> sapien vitae pulvinar gravida, eros eros consectetur nisi, at accumsan metus <br></br>elit id nulla. Vivamus auctor ultrices turpis, eget feugiat orci fermentum a <br></br>Vivamus auctor ultrices turpis, eget feugiat orci eget feugiat orci fermentum a <br></br>Vivamus auctor ultrices turpis, eget feugiat.
            </p>
                <div className="clients__testimonial-author">
                  <span className="clients__testimonial-name">Kamala Harris</span>
                  <span className="clients__testimonial-role">Business Owner</span>
                </div>
              </div>

              <div className="clients__testimonial-content">
                <div className="clients__quote-circle">
                  <span className="clients__quote-mark"><b>“</b></span>
                </div>
                 <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat,<br></br> sapien vitae pulvinar gravida, eros eros consectetur nisi, at accumsan metus <br></br>elit id nulla. Vivamus auctor ultrices turpis, eget feugiat orci fermentum a <br></br>Vivamus auctor ultrices turpis, eget feugiat orci eget feugiat orci fermentum a <br></br>Vivamus auctor ultrices turpis, eget feugiat.
            </p>
                <div className="clients__testimonial-author">
                  <span className="clients__testimonial-name">James Rodrigues</span>
                  <span className="clients__testimonial-role">Project Manager</span>
                </div>
              </div>

              <div className="clients__testimonial-content">
                <div className="clients__quote-circle">
                  <span className="clients__quote-mark"><b>“</b></span>
                </div>
                 <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat,<br></br> sapien vitae pulvinar gravida, eros eros consectetur nisi, at accumsan metus <br></br>elit id nulla. Vivamus auctor ultrices turpis, eget feugiat orci fermentum a <br></br>Vivamus auctor ultrices turpis, eget feugiat orci eget feugiat orci fermentum a <br></br>Vivamus auctor ultrices turpis, eget feugiat.
            </p>
                <div className="clients__testimonial-author">
                  <span className="clients__testimonial-name">Thomas Mullar</span>
                  <span className="clients__testimonial-role">Graphic Designer</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;
