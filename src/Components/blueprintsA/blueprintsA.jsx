import React from 'react';
import './blueprintsA.css';
import vector4 from '../../assets/Vector4.png';
import vector5 from '../../assets/Vector5.png';


const blueprintsA = () => {
  return (
    <section className="wordroidB">
      {/* Wave Backgrounds */}
      <img src={vector4} alt="Wave 1" className="aboutus-wave wave1" />
      <img src={vector5} alt="Wave 2" className="aboutus-wave wave2" />

      <div className="aboutus-content">
        <h1 className="aboutus-title">Services</h1>

      
        
      </div>
    </section>
  );
};

export default blueprintsA;