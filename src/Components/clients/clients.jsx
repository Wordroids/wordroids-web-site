// import React from 'react'
// import './clients.css'

// const Clients = () => {
//     return(
//         <div>Happy Client</div>
//     )
// }

// export default Clients 



import React from 'react'
import './clients.css'
import image1 from '../../assets/image1.png';



const Clients = () => {
  return (
    <section id='clients'>
        <div className="container clients__outer-wrapper">  {/* outer border */}
            <div className="clients__content-wrapper">        {/* brown background */}
                <div className='clients__checker'>
                    <div className='clients__checker-image'>
                        <img src={image1} alt="image1" />
                    </div>
                </div>

            <div className="clients_intro">
                {/* <h4>YOUR <span className="highlight">PARTNER</span> IN DIGITAL TRANSFORMATION </h4> */}
                {/*<h1>Empowering Businesses Through Innovative Digital Solutions</h1>*/}
                <p>
                We are a passionate team of innovators, creators, and problem-solvers dedicated to emptions. With a focus on quality, creativity and functionality, we aim to transform your ideas into impactful realities.
                We are a passionate team of innovators, creators, and problem-solvers dedicated to emptions. With a focus on quality, creativity and functionality, we aim to transform your ideas into impactful realities.
                </p>
            </div> 
        </div>
    </div>
</section>
  )
}

export default Clients



