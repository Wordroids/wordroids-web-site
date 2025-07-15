import React from 'react';
import './innovationsA.css';
import vector4 from '../../assets/Vector4.png';
import vector5 from '../../assets/Vector5.png';


const InnovationsA = () => {
  return (
    <section className="innovationsA">
      {/* Wave Backgrounds */}
      <img src={vector4} alt="Wave 1" className="aboutus-wave wave1" />
      <img src={vector5} alt="Wave 2" className="aboutus-wave wave2" />

      <div className="aboutus-content">
        <h1 className="aboutus-title">Projects</h1>

      
        
      </div>
    </section>
  );
};

export default InnovationsA;