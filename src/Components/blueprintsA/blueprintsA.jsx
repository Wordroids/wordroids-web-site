import React from 'react';
import './blueprintsA.css';
import vector4 from '../../assets/Vector4.png';
import vector5 from '../../assets/Vector5.png';


const blueprintsA = () => {
  return (
    <section className="blueprintsA">
      {/* Wave Backgrounds */}
      <img src={vector4} alt="Wave 1" className="blueprintus-wave wave1" />
      <img src={vector5} alt="Wave 2" className="blueprintus-wave wave2" />

      <div className="blueprintus-content">
        <h1 className="blueprintus-title">Services</h1>

      
        
      </div>
    </section>
  );
};

export default blueprintsA;