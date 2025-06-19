import React from 'react'
import './footer.css'


const footer = () => {
  return (
    <footer>
      <a href = "#" className='footer_logo'></a>   

      <ul className='permalinks'>

        <li><a href = "#">WELCOME</a></li>
        <li><a href = "#about">WORDROIDS</a></li>
        <li><a href = "#experience">BLUEPRINTS</a></li>
        <li><a href = "#services">INNOVATIONS</a></li>
        <li><a href = "#testimonials">SUPPORT</a></li>
        

      </ul>

      <div className="footer_socials">
        info@wordroids.com
        Washinton, DC Greenville, Colombo
        077 656 9740
       
        
      </div>

      <div className= "footer_copyright">
        <small>&copy; All rights reserved.</small>
      </div>
     
    </footer>
    
  )
}

export default footer 