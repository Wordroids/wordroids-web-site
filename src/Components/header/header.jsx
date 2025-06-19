import React from 'react'
import './header.css'
import Businessman from '../../assets/Businessman.png'



const header = () => {
  return (
    <header>
      <div className = "container header_container">

        <div class = "header_text">
        
        <h1>Crafting Digital</h1>
        <h1>Masterpiece</h1>
        <p>From visinory web solutions to stunning designs, wordroids <br></br>transforms your digital dreams in to reality.</p>
        <h4>Let's innovate together!</h4>
        
        </div>
        

        <div className="man">
          <img src={Businessman} alt="man" />
        </div> 

         <div className='welcome_button'>
           <a href= "#contact" className ='btn btn-primary'>GET STARTED TODAY!</a>
         </div>
      
      
      </div>
    </header>
  )
}

export default header


