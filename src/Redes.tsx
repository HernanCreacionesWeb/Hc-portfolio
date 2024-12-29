 
import instagram from "./assets/imagenes/instagram.svg"
import whatsapp from "./assets/imagenes/whatsapp.svg"
import linkedin from "./assets/imagenes/linkedIn.svg"
import './redes.css';

export const Redes = () => {
  return (
    <div>
        
<div className="container text-center  mt-3">
  <div className="row justify-content-center">
    
    <li>  <a href="https://www.instagram.com/ac_creadordigital/profilecard/?igsh=MnJlMWpsYjBheGY1" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className='iconos' alt="Instagram" />
            </a></li>
   
    <li> <a href="https://wa.me/2616655143" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} className='iconos' alt="WhatsApp" />
            </a></li>
    
     <li> <a href="https://www.linkedin.com/in/hernan-cruz-216741343/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className='iconos' alt="LinkedIn" />
            </a></li>
    
  </div>
</div>


    </div>
  )
}
